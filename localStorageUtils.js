import { findByUnderscoreId } from './utils.js';
import pokemon from './data.js';



// Magic String or 'Key'
const POKEPLAYS = 'POKEPLAYS';
const emptyBall = []; 

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
    const pokeObject = findByUnderscoreId(pokemon, _id);
    const yesPoke = findByUnderscoreId(plays, _id);
   
    if (!yesPoke) {
        const newPoke = {
            name: pokeObject.pokebase,
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

export function clearPlays() {
    const stringEmptyBall = JSON.stringify(emptyBall);
    localStorage.setItem(POKEPLAYS, stringEmptyBall);
}