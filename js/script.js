function adjustScrollbarPadding() {
    const container = document.querySelector('.main__rightwrapper_area');
    const scrollbarWidth = container.offsetWidth - container.clientWidth;
    container.style.paddingLeft = `${scrollbarWidth}px;`
}

// Call the function once the DOM is loaded
document.addEventListener('DOMContentLoaded', adjustScrollbarPadding);

// Call the function again on window resize to handle responsive layouts
window.addEventListener('resize', adjustScrollbarPadding)

// document.getElementById('globe-button').innerText = 'EN'; 
document.querySelector

let button = document.getElementById('globe-button');
let descr = document.querySelector('.header__btns-descr')

let icons = document.querySelectorAll('.footer__pages_social_buttons_item_soc');
let bgs = document.querySelectorAll('footer__pages_social_buttons_item_bg');


// icons.addEventListener('mouseover', function() {
//     e.preventDefault()
//     bgs.classList.add('active')
// })

// console.log(icon)

button.addEventListener('click', (e) => {
    e.preventDefault();
    if(descr.innerText === 'EN') {
        descr.innerText = 'RU'
        button.style.background = "";
        
        button.classList.add('inactive')
    } else {
        descr.innerText = 'EN'
        button.style.background = "#F99247";
        button.classList.add('active')
        button.classList.remove('inactive')
    }
    
})

// const element = document.getElementById('lastBlog')
const item = document.querySelector('.main__rightwrapper_area_item_one')

item.addEventListener('click', () => {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    })
})



const display320 = window.innerWidth;
window.addEventListener('load', () => {
    const element = document.createElement('div');
    if(window.innerWidth === '320') {
        element.innerHTML = `
        <span>Terms and Conditions</span>
        `
    }
})