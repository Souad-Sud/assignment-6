$(() => {
    const API_ENDPOINT = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0c47c0880ef702d5028f5e05fa8b81a4&hash=ff9812235d4d48256fda759d7f351dd9";

    const getCharacters = async () => {
        let response = await fetch(API_ENDPOINT);
        let data = await response.json();
        $(".text-footer").text(data.attributionText);

        let marvelC = document.querySelector(".marvel-container")
        let marvelName = data.data.results;

        marvelName.forEach((item) => {
          
            //I create a div to wrap each marvel item in order to use Flex box then I appendchild all of my elements inside
            let marvelItemContainer = document.createElement("div");
            marvelItemContainer.classList.add("marvel-items-container")

            let imagContainer = document.createElement("div");
            imagContainer.classList.add("marvel-img-container")

            let marvelImage = document.createElement("img");
            marvelImage.src = item.thumbnail["path"] + "." + item.thumbnail["extension"];
            let imageElement =   marvelImage.src;
            //console.log(imageElement)
        

            let marvelCharacter = document.createElement("h2");
            marvelCharacter.classList.add("marvel-name");


            let marvelModification = document.createElement("h3");
            marvelModification.classList.add("marvel-modifi")

            let marvelButton = document.createElement("button");
            marvelButton.classList.add("marvel-button")


            marvelItemContainer.appendChild(imagContainer)
            marvelItemContainer.appendChild(marvelCharacter)
            marvelItemContainer.appendChild(marvelModification)
            marvelItemContainer.appendChild(marvelButton)

            imagContainer.appendChild(marvelImage)
            marvelC.appendChild(marvelItemContainer)


            marvelImage.textContent = item.imageElement;
            marvelCharacter.textContent = item.name;
            marvelModification.textContent = item.modified;

            marvelButton.textContent = "See more";

            marvelButton.addEventListener("click", function(e){
                e.preventDefault()
            
                const idvalue = item.id;
                console.log(idvalue)
                const nameValue = item.name;
                console.log(nameValue)
                const modifiedValue = item.modified
                const descriptionValue = item.description
                const src = item.thumbnail["path"] + "." + item.thumbnail["extension"];

                localStorage.setItem('id', idvalue);
                localStorage.setItem('name', nameValue);
                localStorage.setItem('image', src);
                localStorage.setItem('description', descriptionValue);
                localStorage.setItem("modified", modifiedValue)
  
            window.location.href = "detail.html";


            })
             
          });

         
    }
    getCharacters();
    
})