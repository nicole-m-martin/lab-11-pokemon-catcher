import { findByUnderscoreId } from '../utils.js';
import pokemon from '../data.js';
import { clearPlays, getPokePlays } from '../localStorageUtils.js';
import { renderLineItems } from '../results/renderLineItems.js';
import { pokeSeenArray, pokeCaughtArray, pokeNameArray } from '../results/mungeUtils.js';
var ctx = document.getElementById('myChart').getContext('2d');

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
    clearPlays();
    location.reload();
    location.href = '../index.html';
    
});

const pokePlays = getPokePlays();


var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeNameArray(pokePlays),
        datasets: [{
            label: '# of times seen',
            data: pokeSeenArray(pokePlays),
            backgroundColor: [
                '#3f37c9', 
                '#4361ee', 
                '#4cc9f0',
                '#3f37c9', 
                '#4361ee', 
                '#4cc9f0',
                '#3f37c9', 
                '#4361ee', 
                '#4cc9f0',
                '#3f37c9', 
                '#4361ee', 
                '#4cc9f0',
                '#3f37c9', 
                '#4361ee', 
                '#4cc9f0',
                 
            ],
        },
        { label: '# of times caught',
            data: pokeCaughtArray(pokePlays),
            backgroundColor: [
                '#4cc9f0',
                '#4361ee',
                '#3f37c9',
                '#4cc9f0',
                '#4361ee',
                '#3f37c9',       
                '#4cc9f0',
                '#4361ee',
                '#3f37c9',
                '#4cc9f0',
                '#4361ee',
                '#3f37c9',
                '#4cc9f0',
                '#4361ee',
                '#3f37c9',
            ],
            borderWidth: 1

        }

        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});





