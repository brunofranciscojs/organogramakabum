let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active')
    hamburger.classList.toggle('rotate-90')
    hamburger.getAttribute('class').includes('active') ? hamburger.innerHTML = 'X' : hamburger.innerHTML = '|||'
})

document.querySelectorAll('.menu-items li').forEach(menuItem => {
    menuItem.addEventListener('click', function () {

        hamburger.classList.toggle('active')
        hamburger.classList.toggle('rotate-90')
        hamburger.getAttribute('class').includes('active') ? hamburger.innerHTML = 'X' : hamburger.innerHTML = '|||'

    })
})
document.querySelector('button.abrir').addEventListener('click',function(){
    document.querySelector('.mobile').classList.toggle('hide')
})
const menuItems = document.querySelector('.menu-items').outerHTML
const menuCss = `<style>
                    .mobile { position: fixed; top: 0px; left: -270px; z-index: 99999; height: 100vh; width: 250px; background: url('./img/suqres.png'), var(--cor); padding: 1.25rem; box-shadow: 0 25px 50px 12px rgb(0 0 0 / 0.25); transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 200ms; background-repeat:no-repeat; background-position-y:bottom; background-size:contain}
                    .mobile ul{ display: flex; flex-direction: column; gap: 1rem; padding-top: 0.5rem; font-size: 1rem; color: #eee;}
                    .hide {left: 0px !important}
                    .desktop{ display:block; padding: 16px 0}
                    .desktop ul{ display:flex; gap:1.5rem }
                    @media screen and(max-width: 960px) { .desktop ul {display: none} }
                 </style>`
                 
document.body.insertAdjacentHTML('beforeend', menuCss)

let mobile = 0
window.onresize = () => {
    if (window.innerWidth < 968 && mobile == 0) {
        document.body.insertAdjacentHTML('afterbegin', menuItems)
        mobile = 1
        setTimeout(() =>{
            document.querySelector('div[menu]').className = 'mobile'
        },200)
    }
} 

if(window.innerWidth < 969 ){
    document.body.insertAdjacentHTML('afterbegin', menuItems)
    document.querySelector('div[menu]').className = 'mobile'
    
    setTimeout(() =>{
        document.querySelector('div[menu]').className = 'mobile'
    },300)
}

    




