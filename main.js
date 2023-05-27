document.addEventListener('DOMContentLoaded', function() {

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

  const hero_content = document.querySelector(".hero-content");
  
  if (halfwayCounted = 1){
      hero_content.style.opacity = "1";
      hero_content.style.transition = "2.5s";
  }

  window.addEventListener("scroll", function(){
      let scrollPosition = window.pageYOffset;

      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop/maxScrollTop;
      halfwayCounted = 1-(scrollFraction*8);
      halfwayCounted = halfwayCounted.toFixed(1);
      console.log(halfwayCounted);

            
  });

  //Loading Screen
  function removePreloader() {
    const preloader = document.getElementById('preloader');
  
    setTimeout(() => {
      preloader.style.transition = 'opacity 0.5s';
      preloader.style.opacity = '0';
    }, 500);
  
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1000);
  }
  window.addEventListener('load', removePreloader);

  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');

  setTimeout(function() {
      heroTitle.style.transition = 'opacity 1s';
      heroTitle.style.opacity = '1';
  }, 1000);  // Startet die Animation 1 Sekunde nach dem Laden der Seite

  setTimeout(function() {
      heroSubtitle.style.transition = 'opacity 1s';
      heroSubtitle.style.opacity = '1';
  }, 1500);  // Startet die Animation 1 Sekunde nach dem Laden der Seite
   const banner3Els = document.querySelectorAll('.banner_content_h3');
    const lastBanner3El = banner3Els[banner3Els.length - 1];

    const banner2El = document.querySelector('.banner2_content_h2');

    lastBanner3El.addEventListener('transitionend', () => {
        banner2El.classList.add('show');
    });
});

     
let hr = document.querySelector('.banner2');

const sectionOneOptions = {
    root: null,
    rootMargin: '40% 0% -40% 0%',
    threshold: 0
};

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(`Intersection Ratio: ${entry.intersectionRatio}`);
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
        }
    });
}, sectionOneOptions);

observer.observe(hr);


  
document.addEventListener('DOMContentLoaded', function() {
  const banner = document.querySelector('.banner');
  const h3Elements = banner.querySelectorAll(".banner_content_h3");
  const downloadButton = banner.querySelector('.download-button');

  const observerOptions = {
      root: null,
      rootMargin: '20% 0% -20% 0%',
      threshold: 0
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              let delay = 0;
              h3Elements.forEach((h3) => {
                  setTimeout(() => {
                  h3.classList.remove("hidden");
                  h3.style.transition = "opacity 1s";
                  h3.style.opacity = 1;
                  }, delay);
                  delay += 1000; // Zeit in Millisekunden, hier 1000 ms = 1 Sekunde
              });

              // Zeige den Download-Button nachdem alle h3-Elemente angezeigt wurden
              setTimeout(() => {
                  downloadButton.style.opacity = 1;
                  downloadButton.style.transition = "opacity 1s";
              }, delay);

              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  observer.observe(banner);
});

let itembanner2 = document.querySelectorAll('.banner2-item');

itembanner2.forEach(itembanner2 => {
  let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          console.log(`Intersection Ratio: ${entry.intersectionRatio}`);
          if (entry.isIntersecting) {
              entry.target.style.opacity = "1";
              entry.target.style.transition = "opacity 1s";
          }
      });
  }, sectionOneOptions);

  observer.observe(itembanner2);
});




