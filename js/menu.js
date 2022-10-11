const menuOpening = () => {
    menuBtn.addEventListener("click", ()=> {
        menu.classList.add('menu__inner--active');
    })
};

const menuClosing = () => {
    menuClose.addEventListener("click", ()=> {
        menu.classList.remove('menu__inner--active');
    })
};

const selectImage = (dataImage) => {
    const images = document.querySelectorAll('.slide-bg__inner');
    images.forEach( image => {
        let imgId = image.getAttribute('data-id');
        if (dataImage === imgId){
            image.classList.add('slide-bg__inner--current');
        }
    })
};

const selectShape = (dataShape) => {
    const shapes = document.querySelectorAll('.shapes__item');
    shapes.forEach( shape => {
        let shapeId = shape.getAttribute('data-id');
        if (dataShape === shapeId){
            shape.classList.add('shapes__item--current');
        }
    });
};

const selectText = (dataText, currentTextId) => {
    const texts = document.querySelectorAll('.slides__slide');
    texts.forEach( text => {
        let textId = text.getAttribute('data-id');
        let currentText;
        if (dataText === textId){
            texts.forEach( text => {
                let currentId = text.getAttribute('data-id');
                if (currentId === currentTextId){
                    currentText = text;
                }
            });
            if (dataText != currentTextId){
                const tl = gsap.timeline({defaults: { ease: easing }});
  
                tl.to(currentText.querySelector('.subtitle'), 0.6, {
                    opacity: 0,
                })
                .to(currentText.querySelector('.slides__title'), 0.6, {
                    opacity: 0,
                    y: 100
                }, '-=0.6')
                .to(currentText.querySelector('.slides__type'), 0.6, {
                    opacity: 0,
                    y: 100
                }, '-=0.6')
                .to(text.querySelector('.subtitle'), 0.6, {
                    opacity: 1,
                }, '-=0.1')
                .to(text.querySelector('.slides__title'), 0.6, {
                    opacity: 1,
                    y: 0
                }, '-=0.5')
                .to(text.querySelector('.slides__type'), 0.6, {
                    opacity: 1,
                    y: 0
                }, '-=0.5');
            }

            text.classList.add('slides__slide--active');
        }
    });
};
const btnRedirecting = () => {
    menuBtns.forEach( menuBtn => {
        menuBtn.addEventListener('click', ()=>{
        let itemClass = `slide-${slideCounter}`;
        let currentImg = document.querySelector('.slide-bg__inner--current');
        currentImg.classList.remove('slide-bg__inner--current');
        let currentShape = document.querySelector('.shapes__item--current');
        currentShape.classList.remove('shapes__item--current');
        let currentText = document.querySelector('.slides__slide--active');
        let currentTextId = currentText.getAttribute('data-id');
        currentText.classList.remove('slides__slide--active');
        if (menuBtn.getAttribute('data-id')=== "bookville"){
            mainSection.classList.remove(itemClass);
            slideCounter = 1;
            mainSection.classList.add('slide-1');
            selectImage('1');
            selectShape('1');
            selectText('1', currentTextId);
        }else if(menuBtn.getAttribute('data-id')=== "100cgi"){
            mainSection.classList.remove(itemClass);
            slideCounter = 2;
            mainSection.classList.add('slide-2');
            selectImage('2');
            selectShape('2');
            selectText('2', currentTextId);
        }else if(menuBtn.getAttribute('data-id')=== "rueku"){
            mainSection.classList.remove(itemClass);
            slideCounter = 3;
            mainSection.classList.add('slide-3');
            selectImage('3');
            selectShape('3');
            selectText('3', currentTextId);
        }else if(menuBtn.getAttribute('data-id')=== "madeshkaf"){
            mainSection.classList.remove(itemClass);
            slideCounter = 4;
            mainSection.classList.add('slide-4');
            selectImage('4');
            selectShape('4');
            selectText('4', currentTextId);
        }else if(menuBtn.getAttribute('data-id')=== "gastroshef"){
            mainSection.classList.remove(itemClass);
            slideCounter = 5;
            mainSection.classList.add('slide-5');
            selectImage('5');
            selectShape('5');
            selectText('5', currentTextId);
        }
        menu.classList.remove('menu__inner--active');
        });
        
    })
}