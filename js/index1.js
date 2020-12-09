window.addEventListener('load', () => {
    let key = 'f6c0c5f1bd04c8e04684ff252b56eb66'
    let tre = document.querySelector('#tenperatur')
    let temp = document.querySelector('.temp')
    let city = 'germany'
    let state = 'hamburg'
    const proxy = "https://cors-anywhere.herokuapp.com/";
   
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + state + '&units=metric&APPID=d05af9477b0f46101352d52dfb650f46'
    fetch(url)

        .then(response => {
            return response.json();


        })
        .then(data => {
            console.log(data);
            temp.innerHTML = data.main.temp + "&#8451;";
            tre.innerHTML = '<img class="icon" src="http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png">';
         
        })

})


function clock() {
    let hour = document.querySelector('#hour')
    let minut = document.querySelector('#minutes')
    let second = document.querySelector('#secondes')
    let amp = document.querySelector('#am')
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = 'AM'
    if (h > 12) {
        h = h - 12
        let am = 'AM'
    }

    h = (h < 10) ? '0' + h : h
    m = (m < 10) ? '0' + m : m
    s = (s < 10) ? '0' + s : s
    hour.innerHTML = h
    minut.innerHTML = m
    second.innerHTML = s
    amp.innerHTML = am

}
setInterval(clock, 1000)

function left1() {
    let slider = document.querySelector("#slider")
    slider.style.marginLeft = '-100%'

    function left2() {
        let slider = document.querySelector("#slider")
        slider.style.marginLeft = '-200%'

        function left3() {
            let slider = document.querySelector("#slider")
            slider.style.marginLeft = '-300%'

            function left0() {
                let slider = document.querySelector("#slider")
                slider.style.marginLeft = '0'


                setTimeout(left1, 8000)
            }
            setTimeout(left0, 8000)
        }
        setTimeout(left3, 8000)
    }
    setTimeout(left2, 8000)
}
setInterval(slid, 7700)
setTimeout(left1, 8000)
setInterval(slid1, 8200)

function slid() {
    let sli = document.querySelectorAll(".slid")

    for (let i = 0; i < sli.length; i++) {
        sli[i].style.transform = 'scale(.6)'
        

    }
}

function slid1() {
    let sli = document.querySelectorAll(".slid")

    for (let i = 0; i < sli.length; i++) {
        sli[i].style.transform = 'scale(1)'


    }
}
/////////
let p = document.querySelector('.p')
const txt = p.innerText

let str = 0

function sub1() {

    let sub = setInterval(() => {
        let b = txt.substr(0, str)

        p.innerText = b
        str++
        if (str > txt.length) {
            clearInterval(sub)
        }

    }, 50);


}
sub1()

//////////////////////////////////////////////////////////////////////////////////////////
const section = document.querySelectorAll(".section");

section.forEach(element => {
    Array.from(element.children).forEach(f => {  
        f.classList.add("hov")
        f.style.backgroundImage = `url('${f.children[1].children[0].children[0].src}')`
        f.addEventListener("click", e => {
            if (f !== e.target) return;
            f.classList.remove("hov")
            let model = f.children[1]
            model.style.display = 'block'
            model.style.transform = "scale(1)";
            let close = model.children[2]
          
            close.addEventListener("click", ev => {
             
                f.style.backgroundImage = `url('${f.children[1].children[0].children[0].src}')`
                ev.target.parentElement.style.transform = "scale(0)";
                model.style.transform = "scale(0)";
                f.classList.add("hov")
            });
            // event listener for images
            Array.from(f.children[1].children[0].children[1].children).forEach(evt => {
                evt.addEventListener("mouseover", evtt => {
                   
                    evtt.target.parentElement.parentElement.parentElement.children[0].src = evtt.target.src
                })

            })
        }, false)
        
        
     })
});
/////////////////////////////////////////////////////////////////////////////////////////



/////%%%%%%%%////////
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
   
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// &&&&&&&&&&
var slideIndex = 1;
showSlides1(slideIndex);

// Next/previous controls
function plusSlides1(n) {
    showSlides1(slideIndex += n);
}

// Thumbnail image controls
function currentSlide1(n) {
    showSlides1(slideIndex = n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
   
    var dots = document.getElementsByClassName("dot1");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//&&&&&&&&&&&&&
let trn = document.querySelectorAll('.trn')
let flip = document.querySelector('.flip')
// console.log(trn.length);
let rotate = 0
flip.onclick = function(){
    // console.log(trn.length);
    if(flip.style.animation){
        flip.style.animation = ""
    }else{
        flip.style.animation = `rotate 2s linear`
        flip.style.transition="all 2s linear"
    }

}
///// map   ////////////////


var mapProp
var marker
var infowindow
var markers = [{
        position: {
            lat: 53.550090,
            lng: 9.991636
        },
        title: 'Hamburger Rathaus',
        info: 'Hamburger Rathaus',
    },
    {
        position: {
            lat: 53.55307,
            lng: 9.991941
        },
        title: 'Jungfernstieg Alster',
        info: 'Hamburg Alster',
    },
    {
        position: {
            lat: 53.527206,
            lng: 9.918959
        },
        title: 'Hamburg Hafen',
        info: 'Hamburg Hafen',
    },
    {
        position: {
            lat: 53.541331,
            lng: 9.984127
        },
        title: 'Hamburg Elbphilharmonie',
        info: 'Hamburg Elbphilharmonie',
    },
    {
        position: {
            lat: 53.596984,
            lng: 10.020696
        },
        title: 'hamburg stadtpark',
        info: 'hamburg stadtpark',
    },

]

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(53.551086, 9.993682),
        zoom: 11,
    };

    var map = new google.maps.Map(document.getElementById("map"), mapProp, marker, infowindow);

    markers.forEach(loc => {

        var marker = new google.maps.Marker({
            position: loc.position,
            title: loc.title,
            map: map,
        });
        var infowindow = new google.maps.InfoWindow({
            content: loc.infowindow
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker)
        })
    })

}

                //////slidImg5//////////////////
       const slidImg4 =document.querySelectorAll('.sliderImg4') 
       slidImg4.forEach(element => {
          
         Array.from(element.children).forEach((f2, index) => {
             // console.log(f2)
            f2.addEventListener('click',em =>{
                // console.log(index);
                f2.style.transition = "2s"
                  if (f2 === em.target){
                      f2.style.transform = "scale(0)"
                    
                   }
                   if (f2 !== em.target) {
                      return f2
                  }
               if(index === 0){
                     console.log("Last")
                     // element.children[2].style.transform = ""
                    Array.from(element.children).forEach(t=>{
                        t.style.transform = ""
                        
                    })
                }
                  
            })

     })  
      });
      ////////////////////nbav/////////////
     function navAbaut() {
        let burger=document.querySelector('#burger')
        let navAbaut =document.querySelector('nav>ul')
        burger.addEventListener('click',function () {
            
             navAbaut.classList.toggle('navActive')
            
        })
    }
    navAbaut()
    /////////marquee/////////
    function getData(arr){
    
     fetch("https://newsapi.org/v2/top-headlines?country=de&apiKey=15759484cfc6415e9cc3c3b64fcd889e", {
        "method": "GET",
       
    })
   
    .then(response => {
       let data = response.json().then(d=>{
            console.log(d)
             let mar =document.querySelector('.mar')
             let marText = '<marquee  direction="left" loop="true" onmouseover="this.stop();" onmouseout="this.start();">'
            d.articles.map(item=>{
                // console.log(item);
                let title= document.createElement("li");    
                let ul = document.createElement("ul")
             let url= document.createElement("li");
             let link ;
             let marker;
             /////
             title.textContent=item.title
             marker+=item.title 
             link=item.url
             marText+=`  <a class='mar' target="_blank" href="${link}"> ${item.title}</a>`+'&nbsp;'+'&nbsp;'+'&nbsp;'
             url.innerHTML=`<a href='${link}' target="_blank" > homepage </a>`
             ////
             ul.appendChild(title ) 
             ul.appendChild(url )
        })
        mar.innerHTML = marText + '</marquee>'
   }) 
    })
    .catch(err => {
        console.log(err);
    });
}
getData('arr')
   