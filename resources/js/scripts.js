let navbar = document.querySelector('#navbar')
let navbarBrand = document.querySelector('#navbarBrand')
let navbarCTAScroll = document.querySelector('#navbarCTAScroll')

if (window.innerWidth > 576) {

    document.addEventListener('scroll', () => {

        if (window.pageYOffset > 20) {
            navbar.classList.remove('bg-transparent')
            navbar.classList.add('bg-white', 'shadow')
            navbarBrand.src = "./media/chef.png"
        } else {
            navbar.classList.remove('bg-white', 'shadow')
            navbar.classList.add('bg-transparent')
            navbarBrand.src = "./media/chef.png"
        }

        if (window.pageYOffset > window.innerHeight) {
            navbarCTAScroll.classList.remove('nav-link')
        } else {
            navbarCTAScroll.classList.add('nav-link')
        }
    })
} else {
    navbar.classList.add('bg-white')
    navbarBrand.src = "./media/chef.png"
}