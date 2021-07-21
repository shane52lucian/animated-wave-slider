var myCarousel = document.getElementById('heroSlider');
var bgWave = document.querySelector( ".waves" );

myCarousel.addEventListener('slide.bs.carousel', function (e) {
    // console.log(e.relatedTarget.classList);
    const color = e.relatedTarget.classList[0];
    bgWave.style.backgroundColor = color;
});