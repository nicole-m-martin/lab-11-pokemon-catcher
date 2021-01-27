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
                '#d8f3dcff',
                '#b7e4c7ff',
                '#95d5b2ff',
                '#74c69dff',
                '#52b788ff',
                '#40916cff',
                '#2d6a4fff',
                '#1b4332ff',
                '#081c15ff',
                '#d8f3dcff',
                '#b7e4c7ff',
                '#95d5b2ff',
                '#74c69dff',
                '#52b788ff',
                '#40916cff',
                '#2d6a4fff',
                '#1b4332ff',
                '#081c15ff',    
            ],
        },
        { label: '# of times caught',
            data: pokeCaughtArray(pokePlays),
            backgroundColor: [
                '#ff7b00ff',
                '#ff8800ff',
                '#ff9500ff',
                '#ffa200ff',
                '#ffaa00ff',
                '#ffb700ff',
                '#ffc300ff',
                '#ffd000ff',
                '#ffdd00ff',
                '#ffea00ff',
                '#ff7b00ff',
                '#ff8800ff',
                '#ff9500ff',
                '#ffa200ff',
                '#ffaa00ff',
                '#ffb700ff',
                '#ffc300ff',
                '#ffd000ff',
                '#ffdd00ff',
                '#ffea00ff',      
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





