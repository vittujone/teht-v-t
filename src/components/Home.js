import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="leftSide">
        <h1>Welcome</h1>
        <p>
          Explore the world of Ikirauta Interactive. We create immersive
          experiences using modern technologies. Dive in and enjoy our content!
        </p>
      </div>

      <div className="rightSide">
        <h1>Ikirauta Interactive</h1>
        <iframe 
          src="https://www.youtube.com/embed/rHkJMwdog1g" 
          title="YouTube video player" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
