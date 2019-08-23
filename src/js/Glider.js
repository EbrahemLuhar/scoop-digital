class Glider {
  constructor() {
    this.initialiseGlider();
  }

  initialiseGlider() {
    const elem = document.querySelector('.carousel');
    const flkty = new Flickity( elem, {
      freeScroll: true,
      wrapAround: true,
      setGallerySize: false,
      autoPlay: true
    });
    flkty();
  }
}

export default Glider;
