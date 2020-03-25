let holderContact = document.createElement("div");
holderContact.className = "holder-contact";
let holderTitle = document.createElement('h1')
holderTitle.className = 'holder-title'
holderTitle.innerText = 'KONTAKT'

let leftDiv = document.createElement("div");
leftDiv.className = "left-contact";

let contactTitle = document.createElement("h2");
contactTitle.innerText = "kontakt";

leftDiv.appendChild(contactTitle);

let rightDiv = document.createElement("div");
rightDiv.className = "right-contact";

let rightMail = document.createElement("div");
rightMail.className = 'right-mail'

let mailSub = document.createElement('p');
mailSub.innerText = 'Email:';
let mailTxt = document.createElement('p');
mailTxt.innerText = 'milossimicc@gmail.com';

rightMail.append(mailSub,mailTxt)

let rightNumber = document.createElement("div");
rightNumber.className = 'right-number'

let numbSub = document.createElement('p');
numbSub.innerText = 'Number:';
let numbTxt = document.createElement('p');
numbTxt.innerText = '0653554317';

rightNumber.append(numbSub,numbTxt)

let instaDiv = document.createElement('div');
instaDiv.setAttribute('id', 'insta-div' )

let instaName = document.createElement('p')
instaName.innerText = 'hemera'

let instaImg = document.createElement('img')
instaImg.src = '../assets/images/insta_logo2.jpg'

let instaLink = document.createElement('a')
instaLink.href = 'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15853252#overview'
instaLink.appendChild(instaImg);

instaDiv.append(instaLink, instaName)

rightDiv.append(rightMail, rightNumber, instaDiv);

holderContact.append(holderTitle);

holderTitle.addEventListener('mouseenter', ()=>{
    holderContact.innerHTML = ''
    holderContact.append(leftDiv,rightDiv);
})

// holderContact.addEventListener('mouseleave', ()=>{
//     holderContact.innerHTML = '';
//     holderContact.appendChild(holderTitle)
// })

export { holderContact };
