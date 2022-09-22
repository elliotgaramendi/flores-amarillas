'use strict';

const documentReady = () => {
  const heroImg = document.getElementById('heroImg');

  const documentScroll = () => {
    heroImg.style.top = `${scrollY * 0.5}px`;
  };

  document.addEventListener('scroll', documentScroll);
};
document.addEventListener('DOMContentLoaded', documentReady);