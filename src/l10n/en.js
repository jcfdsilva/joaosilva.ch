export const en =  {
        nav: {
            home: 'Home',
            research: 'Research',
            contact: 'Contact'
        },
        home: {
            title: 'Hello!',
            description: 'My name is João',
            resume: {
                experience: 'Portfolio',
                portfolio:[
                    {
                        id: "pinchbot",
                        title: "PinchBot",
                        background: "pinch.png",
                        href: "/pinchbot"
                    },
                    {
                        id: "research_blog",
                        title: "Research blog",
                        background: "research_blog.png",
                        href: "/research_blog"
                    },
                    {
                        id: "opengis4et",
                        title: "Citiwatts",
                        background: "citiwatts.png",
                        href: "/citiwatts"
                    },
                    {
                        id: "it_manager",
                        title: "IT Management",
                        background: "itmanager.png",
                        href: "/it_management"
                    },
                    {
                        id: "prettynicky",
                        title: "Prettynicky",
                        background: "pretty.png",
                        href: "/prettynicky"
                    },
                    {
                        id: "pinchsmall",
                        title: "Pinchsmall",
                        background: "pinchsmall.png",
                        href: "/pinchsmall"
                    },
                ],
                info: 'About Me',
                diplomas_subtitle: 'Diplomas',
                diplomas: [
                    {
                        area: "Business IT",
                        certificate: "Bachelor of science",
                        year: "2021",
                        school:"HES-SO"
                    },
                    {
                        area: "Business administration",
                        certificate: "Bachelor of science",
                        year: "2021",
                        school:"Haaga Helia"
                    },
                    {
                        area: "Business employee",
                        certificate: "Federal Vocational Baccalaureate",
                        year: "2017",
                        school:"ECCG Monthey"
                    },
                ],
                work_subtitle:'Work Experience',
                work:[
                    {
                        company:"EPFL",
                        start:"Jan 2026",
                        end:"",
                        job:"System Specialist / Software Engineer ",
                        descripton:"Supported IT operations during a transition period while contributing to a startup-oriented software platform built with APIs, OAuth, React, and PostgreSQL, and continued supervising the RAG LLM integration on the main tool. Also helped shape a Kubernetes and DevSecOps approach for secure and scalable deployment."
                    },
                    {
                        company:"EPFL",
                        start:"Jul 2023",
                        end:"Jan 2026",
                        job:"IT Manager / Software Developer",
                        descripton:"Managed IT infrastructure and software development for an engineering team focused on industrial processes and energy systems. Oversaw servers, virtual machines, and applications, and developed software and AI-based tools using open-source LLMs."
                    },
                    {
                        company:"HES-SO",
                        start:"Feb 2021",
                        end:"Jul 2023",
                        job:"Research Assistant",
                        descripton:"Contributed to national and European research projects including DomOS, GOFLEX, and MAPEC, with work spanning geodata, databases, mobile deployment, and full-stack development. Also served as Scrum Master in the initial phase of the citiwatts.eu project and led frontend work."
                    },{
                        company:"Signant Health",
                        start:"Aug 2019",
                        end:"Dec 2019",
                        job:"Mobile Developer",
                        descripton:"Worked on an eHealth application in a multidisciplinary project, contributing to UX/UI research, unit testing, and Flutter development for Android and iOS. Collaborated in an agile setup using Trello, Scrum, Slack, and GitHub."
                    },{
                        company:"Linda Photography Sàrl",
                        start:"Aug 2016",
                        end:"Aug 2017",
                        job:"Student Intern",
                        descripton:"Managed daily accounting, client communications, and WordPress/Squarespace websites. Supervised the development of a photographers' calendar management platform by creating user stories and participating in review meetings with an external team."
                    },
                ],
                hobbies_title: "Hobbies",
                hobbies_subtitle: "What I do when I'm not coding",
                hobbies_passion: "passions",
                hobbies_drag: "Drag to explore",
                hobbies: [
                    {
                        id: "climbing",
                        title: "Climbing",
                        subtitle: "Via ferrata · indoor climbing",
                        index: "01",
                        color: "#0077FF",
                        img: "climbing.jpeg",
                        tag: "ADRENALINE",
                    },
                    {
                        id: "running",
                        title: "Running",
                        subtitle: "1x Marathon finnisher and smaller distances for fun",
                        index: "02",
                        color: "#FF4D00",
                        img: "run.jpeg",
                        tag: "DISCIPLINE",
                    },
                    {
                        id: "travel",
                        title: "Travel",
                        subtitle: "Solo · Friends · Family · Meeting new people",
                        index: "03",
                        color: "#00C896",
                        img: "travel.jpeg",
                        tag: "FREEDOM",
                    },
                    {
                        id: "snowboard",
                        title: "Snowboard",
                        subtitle: "Snowboard always gets me in a good mood",
                        index: "04",
                        color: "#0077FF",
                        img: "snow.jpeg",
                        tag: "EVASION",
                    },
                    {
                        id: "wakeboard",
                        title: "Wakeboard",
                        subtitle: "Wakeboard and other watersports for fun",
                        index: "05",
                        color: "#FF4D00",
                        img: "wake.jpeg",
                        tag: "FUN",
                    },
                    {
                        id: "roadtrips",
                        title: "Road Trips",
                        subtitle: "Riding a motorcycle around",
                        index: "06",
                        color: "#FFB800",
                        img: "moto.jpeg",
                        tag: "WANDERLUST",
                    },
                    {
                        id: "motorsports",
                        title: "Motorsports",
                        subtitle: "Trying snowmobiles, rally cars, etc.",
                        index: "07",
                        color: "#0077FF",
                        img: "motorsports.jpeg",
                        tag: "FUN",
                    }
                ]
            },
        },
        pinchbot:{
            title: "Pinchbot",
            slice:5,
            eyebrow: "Project showcase",
            subtitle: '"A RAG-based multi-agent chatbot designed to assist with class-related questions and seamlessly integrate into the research software developed by the group"',
            description: "PinchBot is a software system built on a RAG-based infrastructure and served through a Python API. It was originally developed to be integrated into software for pinch analysis, providing intelligent assistance within that domain. With the addition of a multi-agent architecture, PinchBot has become a flexible and extensible platform that can be integrated into a wider range of projects and use cases.",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Designed the system infrastructure from scratch using a multi-container architecture.",
                "Integrated and orchestrated the API, NoSQL database, vector database, content management system (CMS), and frontend into a scalable and modular deployment.",
                "Studied the fundamentals of artificial intelligence, including machine learning concepts, neural networks, search algorithms, and ethical considerations.",
                "Evaluated and documented the performance of various large language models (LLMs) and embedding models through systematic testing and comparison.",
                "Developed a frontend featuring conversation history, user management, and a server-side code runner capable of executing Python scripts and rendering Markdown content.",
                "Developed a frontend CMS that enabled administrators to manage a hierarchical multi-agent structure and upload PDF documents to enrich the vector database used for RAG.",
                "Transitioned from leading development of PinchBot to the group’s main software project, taking over as technical lead and reprioritizing responsibilities."
            ],
            images: [
                "bot1.png",
                "bot2.png",
                "bot3.png",
            ],
        },
        research_blog:{
            title: "Research Blog",
            slice:9,
            eyebrow: "Project showcase",
            subtitle: '"A Quarto-based research blog accessible via the “Research” tab in the website navigation bar."',
            description: "A Quarto-based research blog serving as a digital notebook for a range of interests, including AI development, Kubernetes infrastructure, cybersecurity (with password-protected sections due to ISC2-related content), JavaScript experiments, and cooking recipes.",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Wrote the AI chapter, building on the Elements of AI certification and additional research conducted during the development of PinchBot",
                "Created a password-protected Cybersecurity chapter to organize notes from my ISC2 certification studies.",
                "Implemented JavaScript algorithms and interactive 3D visualizations as personal coding challenges.",
                "Currently developing the Kubernetes chapter while applying its concepts in real-world deployments",
                "Collected and documented some of my favorite recipes for easy access and future reference.",
            ],
            images: [
                "research1.png",
                "research2.png",
                "research3.png",
            ],
        },
        citiwatts: {
            title: "Citiwatts",
            slice:4,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        it_management:{
            title: "IT management",
            slice:3,
            eyebrow: "Project showcase",
            subtitle: '"Oversaw the IT administration and infrastructure for an EPFL research group."',
            description: "Managed the research group's IT infrastructure, including workstation deployment and maintenance, Active Directory administration, virtual machine hosting, CI pipelines, and server management supporting multiple online research publications.",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Managed virtualized infrastructure using VMware and Proxmox, including Active Directory integration on physical servers.",
                "Administered multiple GitLab projects and CI/CD pipelines for Quarto-based static websites and Streamlit applications.",
                "Developed a variety of internal tools to support teaching and classroom activities.",
                "Deployed and maintained multiple types of web services, including public-facing, DMZ, intranet, and OAuth-protected applications.",
                "Provided technical support to researchers for the development, deployment, and maintenance of software tools and computing environments",
                "Gained extensive experience with Bash scripting and Linux system administration across Linux, macOS, and Windows environments."
            ],
            images: [
                "admin1.png",
                "admin2.png",
                "admin3.png",
            ],
        },
        prettynicky:{
            title: "Pretty Nicky",
            slice:6,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        pinchsmall:{
            title: "Pinchsmall",
            slice:5,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "pinch1.png",
                "pinch2.png",
                "pinch3.png",
            ],
        },
        contact: {
            title: 'Get in touch',
            description: "Have a question or want to work together? Send me a message.",
            fields: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                captcha: (a, b) => `Quick check: what is ${a} + ${b}?`,
                captchaLoading: 'Loading security question…',
            },
            send: 'Send message',
            sending: 'Sending…',
            success: "Thanks! Your message has been sent — I'll get back to you soon.",
            errors: {
                generic: 'Something went wrong. Please try again.',
                network: 'Could not reach the server. Check your connection and try again.',
                captchaLoad: 'Could not load the security question. Please refresh the page.',
            },
        }
    }