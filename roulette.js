//Grab the page elements

const spinButton = document.getElementById("spin"); 
const statusEl = document.getElementById("status"); 
const resultEl = document.getElementById("result"); 
const baseUrl = "https://api.tvmaze.com";

//Add event listener
spinButton.addEventListener("click", async function(){
    //1. pick a random show id from 1 - 240
    const id = Math.floor(Math.random() * 240) + 1
    resultEl.textContent = ""; 

    statusEl.textContent = "Spinning..... channel #" + id;
    
    //2. Ask the API for the show

   const response =  await fetch("https://api.tvmaze.com/shows/" + id); 
   

   //3. fetch does not return a 404, so we check ourselves
   if(!response.ok){
    statusEl.textContent = "An Error finding your show, spin again";
    return; 
   }
   //4. turn json into javascript object
   const show = await response.json(); 
   statusEl.textContent = ""; 
   // 5. Draw it on our page
   if(show.image){
    const image = document.createElement("img"); 
    image.src = show.image.medium; 
    resultEl.appendChild(image);

   }
   const title = document.createElement("h2"); 
   title.textContent = show.name; 
   resultEl.appendChild(title); 

   const rating = document.createElement("h3"); 
   if(show.rating.average){
   rating.textContent = show.rating.average; 
   
    }
    else{
        rating.textContent = "No Rating"
    }
    resultEl.appendChild(rating); 
});