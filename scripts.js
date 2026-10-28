//Step 1: Grab the page elements that we need. 
const searchInput = document.getElementById("search");

const statusEl = document.getElementById("status");
const listEl = document.getElementById("list");
const detailEl = document.getElementById("detail");

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
    console.log(data);
    console.log(toCard(data[id]));
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
getShows(0);