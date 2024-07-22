document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slides img');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide ) % (slides.length-1);
        slides[currentSlide].classList.add('active');
        
        // Slider'ı yavaşça kaydırmak için transform ve transition ayarlama
        const slidesContainer = document.querySelector('.slides');
        slidesContainer.style.transition = 'transform 1s ease-in-out';
        slidesContainer.style.transform = `translateX(-${currentSlide * 20}%)`;
    }

    // Geçiş süresini ayarlayın
    setInterval(nextSlide, 150000); // 3000 ms = 3 saniye
});
