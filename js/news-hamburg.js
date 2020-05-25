window.onload=function () {
     // fetch the data as soon as the page loaded 
     let msg = 'Hello World';
     console.log(msg)
 
    let output = document.getElementById('res');
    let url = './js/newsHamburg1.json';
    fetch(url)
    .then(response  => response.json())
    .then(data => {      
        
        //output.textContent   =  data;
       console.log(data.channel.item);
        data.channel.item.map(item=>{
            console.log(item)
             let ul = document.createElement("ul");
             ul.style.listStyleType='none'
            let title = document.createElement("li");
            let category = document.createElement("li");
             let description = document.createElement("li");
             let imgLi = document.createElement("li");
             let img = document.createElement("img");
             let homepage = document.createElement("li");
            let link ;
             let pubDate = document.createElement("li");
            // let teilmhem = document.createElement("li");
            // let notversorgung =document.createElement('li')
            
             title.textContent=item.title;
             img.src=item.enclosure['@url'];
             img.style.width="20vw"
             imgLi.appendChild(img);
             console.log(img);
             
             category.textContent=item.category;
             description.textContent=item.description;
             link=item.link;
            homepage.innerHTML=`<a href='${link}' target="_blank" > homepage </a>` ; 
            pubDate.textContent=item.pubDate;
            // teilmhem.textContent='geburtsklinik' + ': ' +item.krankenhaeuser_hh.teilnahme_geburtsklinik;
            // notversorgung.textContent='geburtsklinik' + ': ' +item.krankenhaeuser_hh.teilnahme_notversorgung
            ul.appendChild(title);
             ul.appendChild(category);
             ul.appendChild(description);
             ul.appendChild(imgLi);
            ul.appendChild(homepage);
            ul.appendChild(pubDate)
            // ul.appendChild(teilmhem)
            // ul.appendChild(notversorgung)
            
            
             output.appendChild(ul)
            
        })
       
        
    });
 

}