const banner = new Swiper(".banner__slider", {
	spaceBetween: 32,
	slidesPerView: "auto",
	speed: 400,
	centeredSlides: true,
	loop: true,
	// autoHeight: true,
	pagination: {
		el: ".banner__pagination",
		clickable: true
	},
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
});

const features = new Swiper(".features__slider", {
	slidesPerView: 5,
	spaceBetween: 24,
	breakpoints: {
		0: {
			slidesPerView: 2.5,
			spaceBetweenSlides: 12
		},
		890: {
			slidesPerView: 3.5,
			spaceBetweenSlides: 24
		},
		1200: {
			slidesPerView: 5,
			spaceBetweenSlides: 24
		}
	}
});

const catalog = new Swiper(".catalog__slider", {
	slidesPerView: 4,
	spaceBetween: 24,
	autoHeight: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetweenSlides: 12
		},
		372: {
			slidesPerView: 2,
			spaceBetweenSlides: 12
		},
		700: {
			slidesPerView: 3,
			spaceBetweenSlides: 12
		},
		1100: {
			slidesPerView: 4,
			spaceBetweenSlides: 24
		}
	}
});



// Catalog size
const sizes = [60, 90, 120, 150, 180, 210, 240, 270, 300]
const lists = document.querySelectorAll('.catalog-sizes__list');

lists.forEach(list => {
	sizes.forEach(size => {
		const item = document.createElement('li');
		item.classList.add('catalog-sizes__item')
		item.textContent = size + ' см';
		list.appendChild(item);
	});
})

const tabs = document.querySelectorAll('.catalog-sizes__item');

function handleTabClick(event) {
	tabs.forEach(tab => {
		tab.classList.remove('active');
	});

	const selectedTab = event.target;
	selectedTab.classList.add('active');
}

tabs.forEach(tab => {
	tab.addEventListener('click', handleTabClick);
});

// Footer accordeon
const companyAccordion = document.querySelector('.footer-nav__company');
const companyTitle = companyAccordion.querySelector('.footer-nav__company .footer-nav__title');
const companyList = companyAccordion.querySelector('.footer-nav__company .footer-nav__list');

const buyersAccordion = document.querySelector('.footer-nav__buyers');
const buyersTitle = buyersAccordion.querySelector('.footer-nav__buyers .footer-nav__title');
const buyersList = buyersAccordion.querySelector('.footer-nav__buyers .footer-nav__list');

companyTitle.addEventListener('click', () => {
	companyList.classList.toggle('footer-nav__list--active');
	companyTitle.classList.toggle('footer-nav__title--active');
});

buyersTitle.addEventListener('click', () => {
	buyersList.classList.toggle('footer-nav__list--active');
	buyersTitle.classList.toggle('footer-nav__title--active');
});

// Scroll to Top
const scrollBtn = document.querySelector(".btn__scroll-top");

const btnVisibility = () => {
	if (window.scrollY > 400) {
		scrollBtn.style.opacity = "1";
	} else {
		scrollBtn.style.opacity = "0";
	}
};

document.addEventListener("scroll", () => {
	btnVisibility();
});

scrollBtn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});