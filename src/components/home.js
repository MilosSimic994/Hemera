// import {header} from '../components/header'

//SLIDESHOW
let main = document.createElement('main')

let slideDiv = document.createElement('div')
slideDiv.className = 'slide-div'

let slideImg = document.createElement('img')
slideImg.name = 'slide'

slideDiv.appendChild(slideImg)

var i = 0;
var images = [];
var time = 5000;

images[0] = '../assets/images/persilhd.jpg'
images[1] = '../assets/images/niveahd2.jpg'
images[2] = '../assets/images/dove 7.jpg'


// let wrap = document.querySelector('#wrapper')//ppppp

function changeImg() {
    slideImg.src = images[i]

    if(i < images.length -1){
        i++
    }else {
        i = 0;
    }

    setTimeout(changeImg, time)
}

slideDiv.onload = changeImg()

//TITLE DIV
let titleDiv = document.createElement('div');
titleDiv.className = 'title-div'

let title = document.createElement('h1')
title.innerText = 'hemera'
titleDiv.appendChild(title)

//ABOUT DIV
let aboutDiv = document.createElement('div')
aboutDiv.className = 'about-div'

let aboutP = document.createElement('p')
aboutP.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`

let aboutP2 = document.createElement('p')
aboutP2.innerText = `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

let aboutP3 = document.createElement('p')
aboutP3.innerText = `Lacus luctus accumsan tortor posuere ac ut consequat. Sagittis nisl rhoncus mattis rhoncus urna neque.
 Rhoncus aenean vel elit scelerisque mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt. `

aboutDiv.append(aboutP,aboutP2,aboutP3) 

//FIX DIV
//  let fixDiv = document.createElement('div')
//  fixDiv.className = 'fix-div'
//  let fixImg = document.createElement('img')
//  fixImg.src = '../assets/images/dove.jpg'
//  fixDiv.appendChild(fixImg)

//CARDS DIV 

let cards = [
    {
        avatar: '../assets/images/dove_logo.png',
        title: 'DOVE'
    },
    {
        avatar: '../assets/images/nivea_logo.png',
        title: 'NIVEA'
    },
    {
        avatar: '../assets/images/palmolive_logo2.png',
        title: 'palmolive'
    },
    {
        avatar: '../assets/images/blendamed_logo.png',
        title: 'blendamed'
    },
    {   avatar: '../assets/images/hemera.png',
        title: 'hemera'
    },
    {   avatar: '../assets/images/hemera.png',
        title: 'hemera'
    }
]
let  cardsSec = document.createElement('section')
cardsSec.className = 'cards-sec'

cards.forEach(el=>{
    let card = document.createElement('article')
    card.className = 'article-card'
    let img = document.createElement('img')
    img.src = el.avatar
    let title = document.createElement('h3')
    title = el.title
    card.append(img,title)
    cardsSec.appendChild(card)
})


//FOOTER


main.append(slideDiv,titleDiv,aboutDiv,cardsSec)

export {main}
