const btnPrev = document.getElementById('prev'),
      btnNext = document.getElementById('next'),
      sliders = document.querySelectorAll('.slider');

let index = 0;

function activeSlider(ind) {
    for(let slider of sliders) {
        slider.classList.remove('active');
    }
    sliders[ind].classList.add('active');
}

function prevSlider() {
    if(index === 0) {
        index = sliders.length - 1;
        activeSlider(index);
    }
    else {
        index--;
        activeSlider(index);
    }
}

function nextSlider() {
    if(index === sliders.length - 1) {
        index = 0;
        activeSlider(index);
    }
    else {
        index++;
        activeSlider(index);
    }
}

btnPrev.addEventListener('click', nextSlider);
btnNext.addEventListener('click', prevSlider);
