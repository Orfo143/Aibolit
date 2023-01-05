 const owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    margin: 15,
    items: 6,
});

$('.slider__btn--prew').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})


const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');


const title_1 = document.querySelector('.title-1');
const titleF = document.querySelector('.title-2');
const title_3 = document.querySelector('.title-3');
const title_4 = document.querySelector('.title-4');
const title_5 = document.querySelector('.title-5');
const title_6 = document.querySelector('.title-6');


btn5.onclick = function () {
	titleF.classList.toggle('green');
};