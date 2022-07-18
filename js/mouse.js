function moveMouse(e){
    if (e.clientX < 5 || e.clientY < 5 ||  e.clientY > (window.innerHeight - 5) || e.clientX > (window.innerWidth - 5)){
        mouse.style.opacity = 0;
    } else{
        mouse.style.opacity = 1;
        mouse.style.transform = `translate(${e.clientX - 15}px, ${e.clientY -15}px)`
    }
};

if (window.innerWidth >=768){
    document.addEventListener('mousemove', moveMouse);

    slideBg.addEventListener('mouseover', () => { mouse.classList.add('view-visible') });
    slideBg.addEventListener('mouseleave', () => { mouse.classList.remove('view-visible') });

    menuBtn.addEventListener('mouseover', () => { mouse.classList.add('links-visible') });
    menuBtn.addEventListener('mouseleave', () => { mouse.classList.remove('links-visible') });

    menu.addEventListener('mouseover', () => { mouse.classList.add('links-visible') });
    menu.addEventListener('mouseleave', () => { mouse.classList.remove('links-visible') });

    authorLink.addEventListener('mouseover', () => { mouse.classList.add('links-visible') });
    authorLink.addEventListener('mouseleave', () => { mouse.classList.remove('links-visible') });
    
}