
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.testimonial-slide');
const pageDots  = document.querySelector('.page-dots');

slides.forEach((slide, index) =>{
    const dot = document.createElement('span');
    dot.classList.add('pagination-dot');
    dot.addEventListener('click', ()=>{
        setActiveSlide(index);
    });
    pageDots.appendChild(dot);
});

const dots = pageDots.querySelectorAll('.pagination-dot');
let activeSlide = 0;

setActiveSlide(activeSlide);

function setActiveSlide(index){
    carousel.style.transform = 'none';
    activeSlide = index;
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].style.display = 'block';
    slides[index].classList.add('active');

    dots[index].classList.add('active');

    setTimeout(()=>{
        slides[index].classList.remove('active');

    }, 4600)
    
}

setInterval(() => {
    activeSlide = (activeSlide + 1) % slides.length;
    setActiveSlide(activeSlide);
}, 5000);