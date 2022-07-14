import React from 'react';
import '../scss/Footer.scss';
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <section className="footer">
      Copyright ©️
      <a href="https://github.com/Yilikal250">
        <AiFillGithub />
        Yilikal Teshome
      </a>
    </section>
  );
}

export default Footer;
