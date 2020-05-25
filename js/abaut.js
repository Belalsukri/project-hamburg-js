window.onload=function () {
    right()
    setTimeout(mitte,500)
    setTimeout(abutImg,9000)
    setTimeout(nav1,2000)
    setTimeout(sub1,2000)
    setTimeout(form,4000)
    setTimeout(name1,8000)
    setTimeout(imgAb,8500)
    setTimeout( computer,8500 )
    navAbaut()
}
function right() {
    let right=document.querySelector('#right')
    let left=document.querySelector('#left')
  
    right.style.bottom='0';
    left.style.top='0';

}
function abutImg() {
    let abutIm=document.querySelector('.icon-bar')
   
    abutIm.style. transform= 'translateX(0%)';
   
   abutIm.style.display= 'block';
}
function form() {
    let form =document.querySelector('.blo')
    form.style. transform= 'translateX(0%)';
}
function nav1() {
    let nav =document.querySelector('.navAbaut')
    nav.style.transform= 'scale(1)';
}

function mitte() {
    let mitte=document.querySelector('#mitte')
    mitte .style.transform='rotateY(0)';
}
function navAbaut() {
    let burger=document.querySelector('#burger')
    let navAbaut =document.querySelector('.navAbaut ul')
    burger.addEventListener('click',function () {
         navAbaut.classList.toggle('navActive')
        
    })

}

function sub1() {
     let textAb=document.querySelector('.textAb')
     textAb.style.transform= 'scale(1)';
    let p = document.querySelector('.p')
    const txt = p.innerText
    
    let str = 0
    
    let sub = setInterval(() => {
        let b = txt.substr(0, str)

        p.innerText = b
        str++
        if (str > txt.length) {
            clearInterval(sub)
        }

    }, 20);


}
function name1() {
    let nam=document.querySelector('#name')
    nam.style.transform= 'scale(1.1)';
}
function imgAb() {
    let imgab =document.querySelector('#imgabut')
    imgab.style.transform= 'translateX(10%)';
    imgab.style.  bottom= '180px';

}
function computer() {
    let comimg=document.querySelector('.comimg')
    comimg.style.transform= 'scale(.8)';
    comimg.style. opacity= '1';
}