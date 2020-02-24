import React from 'react';
import './styles.css';

export default function About() {
  return(
  <>
    <nav>
      <ul className="nav-list">
        <li><a className="nav-link" href="/eric">Home</a></li>
        <li><a className="nav-link" href="/eric/about">About</a></li>
        <li><a className="nav-link" href="/eric/contact">Contact</a></li>
      </ul>
    </nav>

    <main>
      <div className="about-container">
        <div className="about-description">
          <h1>Sobre</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum itaque doloribus maxime, iure fugiat, saepe unde delectus quo laboriosam veniam vel, assumenda mollitia! Reiciendis nesciunt odit voluptate tempora ipsa itaque, voluptatem dicta tenetur nobis, unde voluptas corrupti a id maiores. Voluptas ex accusantium vel!</p>
        </div>
      </div>
    </main>

    <footer className="footer">
      Com amor <span> ❤✌😗 </span> @Finnkell
    </footer>
  </>
  );
}