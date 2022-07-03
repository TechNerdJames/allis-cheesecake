const body = document.querySelector('body');
const hamburgerBtn = document.querySelector('#hamburger');
const overlay = document.querySelector('.overlay');
const nav_header = document.querySelector('#nav');
const navList = document.querySelector('#nav-list');
const navLink = document.querySelectorAll('.list-item');

const activePage = window.location.pathname;

hamburgerBtn.addEventListener('click', () => {
	hamburgerBtn.classList.toggle('active');
	body.classList.toggle('locked-screen');

	if (!overlay.classList.contains('open')) {
		overlay.classList.add('open');
	} else {
		setTimeout(function removeDisplay() {
			overlay.classList.remove('open');
		}, 400);
	}

	if (overlay.classList.contains('fade-in')) {
		overlay.classList.add('fade-out');
		overlay.classList.remove('fade-in');
	} else {
		overlay.classList.add('fade-in');
		overlay.classList.remove('fade-out');
	}

	if (!navList.classList.contains('show')) {
		navList.classList.add('show');
		// body.classList.add('locked-screen');
	} else {
		navList.classList.remove('show');
		// body.classList.remove('locked-screen');
	}
});

navLink.forEach((link) => {
	link.addEventListener('click', () => {
		navList.classList.remove('show');
		// body.classList.remove('locked-screen');
		if (!overlay.classList.contains('open')) {
			overlay.classList.add('open');
		} else {
			setTimeout(function removeDisplay() {
				overlay.classList.remove('open');
			}, 400);
		}
		if (overlay.classList.contains('fade-in')) {
			overlay.classList.add('fade-out');
			overlay.classList.remove('fade-in');
		} else {
			overlay.classList.add('fade-in');
			overlay.classList.remove('fade-out');
		}

		if (hamburgerBtn.classList.contains('active')) {
			hamburgerBtn.classList.remove('active');
		}
	});
});

navLink.forEach((link) => {
	if (link.href === window.location.href) {
		link.classList.add('active-link');
		link.setAttribute('aria-current', 'page');
	}
});
