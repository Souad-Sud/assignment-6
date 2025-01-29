$(() => {
    const API_ENDPOINT = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=0c47c0880ef702d5028f5e05fa8b81a4&hash=ff9812235d4d48256fda759d7f351dd9";
    
    const getCharacters = async () => {
        let response = await fetch(API_ENDPOINT);
        let data = await response.json();
        $(".text-footer").text(data.attributionText);

        let marvelC = document.querySelector(".marvel-container")

      //$("#menu").append('<li><a href="#">New list item</a></li>');    <ul id="menu">
     // let marvelList =   $("<ul class='list-item'></ul>");

     let content = "";
    
     
     for(let i = 0; i < data.data.results.length; i++) {
         let marvelName = data.data.results[i];

         content += "<div class='marvel-item'>";
         content += "<img src='" + marvelName.thumbnail.path + "/portrait_xlarge." + marvelName.thumbnail.extension + "' class='imaggge'/>";
         content += "<h2 class='marvel-title'>" + marvelName.name + "</h2>" ;
         content += "</div>";
        

         
         // let marvelItems =  $('<li class="listt">' + marvelName.name + '</li>');
         
         //let comnn = $("<div class='tessst'></div>");
         //let marvelItems =  $('<h2 class="listt">' + marvelName.name + '</h2>');
         // let marvelImage =  $("<img src='" + marvelName.thumbnail.path + "/portrait_fantastic." + marvelName.thumbnail.extension + "' class='imaggge'/>")

          //$(".marvel-container").append(comnn);

          //$(".tessst").append(marvelItems);
          //$(".tessst").append(marvelImage);
        
    
           
       

           // $(".marvel-container").append(marvelList);
          //  $(".list-item").append(comnn)
             

           // $(".tessst").append(marvelItems, marvelImage);
            //$(".listt").append(marvelImage)
           
         
            console.log(marvelName.name)
           
        }

        marvelC.innerHTML = content



       // $(".marvel-container").text(data.data.results[0].name)
    }
    getCharacters();
    
})