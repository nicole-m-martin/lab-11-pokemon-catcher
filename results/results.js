import { findByUnderscoreId } from '../utils.js';
import pokemon from '../data.js';
import { clearPlays, getPokePlays } from '../localStorageUtils.js';
import { renderLineItems } from '../results/renderLineItems.js';

const playsArray = getPokePlays();

// add a table to the results page with class 'table'
const table = document.querySelector('table');



for (let item of playsArray) {
    const pokePick = findByUnderscoreId(item._id, pokemon);
    const tableRow = renderLineItems(item, pokePick);

    table.append(tableRow);
}

const tRow = document.createElement('tr');
const tDataPoke = document.createElement('td');
const tDataCaught = document.createElement('td');
const tDataSeen = document.createElement('td');


tRow.append(tDataPoke, tDataCaught, tDataSeen);

table.append(tRow);
    
  

const button = document.querySelector('button');

button.addEventListener('click', () => {
    alert(JSON.stringify('Play Again?'));
    clearPlays();
    location.reload();
    location.href = '../index.html';
    
});






