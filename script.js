const headerBtn = document.querySelector('.btn-menu');
headerBtn.onclick = menuShow;
function menuShow() {
    document.querySelector('.menu-nav').classList.toggle('_menu-show');
    headerBtn.classList.toggle('_btn-change');
    document.querySelector('body').classList.toggle('lock');
}

const menuLinks = document.querySelectorAll('.menu-link');
for(let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = menuLinkClose;
}
function menuLinkClose() {
    if(document.querySelector('.menu-nav').classList.contains('_menu-show')) {
        document.querySelector('.menu-nav').classList.toggle('_menu-show');
        headerBtn.classList.toggle('_btn-change');
        document.querySelector('body').classList.toggle('lock');
    }
}

const menuLogo = document.querySelector('.header-logo__link');
menuLogo.onclick = menuLogoClose;
function menuLogoClose() {
    if(document.querySelector('.menu-nav').classList.contains('_menu-show')) {
        document.querySelector('.menu-nav').classList.toggle('_menu-show');
        headerBtn.classList.toggle('_btn-change');
        document.querySelector('body').classList.toggle('lock');
    }
}

const footerBtn = document.querySelectorAll('.title-footer');
for (let i = 0; i < footerBtn.length; i++) {
    footerBtn[i].onclick = footerListShow;
}
function footerListShow() {
    this.parentNode.classList.toggle('_listShow')
}

const favoriteBtn = document.querySelectorAll('.favorite-category__btn')
for (let i = 0; i < favoriteBtn.length; i++) {
    favoriteBtn[i].onclick = asd;
}
function asd() {
    for (let i = 0; i < favoriteBtn.length; i++) {
        favoriteBtn[i].classList.remove('active')
    }
    this.classList.add('active')
}

const heightMainBlock = document.querySelector('.main-block').clientHeight
const heightHeader = document.querySelector('.header').clientHeight
const fullHeight = heightMainBlock + heightHeader;
const header = document.querySelector('.header')
if (window.pageYOffset > fullHeight) {
    header.classList.add('_showHeader')
}
window.addEventListener('scroll', showHeader)
function showHeader() {
    if (window.pageYOffset > fullHeight) {
        header.classList.add('_showHeader')
    } else {
        header.classList.remove('_showHeader')
    }
}

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        425: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },

    navigation: {
        nextEl: '.collection-button-next',
        prevEl: '.collection-button-prev',
    },
});


const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        425: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    },

    navigation: {
        nextEl: '.newArrivals-btn__next',
        prevEl: '.newArrivals-btn__prev',
    },
});