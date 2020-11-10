const nav_expand_btn = document.getElementById('mobile-nav-expand');
const nav_menu = document.getElementById('nav-menu');
const nav_links = nav_menu.querySelectorAll('li.landing-menu-item');

function handle_nav() {
	if (nav_menu.classList.contains('show')) {
		nav_menu.classList.remove('show');
	} else {
		nav_menu.classList.add('show');
	}
}

nav_expand_btn.addEventListener('click', handle_nav);

nav_links.forEach((link) => {
	link.addEventListener('click', handle_nav);
});
