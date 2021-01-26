const POKEPLAYS = 'POKEPLAYS';
import { findByUnderscoreId } from './app.js';

function getPokePlays() {
  // list the seen and ones that are caught(clicked on)
    let plays = JSON.perse(localStorage.getItem(POKEPLAYS));

    // if there are not plays
    if (!plays) {
        plays = [];
        localStorage.setItem(POKEPLAYS, JSON.stringify(plays));
    }

    return plays;
}
// gets new plays
function setPokePlays(newPlays) {
    localStorage.setItem(POKEPLAYS, JSON.stringify(newPlays));
}

function increaseSeen(_id) {
    const plays = getPokePlays();
    // check if the user has already seen this pokemon
    const yesPoke = findByUnderscoreId(plays, _id);

    // if they have not seen that pokemon, initialize a new pokemon(object)
    if (!yesPoke) {
        const newPoke = {
            _id: _id,
            seen: 1,
            caught: 0,
        };
    // adds the new pokemon
        plays.push(newPoke);
    }
}

function increaseCaught(_id) {
  // check if the user has already caught this pokemon
    const yesPoke = findByUnderscoreId(plays, _id);
  // increase the caught count
    yesPoke.caught++;

    setPokePlays(plays);

}