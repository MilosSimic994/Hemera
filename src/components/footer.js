
let footer = document.createElement('footer')
let socDiv = document.createElement('div')

let instaImg = document.createElement('img')
instaImg.src = '../assets/images/insta1.png'

let instaLink = document.createElement('a')
instaLink.href = 'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15853252#overview'

let mailImg = document.createElement('img')
mailImg.src = '../assets/images/mail-icon.png'

let mailLink = document.createElement('a')
mailLink.href = 'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15853252#overview'

mailLink.append(mailImg)

let phoneImg = document.createElement('i')
phoneImg.className = 'fas fa-user' 


// let contactDiv = document.createElement('div')
// contactDiv.className = 'footer-contact'

// let mailPar = document.createElement('p')
// mailPar.innerText = 'milossimic@gmail.com'

// let numberPar = document.createElement('p')
// numberPar.innerText = '0653554317'

// contactDiv.append(mailPar, numberPar)

instaLink.appendChild(instaImg)

 socDiv.append(instaLink, mailLink, phoneImg)

footer.appendChild(socDiv)

export {footer}