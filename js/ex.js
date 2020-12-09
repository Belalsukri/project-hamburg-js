window.onload = function(){
   // nachrecht()
    getData()
    navAbaut()
 }

function getData(){
    
    var proxyurl = "http://cors-anywhere.herokuapp.com/";
    var url ='https://newsapi.org/v2/everything?q=hamburg&apiKey=15759484cfc6415e9cc3c3b64fcd889e';
    fetch(proxyurl + url)

.then(response => {
   let data = response.json().then(d=>{
    
        console.log(d);
        
         let mar =document.querySelector('.mar')
         
         let marText = '<marquee  direction="left" loop="true" onmouseover="this.stop();" onmouseout="this.start();">'
         d.articles.map(item=>{
            // console.log(item);

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
         imgesNews .innerHTML +=`<img src="${item.urlToImage}" class='mm' width="300">`
         description.textContent= item.description
        
      
         publishedAt.textContent= item.publishedAt
        
         
         
         
         url.innerHTML=`<a href='${link}' target="_blank" > homepage </a>`
        
         ////

         res1.appendChild(ul)
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
// function nachrecht() {
    

// let nachrecht = document.getElementById('nachrecht');
//   let url2 = './js/newsHam1.json';
//   fetch(url2)
//   .then(response  => response.json())
//   .then(data => {      
      
//       //output.textContent   =  data;
//      console.log(data.channel.item);
//       data.channel.item.map(item=>{
//           console.log(item)
//            let ul = document.createElement("ul");
//            ul.style.listStyleType='none'
//           let title = document.createElement("li");
//           let category = document.createElement("li");
//            let description = document.createElement("li");
//            let imgLi = document.createElement("li");
//            let img = document.createElement("img");
//            let homepage = document.createElement("li");
//           let link ;
//            let pubDate = document.createElement("li");
//           // let teilmhem = document.createElement("li");
//           // let notversorgung =document.createElement('li')
          
//            title.textContent=item.title;
//            title.classList.add('titl')
//            img.src=item.enclosure['@url'];
//            img.classList.add('mm')
//            imgLi.appendChild(img);
//            console.log(img);
           
//            category.textContent=item.category;
//            description.textContent=item.description;
//            link=item.link;
//           homepage.innerHTML=`<a href='${link}' target="_blank" > homepage </a>` ; 
//           pubDate.textContent=item.pubDate;
//           // teilmhem.textContent='geburtsklinik' + ': ' +item.krankenhaeuser_hh.teilnahme_geburtsklinik;
//           // notversorgung.textContent='geburtsklinik' + ': ' +item.krankenhaeuser_hh.teilnahme_notversorgung
//           ul.appendChild(title);
//           ul.appendChild(imgLi);

         
//            ul.appendChild(category);
//            ul.appendChild(description);
//           ul.appendChild(homepage);
//           ul.appendChild(pubDate)
//           // ul.appendChild(teilmhem)
//           // ul.appendChild(notversorgung)
//           ul.classList.add('mystyle')
          
//           nachrecht.appendChild(ul)
          
//       })
     
      
//   });
//}
function navAbaut() {
    let burger=document.querySelector('#burger')
    let navAbaut =document.querySelector('nav>ul')
    burger.addEventListener('click',function () {
         navAbaut.classList.toggle('navActive')
        
    })

}
