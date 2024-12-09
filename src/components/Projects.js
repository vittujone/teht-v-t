import React from 'react';
import './Projects.css';

const Projects = () => (
  <div className="projectsContainer">
    <h1>Currently in development</h1>
    <div className="projectGrid">
      <div className="projectCard">
        <h3>Project name: Innkeeper Online</h3>
        <h4>Avatar-based 3D chatroom for browsers and mobile devices</h4>
        <p>Point & Click</p>
        <p>Low Barrier of entry</p>
        <p>Customizable avatars</p>
        <img 
          src="https://i.pinimg.com/736x/14/e2/ba/14e2badecd6e1f9985edfe7838f3d7cb.jpg" 
          alt="Shadows of Eldoria" 
          className="projectImage"
        />
      </div>
      <div className="projectCard">
        <h3>Megaslayer</h3>
        <h4>Heavily stylized topdown wave survival shooter</h4>
        <p>Top down</p>
        <p>Wave survival</p>
        <p>Horde shooter</p>
        <img 
          src="https://preview.redd.it/point-and-click-adventure-game-assets-concept-art-questions-v0-oks5bejzu47c1.png?width=1048&format=png&auto=webp&s=afb66fca4e4283f5b4965fa0feabbe7be7cb3e36" 
          alt="Mystery of the Forgotten Isle" 
          className="projectImage"
        />
      </div>
    </div>
  </div>
);

export default Projects;
