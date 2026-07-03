import React from 'react';
import { translations } from '../translations';

function Portfolio({ language }) {
  return (
    <div className="page">
      <h1>{translations[language].lab.title}</h1>
      <p>{translations[language].lab.description}</p>
    </div>
  );
}

export default Portfolio;