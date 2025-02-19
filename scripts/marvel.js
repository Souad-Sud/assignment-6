$(() => {
    const API_ENDPOINT = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0c47c0880ef702d5028f5e05fa8b81a4&hash=ff9812235d4d48256fda759d7f351dd9";
    
    const getCharacters = async () => {
        let response = await fetch(API_ENDPOINT);
        let data = await response.json();
        $(".text-footer").text(data.attributionText);

    

        let marvelC = document.querySelector(".marvel-container")
        let content = "";
         
     for(let i = 0; i < data.data.results.length; i++) {
        let marvelName = data.data.results[i];
       
        content += "<div class='marvel-item'>";
        content += "<div class='marve-image'>";
        content += "<img src='" + marvelName.thumbnail.path + "." + marvelName.thumbnail.extension + "' class='imaggge'/>";
        content += "</div>";
        content += "<h2 class='marvel-title'>" + marvelName.name + "</h2>" ;
        content += `<p>Modified  : ${marvelName.modified}</p>`
        content += `<a href="${marvelName.comics.collectionURI}" class="link"> ${marvelName.comics.collectionURI} </a>`
        content += `<p>Available : ${marvelName.comics.available}</p>`   
        content += "</div>";              
        }
        marvelC.innerHTML = content

        // let items = data.data.results[0].items;
        // items.map(item => console.log(item.name))

         
    }
    getCharacters();
    
})