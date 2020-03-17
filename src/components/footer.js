
let footer = document.createElement('footer')
let socDiv = document.createElement('div')

let instaImg = document.createElement('img')
instaImg.src = '../assets/images/insta_logo2.jpg'

let instaLink = document.createElement('a')
instaLink.href = 'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15853252#overview'

let contactDiv = document.createElement('div')
contactDiv.className = 'footer-contact'

let mailPar = document.createElement('p')
mailPar.innerText = 'milossimic@gmail.com'

let numberPar = document.createElement('p')
numberPar.innerText = '0653554317'

contactDiv.append(mailPar, numberPar)

instaLink.appendChild(instaImg)

socDiv.append(instaLink, contactDiv)

footer.appendChild(socDiv)

export {footer}