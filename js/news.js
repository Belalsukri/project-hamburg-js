window.onload = function(){
     navAbaut()



function getData(arr){
     var proxyurl = "ht/";
     var url ="http:/";
     fetch(proxyurl + url)

 .then(response => {
    let data = response.json().then(d=>{
     
         console.log(d);
         
          let mar =document.querySelector('.mar')
          
          let marText = '<marquee  direction="left" loop="true" onmouseover="this.stop();" onmouseout="this.start();">'
          res.innerHTML='';
         d.articles.map(item=>{
              console.log(item);

             let title= document.createElement("li");
             let description= document.createElement("li");
             let imgesNews =document.createElement('li')
             let ul = document.createElement("ul")
         
          let publishedAt = document.createElement("li");
         
          let url= document.createElement("li");
          let link ;
          let marker;
          
          /////
          title.textContent=item.title
          marker+=item.title 
          link=item.url
          
          marText+=`  <a class='mar' target="_blank" href="${link}"> ${item.title}</a>`+'&nbsp;'+'&nbsp;'+'&nbsp;'
          imgesNews .innerHTML +=`<img class='imNew' alt="img-api" src="${item.urlToImage}" width="500" height='350'>`
          description.textContent= item.description
          
       
          publishedAt.textContent= item.publishedAt
         
          
          
          
          url.innerHTML=`<a href='${link}' target="_blank" > homepage </a>`
         
          ////

          res.appendChild(ul)
          ul.appendChild(title )
         
          ul.appendChild(imgesNews)
          ul.appendChild(description)
          
          ul.appendChild(url )
          ul.appendChild(publishedAt )
          ul.classList.add('mystyle')
          

     })
     mar.innerHTML = marText + '</marquee>'
    
})
 
 })
 .catch(err => {
 	console.log(err);
 });
 
}
getData('')
 
let catBtns = document.querySelectorAll('.bt1');
catBtns.forEach(btn => {
     btn.addEventListener('click',function () {
          getData(btn.innerHTML);
     })
   
}); 




const proxyurl = "http://cors-anywhere.herokuapp.com/";
const url = 'http://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=15759484cfc6415e9cc3c3b64fcd889e'; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}
function navAbaut() {
     let burger=document.querySelector('#burger')
     let navAbaut =document.querySelector('nav>ul')
     burger.addEventListener('click',function () {
         
           navAbaut.classList.toggle('navActive')
         
         
     })
 
 }
   
   
  


    
  
