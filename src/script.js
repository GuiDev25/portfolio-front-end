function mostrarMenu(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open');
    }
}
window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrolltop');
        scroll.classList.toggle('active', window.scrollY > 720);
})

function voltar(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}