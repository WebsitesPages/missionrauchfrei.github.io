document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.getElementById('heroVideo');
    const playbackSpeed = parseFloat(heroVideo.dataset.speed);
    heroVideo.playbackRate = playbackSpeed;
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 50) {
            header.style.top = "0"; // Zeigt den Header an, wenn man nach unten scrollt
        } else {
            header.style.top = "-100px"; // Versteckt den Header, wenn man oben angekommen ist
        }
    });
});
