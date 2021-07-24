import React from 'react';
import './styles.css';

function Footer() {
  return (
    <div id="footer">
      <h3>Lucas Henrique Paz</h3>
      <span>
        Follow me to see more of my work on my social medias:
      </span>
      <div>
        <a href="https://github.com/LucasH-Paz" target="_blank" rel="noreferrer">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/lucas-paz-dev/" target="_blank" rel="noreferrer">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/lucasofpeace/" target="_blank" rel="noreferrer">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <span className="copyright">Copyright© 2021 Lucas Paz. Todos os direitos reservados</span>
    </div>
  )
}

export default Footer;