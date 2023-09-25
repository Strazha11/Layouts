


document.querySelector(".form__button-search").addEventListener("click", function () {
    document.querySelector(".form").classList.add("form__active");
    this.classList.add("active");
})
document.querySelector(".form-close").addEventListener("click", function () {
    let form = document.querySelector(".form");
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form__button-search").classList.remove("active")
});


document.addEventListener("click", function (e) {
    let target = e.target;
    let form = document.querySelector(".form");
    if (!target.closest(".header__search")) {
        form.classList.remove("form__active");
        form.querySelector("input").value = "";
        document.querySelector(".form__button-search").classList.remove("active")
    }
})

document.querySelector(".header__btn-open").addEventListener("click", function () {
    document.querySelector(".header__nav-list").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function () {
    document.querySelector(".header__nav-list").classList.remove("active");
})


document.addEventListener("DOMContentLoaded", function () {
    let acc = new Accordion('.accordion__list', {
        duration: 700,
        elementClass: 'accordion__item',
        triggerClass: 'accordion__top',
        panelClass: 'accordion__bottom',

    });
})

const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
    // Default parameters

    speed: 300,
    pagination: {
        el: '.hero__pagination',
        type: 'bullets',
        clickable: true
    },
    ally: {
        paginationBulletMessage: '{{index}}'
    }

})


let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.stage__block-consultation-position');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
        e.currentTarget.classList.add('tabs-nav__btn--active');

        tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});



