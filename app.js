import pokemon from './data.js';


function findByUnderscoreId(array, id) {
    for (let item of array) {
        if (item._id === id) return item;
    }
}

function getRandomPoke() {
    // Get a random pokemon
    const randomPokeData = Math.floor(Math.random() * pokemon.length);
    // return the data from array
    return pokemon[randomPokeData];
}

function setThreePoke() {
  // grab the 3 rando pokemon
    let pokeFirst = getRandomPoke();
    let pokeSecond = getRandomPoke();
    let pokeThird = getRandomPoke();

  // check to see of any rando pokemon has same _id as any other one, then the while loop if any are not unique, grab 3 more and replace first pokemon, keep goin until we find 3 unique ones. 
    while (pokeFirst._id === pokeSecond._id || pokeFirst._id === pokeThird._id || pokeSecond._id === pokeThird._id) {
        pokeFirst = getRandomPoke();
        pokeSecond = getRandomPoke();
        pokeThird = getRandomPoke();
    }

    const pokeImg1 = renderPokeImage(pokeFirst);
    const pokeImg2 = renderPokeImage(pokeSecond);
    const pokeImg3 = renderPokeImage(pokeThird);

    const div = document.getElementById('pokemon');

    div.textContent = '';

    div.append(pokeImg1);
    div.append(pokeImg2);
    div.append(pokeImg3);
}

function renderPokeImage(pokemonItem) {
    const image = document.createElement('img');
    image.src = pokemonItem.url_image;
    image.classList.add('poke-img');

    return image;
}


setThreePoke();








