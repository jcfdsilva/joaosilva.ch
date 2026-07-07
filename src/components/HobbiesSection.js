import { useRef, useEffect, useState, useCallback } from "react";
import { translations } from '../translations';


const PIXEL_SIZE = 18;
const REVEAL_RADIUS = 100;
const FEATHER = 60;

function drawPixelated(ctx, offscreen, canvasW, canvasH, mx, my) {
  ctx.clearRect(0, 0, canvasW, canvasH);
  const octx = offscreen.getContext("2d");
  const cols = Math.ceil(canvasW / PIXEL_SIZE);
  const rows = Math.ceil(canvasH / PIXEL_SIZE);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const px = c * PIXEL_SIZE + PIXEL_SIZE / 2;
      const py = r * PIXEL_SIZE + PIXEL_SIZE / 2;
      const dist = Math.sqrt((px - mx) ** 2 + (py - my) ** 2);

      let blockSize;
      if (dist < REVEAL_RADIUS) {
        blockSize = 1;
      } else if (dist < REVEAL_RADIUS + FEATHER) {
        const t = (dist - REVEAL_RADIUS) / FEATHER;
        blockSize = Math.round(1 + (PIXEL_SIZE - 1) * t * t);
      } else {
        blockSize = PIXEL_SIZE;
      }

      const srcX = c * PIXEL_SIZE;
      const srcY = r * PIXEL_SIZE;
      const srcW = Math.min(PIXEL_SIZE, canvasW - srcX);
      const srcH = Math.min(PIXEL_SIZE, canvasH - srcY);

      if (blockSize <= 1) {
        ctx.drawImage(offscreen, srcX, srcY, srcW, srcH, srcX, srcY, srcW, srcH);
      } else {
        const sample = octx.getImageData(
          Math.max(0, Math.min(canvasW - 1, srcX)),
          Math.max(0, Math.min(canvasH - 1, srcY)),
          1, 1
        ).data;
        ctx.fillStyle = `rgb(${sample[0]},${sample[1]},${sample[2]})`;
        ctx.fillRect(srcX, srcY, srcW, srcH);
      }
    }
  }
}

function HobbyCard({ language, hobby, isDraggingRef }) {
  const cardRef = useRef(null);
  const canvasRef = useRef(null);
  const offscreenRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const card = cardRef.current;
    if (!canvas || !card) return;

    const { width, height } = card.getBoundingClientRect();
    const W = Math.round(width);
    const H = Math.round(height);

    canvas.width = W;
    canvas.height = H;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";

    const offscreen = document.createElement("canvas");
    offscreen.width = W;
    offscreen.height = H;
    offscreenRef.current = offscreen;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const octx = offscreen.getContext("2d");
      const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      octx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);
      const ctx = canvas.getContext("2d");
      drawPixelated(ctx, offscreen, W, H, -9999, -9999);
    };
    img.onerror = () => {
      const octx = offscreen.getContext("2d");
      octx.fillStyle = "#1a1a1a";
      octx.fillRect(0, 0, W, H);
      const ctx = canvas.getContext("2d");
      drawPixelated(ctx, offscreen, W, H, -9999, -9999);
    };
    img.src = hobby.img;
  }, [hobby.img]);

  const resetToPixelated = useCallback(() => {
    setHovered(false);
    mouseRef.current = { x: -9999, y: -9999 };
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const canvas = canvasRef.current;
    const offscreen = offscreenRef.current;
    if (canvas && offscreen) {
      const ctx = canvas.getContext("2d");
      drawPixelated(ctx, offscreen, canvas.width, canvas.height, -9999, -9999);
    }
  }, []);

  const scheduleRedraw = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const canvas = canvasRef.current;
      const offscreen = offscreenRef.current;
      if (!canvas || !offscreen) return;
      const ctx = canvas.getContext("2d");
      drawPixelated(ctx, offscreen, canvas.width, canvas.height, mouseRef.current.x, mouseRef.current.y);
    });
  }, []);

  const handleMouseMove = useCallback((e) => {
    // Read the ref directly — no stale state closure
    if (isDraggingRef.current) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    scheduleRedraw();
  }, [isDraggingRef, scheduleRedraw]);

  const handleMouseEnter = useCallback(() => {
    if (isDraggingRef.current) return;
    setHovered(true);
  }, [isDraggingRef]);

  const handleMouseLeave = useCallback(() => {
    resetToPixelated();
  }, [resetToPixelated]);

  return (
    <div
      ref={cardRef}
      className={`hobby-card${hovered ? " hovered" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ userSelect: "none" }}
    >
      <canvas ref={canvasRef} className="card-canvas" />
      <div className="card-overlay" />
      <div className="card-content">
        <span className="card-tag">{hobby.tag}</span>
        <div className="card-index">{hobby.index}</div>
        <div className="card-footer">
          <div className="card-line" style={{ "--accent": hobby.color }} />
          <h2 className="card-title">{hobby.title}</h2>
          <p className="card-sub">{hobby.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export function HobbiesSection({language}) {
  const trackRef = useRef(null);
  const [scrollPct, setScrollPct] = useState(0);
  // Use a ref for isDragging so card handlers always read the latest value
  // without needing to be recreated (avoids stale closure problem)
  const isDraggingRef = useRef(false);
  const [draggingVisual, setDraggingVisual] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const max = track.scrollWidth - track.clientWidth;
      setScrollPct(max > 0 ? track.scrollLeft / max : 0);
    };
    track.addEventListener("scroll", onScroll, { passive: true });

    let startX = 0;
    let startScrollLeft = 0;

    const onPointerDown = (e) => {
      // Capture pointer so all subsequent events come to track
      // even when cursor moves over child elements
      track.setPointerCapture(e.pointerId);
      startX = e.clientX;
      startScrollLeft = track.scrollLeft;
    };

    const onPointerMove = (e) => {
      // Only process if this pointer is captured by the track
      if (!track.hasPointerCapture(e.pointerId)) return;
      const delta = e.clientX - startX;
      if (!isDraggingRef.current && Math.abs(delta) > 4) {
        isDraggingRef.current = true;
        setDraggingVisual(true);
      }
      if (isDraggingRef.current) {
        // delta positive = moved right = scroll left
        track.scrollLeft = startScrollLeft - delta;
      }
    };

    const onPointerUp = (e) => {
      if (track.hasPointerCapture(e.pointerId)) {
        track.releasePointerCapture(e.pointerId);
      }
      isDraggingRef.current = false;
      setDraggingVisual(false);
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointercancel", onPointerUp);

    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <>
      <CustomCursor />

      <div className="hobbies-header">
        <div>
          <h1 className="hobbies-heading">{translations[language].home.resume.hobbies_title}</h1>
          <p className="hobbies-eyebrow">{translations[language].home.resume.hobbies_subtitle}</p>
        </div>
        <span className="hobbies-count">{translations[language].home.resume.hobbies.length} {translations[language].home.resume.hobbies_passion}</span>
      </div>

      <div
        ref={trackRef}
        className="hobbies-track"
        style={{ cursor: draggingVisual ? "grabbing" : "grab" }}
      >
        {translations[language].home.resume.hobbies.map((hobby) => (
          <HobbyCard language={language} key={hobby.id} hobby={hobby} isDraggingRef={isDraggingRef} />
        ))}
      </div>

      <div className="hobbies-progress">
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${scrollPct * 100}%` }} />
        </div>
        <span className="progress-hint">{translations[language].home.resume.hobbies_drag}</span>
      </div>
    </>
  );
}

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}