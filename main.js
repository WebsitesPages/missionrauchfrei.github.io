document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.getElementById('heroVideo');
    const playbackSpeed = parseFloat(heroVideo.dataset.speed);
    heroVideo.playbackRate = playbackSpeed;

    const header = document.querySelector("header");

    function playVideoOnLoad() {
        heroVideo.play();
    }

    window.addEventListener("load", playVideoOnLoad);

    const html = document.documentElement;
    let scrollPosition = window.pageYOffset;
    let banner1 = document.querySelector(".hero");

    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop/maxScrollTop;
    let halfwayCounted = 1-(scrollFraction*8);
    halfwayCounted = halfwayCounted.toFixed(1);
    console.log(halfwayCounted);

    const banner_content_h2 = document.querySelector(".banner-content");
    const banner_content_p = document.querySelector(".banner_content_p");
    const cta = document.querySelector(".cta");

    

    // if (window.pageYOffset > 50) {
    //     header.style.top = "0"; // Zeigt den Header an, wenn man nach unten scrollt
    // } else {
    //     header.style.top = "-100px"; // Versteckt den Header, wenn man oben angekommen ist
    // }

    const arrow = document.querySelector(".c5");
    const hero_content = document.querySelector(".hero-content");
    const arrow_text = document.querySelector(".c6");
    
    if (halfwayCounted = 1){
        hero_content.style.opacity = "1";
        hero_content.style.transition = "2.5s";
    }
  
    if (halfwayCounted <= 0) {
        arrow.style.opacity = halfwayCounted;
        arrow.style.transition = ".5s";
        arrow_text.style.opacity = halfwayCounted;
        arrow_text.style.transition = ".5s";
    } else {
        arrow.style.opacity = "1";
    }

    window.addEventListener("scroll", function(){
        let scrollPosition = window.pageYOffset;

        const scrollTop = html.scrollTop;
        const maxScrollTop = html.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop/maxScrollTop;
        halfwayCounted = 1-(scrollFraction*8);
        halfwayCounted = halfwayCounted.toFixed(1);
        console.log(halfwayCounted);

        const b1 = document.querySelector(".b1");
        const b2 = document.querySelector(".b2");
        const b3 = document.querySelector(".b3");
        const b4 = document.querySelector(".b4");
        const b5 = document.querySelector(".b5");
        const b6 = document.querySelector(".b6");
        const b7 = document.querySelector(".b7");
        const b8 = document.querySelector(".b8");
        const b9 = document.querySelector(".b9");
        const b10 = document.querySelector(".b10");
        const b11 = document.querySelector(".b11");
        const b12 = document.querySelector(".b12");
        const b13 = document.querySelector(".b13");

        if(halfwayCounted <= -1.2){
            b1.style.opacity = "1";
            b1.style.transition = "1s";

            b2.style.opacity = "1";
            b2.style.transition = "1.5s";

            b3.style.opacity = "1";
            b3.style.transition = "2s";

            b4.style.opacity = "1";
            b4.style.transition = "2.5s";

            b5.style.opacity = "1";
            b5.style.transition = "3s";

            b5.style.opacity = "1";
            b5.style.transition = "3.5s";

            b6.style.opacity = "1";
            b6.style.transition = "4s";

            b7.style.opacity = "1";
            b7.style.transition = "4.5s";
            b8.style.opacity = "1";
            b8.style.transition = "5s";
            b9.style.opacity = "1";
            b9.style.transition = "5.5s";
            b10.style.opacity = "1";
            b10.style.transition = "6s";
            b11.style.opacity = "1";
            b11.style.transition = "6.5s";
            b12.style.opacity = "1";
            b12.style.transition = "7s";
            b13.style.opacity = "1";
            b13.style.transition = "7.5s";
        } else {
            b1.style.opacity = "0";
            b2.style.opacity = "0";
            b3.style.opacity = "0";
            b4.style.opacity = "0";
            b5.style.opacity = "0";
            b6.style.opacity = "0";
            b7.style.opacity = "0";
            b8.style.opacity = "0";
            b9.style.opacity = "0";
            b10.style.opacity = "0";
            b11.style.opacity = "0";
            b12.style.opacity = "0";
            b13.style.opacity = "0";

            b1.style.transition = "1s";
            b2.style.transition = "1s";
            b3.style.transition = "1s";
            b4.style.transition = "1s";
            b5.style.transition = "1s";
            b6.style.transition = "1s";
            b7.style.transition = "1s";
            b8.style.transition = "1s";
            b9.style.transition = "1s";
            b10.style.transition = "1s";
            b11.style.transition = "1s";
            b12.style.transition = "1s";
            b13.style.transition = "1s";

        }

        if (window.pageYOffset > 50) {
            header.style.top = "0"; // Zeigt den Header an, wenn man nach unten scrollt
        } else {
            header.style.top = "-100px"; // Versteckt den Header, wenn man oben angekommen ist
        }

        if (halfwayCounted <= 0) {
            arrow.style.opacity = halfwayCounted;
            arrow.style.transition = ".5s";
            arrow_text.style.opacity = halfwayCounted;
            arrow_text.style.transition = ".5s";
        } else {
            arrow.style.opacity = "1";
            arrow_text.style.opacity = "1";
        }
    });
});

  
