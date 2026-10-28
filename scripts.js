//Step 1: Grab the page elements that we need. 
const searchInput = document.getElementById("search");

const statusEl = document.getElementById("status");
const listEl = document.getElementById("list");
const detailEl = document.getElementById("detail");

const randomButton = document.getElementById("randomizer");

//All the shows live in the array once they load
//Search filters THIS array, so searching costs zero network request

let allShows = [];

//Step 2 Place Your Order: fetch our Tv shows

//We need the adress
const baseUrl = "https://api.tvmaze.com";

//Every request goes through this helper function, three steps every time: 
//1. Order ---> fetch(url)
//2. Check the plcae ---> res.ok
//3. unwrap ---> res.json() 

async function getJson(path) {
    const response = await fetch(baseUrl + path);
    const data = await response.json();
    return data;


}


//Two ways to order from the menu: 
//"/shows?page=0" ---> LIST of shows ---> an array (shows)
//"/show/1". ---> ONE show ---> {} an object (one show)

//Create a function to pull all show
async function getShows(id) {
    const data = await getJson("/shows?page=0");
   // console.log(data);
    const show = toCard(data[id])
   // console.log(show); 
    
   
   
   
   const name = document.createElement("li"); 
     const ident = document.createElement("li"); 
      const genres = document.createElement("li"); 
       const year = document.createElement("li"); 
       const picture = document.createElement("img"); 

        picture.src = show.image; 
   // console.log(sprite); 
    picture.width = 160;
    picture.height = 120; 
    picture.alt = `${picture.name}`; 

       name.textContent = show.name; 
       ident.textContent = show.id; 
       genres.textContent = show.genres; 
        year.textContent = show.year; 
       listEl.replaceChildren(); 
        listEl.appendChild(name); 
        listEl.appendChild(ident);
        listEl.appendChild(picture);  
        listEl.appendChild(genres); 
        listEl.appendChild(year); 
    //return show;
}


//Create a function to pull only one show

// async function getOneShow(id) {
//     const data = await getJson("/show/" + id)
//     console.log(data);
//     console.log({
//         id: data.id,
//         name: data.name,
//         genres: data.genres,
//         year: data.premiered,
//         image: data.image.medium
//     });
//     //toCard(data); 
// }

//console.log(getShows());

function toCard(raw) {
    return {
        id: raw.id,
        name: raw.name,
        genres: raw.genres,
        year: raw.premiered,
        image: raw.image.medium
    };
}

// getOneShow(1); 

function randomShow() {
    let ranId = Math.floor(Math.random() * 240) + 1;
    console.log(ranId); 
    getShows(ranId);
    //console.log(ranShow); 
    //outPut(ranShow); 
}

function outPut(show){
  
    console.log("hi"); 
    const name = document.createElement("li"); 
     const id = document.createElement("li"); 
      const genres = document.createElement("li"); 
       const year = document.createElement("li"); 

       name.textContent = show.name; 
       id.textContent = show.id; 
       genres.textContent = show.genres; 
        year.textContent = show.year; 
       
        listEl.appendChild(name); 
        listEl.appendChild(id); 
        listEl.appendChild(genres); 
        listEl.appendChild(year); 
        
}

//-------listeners--------

randomButton.addEventListener("click", randomShow)