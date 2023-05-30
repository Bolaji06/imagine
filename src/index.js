
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

const rootEl = document.querySelector('.features');
//console.log(rootEl)
const cardEl = document.querySelectorAll('.card');
const imageEl = document.querySelectorAll('.com');

const wrapper = document.querySelector('.com-w');


const option = {
    root: null,
    rootMargin: '0px',
    threshold: .3,
}
function callback(entries){
    entries.forEach(entry =>{
        const intersect = entry.isIntersecting;
        if (intersect){
            entry.target.classList.add('active')
           // console.log('Element is Visible');
        }
        else {
            entry.target.classList.remove('active');
            //console.log('Element is not Visible');

        }
    });
    //console.log(observer);
}
const observer = new IntersectionObserver(callback, option)
cardEl.forEach(card =>{
    observer.observe(card);
});

function imageIntersectionOb(entries, observer){
    entries.forEach(entry =>{
        const intersect = entry.isIntersecting;
        if (intersect){
            console.log('Element is Visible')
            entry.target.classList.add('img-active');
        }
        else{
            console.log('Element is not visible');
            entry.target.classList.remove('img-active');
        }
    });
}
const opImg = {
    threshold: .5,
}
 const observeImg = new IntersectionObserver(imageIntersectionOb, opImg);

imageEl.forEach(image =>{
    observeImg.observe(image);
})
 //observeImg.observe(imageEl);


