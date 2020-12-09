
    // fetch the data as soon as the page loaded 
   

   let output = document.getElementById('output');
   let url = './js/hospitals.json';
   fetch(url)
   .then(response  => response.json())
   .then(data => {      
       
       //output.textContent   =  data;
       console.log(data);
       data.featureMember.map(item=>{
          // console.log(item)
           let ul = document.createElement("ul");
           let name = document.createElement("li");
           let street = document.createElement("li");
           let city = document.createElement("li");
           let homepage = document.createElement("li");
           let link ;
           let pos = document.createElement("li");
           let teilmhem = document.createElement("li");
           let notversorgung =document.createElement('li')
           
           name.textContent=item.krankenhaeuser_hh.name;
           street.textContent=item.krankenhaeuser_hh.strasse;
           city.textContent=item.krankenhaeuser_hh.ort;
           link=item.krankenhaeuser_hh.homepage;
           homepage.innerHTML=`<a href='${link}' target="_blank" > homepage </a>` ; 
           pos.textContent=item.krankenhaeuser_hh.geom.Point.pos;
           teilmhem.textContent='geburtsklinik' + ': ' +item.krankenhaeuser_hh.teilnahme_geburtsklinik;
           notversorgung.textContent='geburtsklinik' + ': ' +item.krankenhaeuser_hh.teilnahme_notversorgung
           ul.appendChild(name);
           ul.appendChild(street);
           ul.appendChild(city);
           ul.appendChild(homepage);
           ul.appendChild(pos)
           ul.appendChild(teilmhem)
           ul.appendChild(notversorgung)
           
           
           output.appendChild(ul)
           
       })
      
       
   });
//////////
function getData(arr){
    let res = document.querySelector('.res');
    var proxyurl = "http://cors-anywhere.herokuapp.com/";
    var url = "https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=15759484cfc6415e9cc3c3b64fcd889e";
    fetch( proxyurl + url)

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
getData('arr')
  ////////////////////

  