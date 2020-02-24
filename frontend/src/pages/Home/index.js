import React from 'react';
import './styles.css';

import About from '../About/index'

import foto from '../../images/foto.jpg';

export default function Home() {
  return(
    <nav>
      <ul class="nav-list">
        <li><a class="nav-link" href="/home">Home</a></li>
        <li><a class="nav-link" href="/about">About</a></li>
        <li><a class="nav-link" href={Home}>Contact</a></li>
      </ul>

      <main>
        <section class="home">
          <div class="home-content">
            <div className="home-description">
              <a href={Home}>Eric Batista</a>
              <p>Matemática aplicada e Computacional</p>
            </div>
            <img src={foto} alt="Eu mesmo"/>
          </div>
        </section>
      </main>
    </nav>
  );
}