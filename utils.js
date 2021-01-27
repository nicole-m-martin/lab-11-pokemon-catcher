import pokemon from './data.js';
import { increaseCaught, increaseSeen } from './localStorageUtils.js';


let numberOfPlays = 0;

function getRandomPoke() {
    // Get a random pokemon
    const randomPokeData = Math.floor(Math.random() * pokemon.length);
    // return the data from array
    return pokemon[randomPokeData];
}

export function findByUnderscoreId(array, id) {
    for (let item of array) {
        if (item._id === id) return item;
    }
}

export function setThreePoke() {
  // increase number of plays from 0
    numberOfPlays++;
  // grab the 3 rando pokemon
    let pokeFirst = getRandomPoke();
    let pokeSecond = getRandomPoke();
    let pokeThird = getRandomPoke();

  // check to see of any rando pokemon has same _id as any other one, then the while loop if any are not unique, grab 3 more and replace first pokemon, keep going until we find 3 unique ones. 
    while (pokeFirst._id === pokeSecond._id || pokeFirst._id === pokeThird._id || pokeSecond._id === pokeThird._id) {
        pokeFirst = getRandomPoke();
        pokeSecond = getRandomPoke();
        pokeThird = getRandomPoke();
    }
    // make image variables
    const pokeImg1 = renderPokeImage(pokeFirst);
    const pokeImg2 = renderPokeImage(pokeSecond);
    const pokeImg3 = renderPokeImage(pokeThird);

    const div = document.getElementById('pokemon');
    div.textContent = '';

    increaseSeen(pokeFirst._id);
    increaseSeen(pokeSecond._id);
    increaseSeen(pokeThird._id);

    // send the images to the html page
    div.append(pokeImg1, pokeImg2, pokeImg3);
  
}

export function renderPokeImage(pokemonItem) {
  // create image variable
    const image = document.createElement('img');
    image.src = pokemonItem.url_image;
    image.classList.add('poke-img');
  
  // add event listener 
    image.addEventListener('click', () => {
        increaseCaught(pokemonItem._id);
      // if plays are under 10 keep playing
        if (numberOfPlays < 10) {
            setThreePoke();
      // if over 10 send user to the results page
        } else {
            window.location = '../results/index.html';
        }
        
    });
     // show the pokemon images
    return image;
}

// setThreePoke();
  
