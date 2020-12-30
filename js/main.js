new Swiper('.image-slider', {
    //    Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    //    Навигация(Буллеты)
    pagination: {
        el: '.swiper-pagination',
        // bullets
        clickable: true,

        //Динамические точки
        dynamicBullets: true,
    },


    //Свайп true/false
    simulateTouch: true,

    //Кол-во слайдов для показа. Можно писать не целые числа!
    slidesPerView: 3,

    //Отступ меджу слайдами
    spaceBetween: 20,

    //Прокрутка по кругу(Бесконечность) true/false
    loop: false,

    //Автопрокрутка
    autoplay: {
        //Задержка
        delay: 1500,

        //Конец на последнем слайде true/false
        stopOnLastSlide: false,

        //Отключение после ручного переключения true/false
        disableOnInteraction: true,
    },

    //Скорость перелистывания
    speed: 1000,


    //Адаптивность(Mobile first)
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});




const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({

            behavior: "smooth",
            block: "start"
        });

    });
};








window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
            document.querySelectorAll('.nav a').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });

            document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
        }
    });
});








window.onscroll = function () {
    scrollfunction();
};

function scrollfunction() {
    let scrollPos = 100;
    let nav = document.getElementById("nav");

    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
};





function addclass() {
    var element = document.getElementById("mn");
    element.classList.toggle("act");
    var element1 = document.getElementById("mn1");
    element1.classList.toggle("act");
}
