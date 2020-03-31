let aboutSec = document.createElement('section')
aboutSec.className = 'about-section'

let imgDiv = document.createElement('div')
imgDiv.className = 'about-img_div'

let aboutTitle = document.createElement('h1')
aboutTitle.innerText = 'o nama'

let aboutP = document.createElement('p')
aboutP.className = 'desc-left' 
aboutP.innerText =
` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`

let aboutP2 = document.createElement('p')
aboutP2.className = 'desc-right'
aboutP2.innerText =
`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

let aboutP3 = document.createElement('p');
aboutP3.className = 'desc-left';
aboutP3.innerText =
 `Lacus luctus accumsan tortor posuere ac ut consequat. Sagittis nisl rhoncus mattis rhoncus urna neque.
 Rhoncus aenean vel elit scelerisque mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt. 
 Lacus luctus accumsan tortor posuere ac ut consequat. Sagittis nisl rhoncus mattis rhoncus urna neque.
 Rhoncus aenean vel elit scelerisque mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt. Lacus luctus accumsan tortor posuere ac ut consequat. Sagittis nisl rhoncus mattis rhoncus urna neque.
 Rhoncus aenean vel elit scelerisque mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt.
`

let aboutP4 = document.createElement('p');
aboutP4.className = 'desc-right'
aboutP4.innerText =
 `Lacus luctus accumsan tortor posuere ac ut consequat. Sagittis nisl rhoncus mattis rhoncus urna neque.
 Rhoncus aenean vel elit scelerisque mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt. 
 Lacus luctus accumsan tortor posuere ac ut consequat. Sagittis nisl rhoncus mattis rhoncus urna neque.
 Rhoncus aenean vel elit scelerisque mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt. Lacus luctus accumsan tortor posuere ac ut consequat. Sagittis nisl rhoncus mattis rhoncus urna neque.
 Rhoncus aenean vel elit scelerisque mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt.`
 let aboutP5 = document.createElement('p');
 aboutP5.className = 'desc-left';
aboutP5.innerText =`
  Lacus luctus accumsan tortor posuere ac ut consequat. Sagittis nisl rhoncus mattis rhoncus urna neque.
 Rhoncus aenean vel elit scelerisque mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt. Lacus luctus accumsan tortor posuere ac ut consequat. Sagittis nisl rhoncus mattis rhoncus urna neque.
 Rhoncus aenean vel elit scelerisque mauris. Pulvinar lementum integer enim neque volutpat ac tincidunt.`

 let aboutP6 = document.createElement('p');
 aboutP6.className = 'desc-right';
 aboutP6.innerText =
 `Lacus luctus accumsan tortor posuere ac ut consequat. Sagittis nisl rhoncus mattis rhoncus urna neque.
 Rhoncus aenean vel elit scelerisque mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt. Lacus luctus accumsan tortor posuere ac ut consequat. Sagittis nisl rhoncus mattis rhoncus urna neque.
 Rhoncus aenean vel elit scelerisque mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt. Lacus luctus accumsan tortor posuere ac ut consequat. Sagittis nisl rhoncus mattis rhoncus urna neque.
 Rhoncus aenean vel elit scelerisque mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt. `

 


 

aboutSec.append(aboutTitle, aboutP, aboutP2, aboutP3,imgDiv, aboutP4,aboutP5, aboutP6) 


export {aboutSec}