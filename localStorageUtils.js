import { findByUnderscoreId } from './app.js';

// import pokemon from './data.js';

// Magic String or 'Key'
const POKEPLAYS = 'POKEPLAYS'; 

export function getPokePlays() {
  // list the seen and ones that are caught(clicked on)
    let plays = JSON.parse(localStorage.getItem(POKEPLAYS));

    // if there are no plays
    if (!plays) {
        plays = [];
        localStorage.setItem(POKEPLAYS, JSON.stringify(plays));
    }

    return plays;
}
// gets new plays
export function setPokePlays(newPlays) {
    localStorage.setItem(POKEPLAYS, JSON.stringify(newPlays));
}

export function increaseSeen(_id) {
    const plays = getPokePlays();
    // check if the user has already seen this pokemon
    const yesPoke = findByUnderscoreId(plays, _id);

    // if they have not seen that pokemon, initialize a new pokemon(object)
    if (!yesPoke) {
        // const dataPoke = findByUnderscoreId(pokemon, _id);
 
        const newPoke = {
            // name: dataPoke.pokebase,
            _id: _id,
            seen: 1,
            caught: 0,
        };
    // adds the new pokemon
        plays.push(newPoke);
    } else {
        yesPoke.seen++;
    }
    setPokePlays(plays);
}

export function increaseCaught(_id) {
    const plays = getPokePlays();
  // check if the user has already caught this pokemon
    const poke = findByUnderscoreId(plays, _id);
  // increase the caught count
    // console.log(plays, _id);
    poke.caught++;

    setPokePlays(plays);

}