document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.getElementById('heroVideo');
    const playbackSpeed = parseFloat(heroVideo.dataset.speed);
    heroVideo.playbackRate = playbackSpeed;

    const header = document.querySelector("header");

    function playVideoOnLoad() {
        heroVideo.play();
    }

    window.addEventListener("load", playVideoOnLoad);


    
    window.addEventListener("scroll", function(){

    const html = document.documentElement;
    let scrollPosition = window.pageYOffset;
    let banner1 = document.querySelector(".hero")

    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop/maxScrollTop;
    const banner_content_h2 = document.querySelector(".banner-content");
    const halfwayCounted = 1-(scrollFraction*8);
    console.log(halfwayCounted);
    const banner_content_p = document.querySelector(".banner_content_p");
    const cta = document.querySelector(".cta");

        if(halfwayCounted <= -3.7){
            banner_content_h2.style.opacity = "1";
            banner_content_h2.style.transition = "2s";
            
        }else{
            banner_content_h2.style.opacity = "0";
            
        }

if (window.pageYOffset > 50) {
            header.style.top = "0"; // Zeigt den Header an, wenn man nach unten scrollt
        } else {
            header.style.top = "-100px"; // Versteckt den Header, wenn man oben angekommen ist
        }

})

});
