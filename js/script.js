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
//
class MenuCard{
    constructor(src,alt,title,descr,price,parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector)
        this.transfer = 27;
        this.changeToUAH();
    }

    changeToUAH() {
        this.price = this.price * this.transfer;
    }

    render() {
        const element = document.createElement('div');

        if(this.classes.length === 0){
            this.element = 'menu__item'
            element.classList.add(this.element)
        } else {
            this.classes.forEach(className => element.classList.add(className))
        }
       
        element.innerHTML = `
                <img src="${this.src}" alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
        this.parent.append(element)
    }
}
new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    "'Меню Фитнес'",
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container',
).render();
