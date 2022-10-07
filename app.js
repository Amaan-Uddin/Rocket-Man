document.body.style.zoom = .9 // this line of code here sets the default zoom of a browser when opening the webpage

const header = document.querySelector('header')
const links = document.querySelectorAll('.nav-link')
const landingTop = document.querySelector('.landing-page') // landing-page top value is 140px and bottom is 825px

function  stickyNavbar(){
    header.classList.toggle('scrolled',window.pageYOffset > 0)
}

function chngColor(){
    links.forEach((link) => {
        link.classList.toggle('change',landingTop.getBoundingClientRect().top < 60 && landingTop.getBoundingClientRect().top > -625)
    })
}

// function changeColor(){
    //     links.forEach((element) => {
        //         element.style.color = '#fff'
        //     })
// }

window.addEventListener('scroll',() => {
    stickyNavbar()
    chngColor() // changing the color by activating a CSS file
    // changeColor()
})




// use for logging 
// console.log(header.getBoundingClientRect().bottom)
// console.log(landingTop.getBoundingClientRect().top)
function disp(){
    console.log(landingTop.getBoundingClientRect().top)
}
window.addEventListener('scroll',disp)