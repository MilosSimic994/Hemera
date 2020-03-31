import {holderContact} from './contacts'

let wrp = document.querySelector('.wrapper')

let footer = document.createElement('footer');
let socDiv = document.createElement('div');
socDiv.className = 'soc-div'

let instaDiv = document.createElement('div');
let instaImg = document.createElement('img');
instaImg.src = '../assets/images/instagram.png';

let instaLink = document.createElement('a');
instaLink.href = 'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15853252#overview'
instaLink.appendChild(instaImg);
instaDiv.append(instaLink);

let mailDiv = document.createElement('div');
let mailImg = document.createElement('img');
mailImg.src = '../assets/images/email.png';
mailDiv.append(mailImg);

let phoneDiv = document.createElement('div');
let phoneImg = document.createElement('img');
phoneImg.src = '../assets/images/phone-book.png';
phoneDiv.append(phoneImg);

socDiv.append(instaDiv, mailDiv, phoneDiv)

footer.appendChild(socDiv)

mailDiv.addEventListener('click', ()=>{
    wrp.innerHTML = ''
    wrp.append(holderContact);
})
phoneDiv.addEventListener('click', ()=>{
    wrp.innerHTML = ''
    wrp.append(holderContact);
})


export {footer}