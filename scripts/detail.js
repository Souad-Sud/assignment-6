$(() => {
    const API_ENDPOINT = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0c47c0880ef702d5028f5e05fa8b81a4&hash=ff9812235d4d48256fda759d7f351dd9";
    
    const getCharacters = async () => {
        let response = await fetch(API_ENDPOINT);
        let data = await response.json();
        $(".text-footer").text(data.attributionText);
        
        let items = data.data.results;

        $(".marvel-characters").empty()

        items.forEach(item => {
            $(".marvel-characters").append(`<h2 class="marvel-name ">${item.name}</h2>`)
            $(".marvel-characters").append( "<img src='" + item.thumbnail.path + "." + item.thumbnail.extension + "' class='marve-image'/>");
            $(".marvel-characters").append( `<p>${item.modified}</p>`);
            $(".marvel-characters").append( `<a href="${item.comics.collectionURI}" class="collection-link">${item.comics.collectionURI}</a>`);

       })

    }
    $(".marvel-characterst-button").on("click",  getCharacters);    
})