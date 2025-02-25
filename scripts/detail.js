const marvelDetail = document.querySelector(".marvel-detail")
const imageContainer = document.querySelector(".image-container")
const idItem= localStorage.getItem("id");
const imageValue = localStorage.getItem("image");
const marvelName = localStorage.getItem("name");
const marvelModification = localStorage.getItem("modified")
const marvelDescription = localStorage.getItem("description")

//This one was tough.           
let marvelImage = document.createElement("img");
marvelImage.src = imageValue
marvelImage.textContent = imageValue
//Create a div to wrap the image
imageContainer.appendChild(marvelImage)
 

const marvelModificationItem = document.querySelector(".marvel-item-modification");
marvelModificationItem.textContent = `Modified: ` + marvelModification;

const marvelNameDetail = document.querySelector(".marvel-item-name");
marvelNameDetail.textContent = `Name: ` + marvelName;

const marvelDesc = document.querySelector(".marvel-item-description");
marvelDesc.textContent = `Description: ` + marvelDescription;      

if(marvelDescription === "") {
    marvelDesc.textContent = "This character has no description yet!!"
}
