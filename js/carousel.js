const carouselImages = [
    'img/mauritanian.jpg',
    'img/radioactive.jpg',
    'img/hurricane.jpg'
]

let currentIdx = 0;

function showCurrentImage() {
    const imgContainer = document.querySelector('.movies-carousel .current-image');
    imgContainer.src = carouselImages[currentIdx];
}

function next() {
    currentIdx++;
    if (currentIdx > carouselImages.length - 1) 
        currentIdx = 0;  
    showCurrentImage();
}

function prev() {
    currentIdx--;
    if (currentIdx < 0) 
        currentIdx =  carouselImages.length - 1;
    showCurrentImage();
}

showCurrentImage();

setInterval(next, 2000);

document.querySelector('.movies-carousel .next')
    .addEventListener('click', next);

document.querySelector('.movies-carousel .prev')
    .addEventListener('click', prev);