function startAnimation(){
    console.log('start');
    const currentSlide = document.querySelector('.slide-bg__inner--current');
    const currentShape = document.querySelector('.shapes__item--current');
    const currentText = document.querySelector('.slides__slide--active');


    
    startingTl.fromTo('.header', 0.5, {
      opacity: 0,
      y: 100,
      delay: 0.6,
  },  {
        opacity: 1,
        y: 0,
        delay: 0.6,
    })
    .to(currentText.querySelector('.subtitle'), 0.6, {
        opacity: 1,
    }, '-=0.1')
    .to(currentText.querySelector('.slides__title'), 0.7, {
        opacity: 1,
        y: 0,
    }, '-=0.1')
    .to(currentText.querySelector('.slides__type'), 0.7, {
        opacity: 1,
        y: 0,
    }, '-=0.6')
    .from(currentSlide, 0.4, {
        xPercent: 100,
        opacity: 0
      }, '-=0.4')
      .fromTo(currentSlide.querySelector('.slide-bg__link'), 0.4, {
        xPercent: -100,
        opacity: 0
      },{
        xPercent: 0,
        opacity: 1
      },'-=0.7')
      .from(currentShape, 0.6, {
        xPercent: 100
      }, '-=0.2')
      .from(currentShape.querySelector('.shapes__content'), 0.6, {
        xPercent: -100,
        opacity: 0,
        delay: -0.6
      }, '-=0.2')
};