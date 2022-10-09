document.body.style.zoom = .9 // this line of code here sets the default zoom of a browser when opening the webpage

const header = document.querySelector('header')
const links = document.querySelectorAll('.nav-link')
const landing = document.querySelector('.landing-page') // landing-page top value is 140px and bottom is 825px
// height of the landing page is 685px

console.log(window.innerHeight) // the innerHeight function is a property of our window element and we do not need to specify the window object to use the .innerHeight function


function  stickyNavbar(){
    header.classList.toggle('scrolled',window.pageYOffset > 0)
}

function chngColor(){
    links.forEach((link) => {
        link.classList.toggle('change',landing.getBoundingClientRect().top < 55 && landing.getBoundingClientRect().top > -625)
    })
}

window.addEventListener('scroll',() => {
    stickyNavbar()
    chngColor() // changing the color by activating a CSS class
})
