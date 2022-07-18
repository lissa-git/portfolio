const textSlides = (direction) => {
    let currentSlide = document.querySelector('.slides__slide--active');
    let nextSlide;
    direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;
  
    if (nextSlide) {
  
      const tl = gsap.timeline({defaults: { ease: easing }});
  
      tl.to(currentSlide.querySelector('.subtitle'), 0.6, {
        opacity: 0,
      })
      .to(currentSlide.querySelector('.slides__title'), 0.6, {
        opacity: 0,
        y: 100
      }, '-=0.6')
      .to(currentSlide.querySelector('.slides__type'), 0.6, {
        opacity: 0,
        y: 100
      }, '-=0.6')
      .to(nextSlide.querySelector('.subtitle'), 0.6, {
        opacity: 1,
      }, '-=0.1')
      .to(nextSlide.querySelector('.slides__title'), 0.6, {
        opacity: 1,
        y: 0
      }, '-=0.5')
      .to(nextSlide.querySelector('.slides__type'), 0.6, {
        opacity: 1,
        y: 0
      }, '-=0.5');
  
      currentSlide.classList.remove('slides__slide--active');
      nextSlide.classList.add('slides__slide--active');
    }
  };