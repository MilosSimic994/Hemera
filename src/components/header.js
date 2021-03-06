import {main} from './home'
import { footer } from './footer';
import { aboutSec } from './about';
import {render} from './products'
import {holderContact} from './contacts'

let wrp = document.querySelector('.wrapper')

let header = document.createElement('header')
header.className = 'header'

let logo = document.createElement('img')
logo.src = '../assets/images/hemera.png'
logo.className = 'logo'

//NAVIGATION

let nav = document.createElement('nav')
nav.className = 'nav'

let navList = document.createElement('list')
navList.className = 'nav-list'

let aNavHome = document.createElement('a')
aNavHome.href = '#'

let navHome = document.createElement('li')
navHome.innerText = 'Pocetna'
aNavHome.appendChild(navHome)

let aNavAbout = document.createElement('a')
aNavAbout.href = '#'

let navAbout = document.createElement('li')
navAbout.innerText = 'O nama'
aNavAbout.appendChild(navAbout)

let aNavProducts = document.createElement('a')
aNavProducts.href = '#'

let navProducts = document.createElement('li')
navProducts.innerText = 'Proizvodi'
aNavProducts.appendChild(navProducts)

let aNavContact = document.createElement('a')
aNavContact.href = '#'

let navContact = document.createElement('li')
navContact.innerText = 'Kontakt'
aNavContact.appendChild(navContact)

navList.append(aNavHome, aNavAbout, aNavProducts, aNavContact)

nav.append(navList)

let menu = document.createElement('h3')
menu.className = 'menu'
menu.innerText = 'Meni'

 header.append(logo, menu)

 aNavHome.addEventListener('click', ()=>{
     wrp.innerHTML = ''
    wrp.append(header,main, footer)
})

aNavAbout.addEventListener('click', ()=>{
    wrp.innerHTML = ''
    wrp.append(header, aboutSec, footer)
})

aNavProducts.addEventListener('click', ()=>{
    wrp.innerHTML = ''
    wrp.append(header, render(), footer)
})

aNavContact.addEventListener('click', ()=>{
    wrp.innerHTML = ''
    wrp.append(header, holderContact)
})

logo.addEventListener('click', ()=>{
    wrp.innerHTML = '';
    wrp.append(header,main, footer)
})
menu.addEventListener('click', ()=>{
    wrp.innerHTML = ''
    navList.style.display = 'flex'
    wrp.append(header, nav)
})


export {header}