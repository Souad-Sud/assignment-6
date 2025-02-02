$(() => {

    const API_ENDPOINT = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0c47c0880ef702d5028f5e05fa8b81a4&hash=ff9812235d4d48256fda759d7f351dd9";


    const getMarvel = async () => {
        $(".marvel").text("");
       
        //because we are connecting to outside data we use async because we do not know when this will get information
        let response = await fetch(`${API_ENDPOINT}/fact` ); //await for asycrnos code
        //fetch returns a promess and a promess does not have a json object
        let data = await response.json(); //this is a promess
        $(".marvel").append(`<p class="fact">${data.fact}</p>`)//then of the promess

   
     
       
    }

    $(".marvel").on("click", getMarvel);
    

})