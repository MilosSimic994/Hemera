let products = [
    {
        name: 'colgate',
        avatar: '../assets/images/colgate_logo.png',
        desc: 'daskdm,as;d,as;dasnla'
    },
    {
        name: 'colgate',
        avatar: '../assets/images/colgate_logo.png',
        desc: 'daskdm,as;d,as;dasnla'
    },
    {
        name: 'colgate',
        avatar: '../assets/images/colgate_logo.png',
        desc: 'daskdm,as;d,as;dasnla'
    },
    {
        name: 'colgate',
        avatar: '../assets/images/colgate_logo.png',
        desc: 'daskdm,as;d,as;dasnla'
    },
    {
        name: 'colgate',
        avatar: '../assets/images/colgate_logo.png',
        desc: 'daskdm,as;d,as;dasnla'
    },
    {
        name: 'colgate',
        avatar: '../assets/images/colgate_logo.png',
        desc: 'daskdm,as;d,as;dasnla'
    },
    {
        name: 'colgate',
        avatar: '../assets/images/colgate_logo.png',
        desc: 'daskdm,as;d,as;dasnla'
    },
    {
        name: 'colgate',
        avatar: '../assets/images/colgate_logo.png',
        desc: 'daskdm,as;d,as;dasnla'
    },

]

const render=()=>{
    let card = document.createElement('div')
    products.forEach(element => {
        
        let name = document.createElement('h3')
        name.innerText = element.name
        let img = document.createElement('img')
        img.src = element.avatar
        let txt = document.createElement('p')
        txt.innerText = element.desc

        card.append(img,name,txt)
    });
   
}

export {render}