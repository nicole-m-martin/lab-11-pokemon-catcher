// IMPORT MODULES under test here:
import { pokemon } from '../data.js';
import { getRandomPoke } from '../app.js';

const test = QUnit.test;

// getRandomPoke Function
// test('getRandomPoke', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = [
//         {   _id: 5cef3501ef6005a77cd4fd17,
//             pokemon: bulbasaur,
//         },
//         {   _id: 5cef3501ef6005a77cd4fd19,
//             pokemon: ivysaur,
//         },
//         {   _id: 5cef3501ef6005a77cd4fd24,
//             pokemon: metapod,

//         },
//     ];
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = getRandomPoke(_id, expected);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });
