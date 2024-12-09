import React from 'react';
import './Yhteytta.css'; // css linkitys
import Matti from '../kuvat/hattu2.jpg'; // importtaa kuvat profiileita varten
import Bilge from '../kuvat/catustemp02.jpg';
import Soini from '../kuvat/Soini.jpg';

const Yhteytta = () => {
  return (
    <div className="Yhteytta-container">
      <h2>Contact us</h2> {/*Yläotsikko*/}
      <div className="image-row"> {/*Tekee rivin jolle kaikki profiilit sijoittuvat*/}
        <div className="image-item">
          <h3>Matti Liipola</h3>
          <img src={Matti} alt="Description 1" /> {/*Lisää kuvan*/}
          <p>-Founder</p>
          <p>-Artist</p>
          <p>-Programmer</p>
          <p>
            <a href="mailto:matti.liipola@ikirautainteractive.fi"> {/*Jos painaa email osoitetta, niin se avautuu viestinä.*/}
              matti.liipola@ikirautainteractive.fi 
            </a>
          </p>
        </div>
        <div className="image-item">
          <h3>Alexander Soini</h3>
          <img src={Soini} alt="Description 2" />
          <p>-Designer</p>
          <p>-Research Lead</p>
          <p>-Writer</p>
          <p>
            <a href="mailto:alexander.soini@ikirautainteractive.fi">
              alexander.soini@ikirautainteractive.fi
            </a>
          </p>
        </div>
        <div className="image-item">
          <h3>Bilgehan Alboga</h3>
          <img src={Bilge} alt="Description 3" />
          <p>-Marketing Director</p>
          <p>-HR manager</p>
          <p>-QA lead</p>
          <p>
            <a href="mailto:bilgehan.njim@ikirautainteractive.fi">
              bilgehan.njim@ikirautainteractive.fi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Yhteytta;
