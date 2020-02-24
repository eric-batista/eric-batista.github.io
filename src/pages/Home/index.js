import React from 'react';
import './styles.css';

import foto from '../../images/foto.jpg';

export default function Home() {
  return(<>
    <nav>
      <ul className="nav-list">
        <li><a className="nav-link" href="/eric">Home</a></li>
        <li><a className="nav-link" href="/eric/about">About</a></li>
        <li><a className="nav-link" href="/eric/contact">Contact</a></li>
      </ul>
    </nav>

    <main>
      <section className="home">
        <div className="home-content">
          <div className="home-description">
            <a href="/eric/about">Eric Batista</a>
            <p>Matemática aplicada e Computacional</p>
          </div>
          <img src={foto} alt="Eu mesmo"/>
        </div>
      </section>
    </main>
  </>
  );
}