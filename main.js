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

  const h3Elements = document.querySelectorAll(".banner_content_h3");
  let delay = 0;

  h3Elements.forEach((h3) => {
    h3.classList.add("hidden");
    setTimeout(() => {
      h3.classList.remove("hidden");
      h3.style.transition = "opacity 1s";
      h3.style.opacity = 1;
    }, delay);
    delay += 1000; // Zeit in Millisekunden, hier 1000 ms = 1 Sekunde
  });

   const banner2 = document.querySelector(".banner2");

//   const observerOptions = {
//       root: null,
//       rootMargin: "50px",
//       threshold: 0.8,
//   };

//   const handleIntersection = (entries, observer) => {
//       entries.forEach((entry) => {
//           if (entry.isIntersecting) {
              
//               banner2.style.backgroundColor = "white";
//           } else {
//               // Ändern Sie die Farbe zurück, wenn der Bildschirm nicht mehr auf der Klasse 'banner2' ist
        
//               banner2.style.backgroundColor = "black";
//           }
//       });
//   };

//   const observer = new IntersectionObserver(handleIntersection, observerOptions);
//   observer.observe(banner2);

    // if (halfwayCounted <=-5){
    //     banner2.style.backgroundColor = "white";
    // } else {
    //     banner2.style.backgroundColor = "black";
    // }

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



const nav = document.querySelector(".banner2");  //wohin soll die Klasse "active" hinzugefügt werden
const sectionOne = document.querySelector(".banner");  //welche Sektion soll weg sein, damit es ausgeführt wird

const sectionOneOptions = {
  root: null,
  rootMargin: "-150px",
  treshold: 0.1
};

const sectionOneObserver = new IntersectionObserver(function(
entries,
sectionOneObserver
) {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    nav.classList.remove("backgroundblack");
  } else {
    nav.classList.add("backgroundblack");     //Von Zeile 45-53 sagt nur, dass wenn du auf der Sektion drauf bist (sectionOneOptions macht Viewport nur kleiner), dann füge hinzu, wenn nicht dann entferne
  }
  
});
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
});

  
