 //функция определения поддержки WebP
function testWebP(callback) { 

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });


    const showNextSlide = () => {
        if (slideCounter !== 0) {
            bgSlides('down');
            imagesSlides('down');
            shapesSlides('down');
            textSlides('down');
        }
        
    };
    const showPrevSlide = () => {
        if (slideCounter > 1) {
           bgSlides('up'); 
           imagesSlides('up');
           shapesSlides('up');
           textSlides('up');
        }
        
    };

const init = () =>{
    window.onload = function(){
        const welcomeScreen = document.querySelector('.welcome-screen');
        welcomeScreen.classList.add('welcome-animation');

        if (window.innerWidth > 768){
            window.addEventListener('wheel', (e) => {
                if (welcomeScreen.classList.contains('welcome-hidden')){
                        let delta = -e.deltaY;
                        
                        if (delta > 0 ){
                            if (helperInput.value == '1'){
                                helperInput.value = 0;
                                showPrevSlide();
                                setTimeout(() => {
                                    helperInput.value = 1;
                                }, 1500);
                            }  
                        }else {
                            if (helperInput.value == '1'){
                                helperInput.value = 0;
                                showNextSlide();
                                setTimeout(() => {
                                    helperInput.value = 1;
                                }, 1500);
                            }
                        }
                } else {
                    let delta = -e.deltaY;
    
                if (delta <= 0 ){
                    if (helperInput.value == '1'){
                        helperInput.value = 0;
                        welcomeScreen.classList.remove('welcome-animation');
                        welcomeScreen.classList.add('welcome-hidden');
                        
                        setTimeout(() => {
                            startAnimation();
                        }, 350);
                        setTimeout(() => {
                            welcomeScreen.classList.add('welcome-none');
                        }, 2000);
                        setTimeout(() => {
                            helperInput.value = 1;
                        }, 1500);
                    }
                }
                }
            });
        }else {
            document.addEventListener('swiped-left', ()=>{
                if (welcomeScreen.classList.contains('welcome-hidden')){
                    showNextSlide();
                } else {
                    welcomeScreen.classList.remove('welcome-animation');
                    welcomeScreen.classList.add('welcome-hidden');
                    setTimeout(() => {
                        startAnimation();
                    }, 350);
                    setTimeout(() => {
                        welcomeScreen.classList.add('welcome-none');
                    }, 2000);
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 1500);
                }
            });
            document.addEventListener('swiped-up', ()=>{
                if (welcomeScreen.classList.contains('welcome-hidden')){
                    showNextSlide();
                } else {
                    welcomeScreen.classList.remove('welcome-animation');
                    welcomeScreen.classList.add('welcome-hidden');
                    setTimeout(() => {
                        startAnimation();
                    }, 350);
                    setTimeout(() => {
                        welcomeScreen.classList.add('welcome-none');
                    }, 2000);
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 1500);
                }
                
            });
            document.addEventListener('swiped-right', ()=>{
                showPrevSlide();
            });
            document.addEventListener('swiped-down', ()=>{
                showPrevSlide();
            });

        }

        menuOpening();
        menuClosing();
        btnRedirecting();
    }
};

init();