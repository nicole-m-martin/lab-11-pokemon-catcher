# Make a Pokemon catcher:

HTML:
Main Page:

1.  3 clickable pokemon images
2.  Add Submit button

Results Page:

1. Secret Div with the times each pokemon was encountered
2. Secret Div with the times each pokemon was captured

JS:

1. Import Pokemon Data: done!

2. 3 pokemon randomly generate on the page : done!

- check if they are different (they have different ids)
- if not, randomly generate 3 more until they are different

3. When a user clicks on the image:

   - Track which Pokemon the user picked(clicked)
   - Have 3 new Pokemon show up on the page
   - Increment the seen property for all 3 new Pokemon

4. Create a eventListener so 'on click'

- Increment the 'captured' property of the chosen
- If the user has played 10 times, redirect to a results page
- If not, load 3 more pokemon and repeat until they hit 10 plays

5. Create a getRandomPoke function: done!

   - use Math.floor(Math.random() \* the pokemon data.length)
   - add findById function to get the correct pokemon

6. Create a setThreePoke function: Done!

- adds the random pokemon to the page and increment the number of 'user plays'
- use a while loop to search through the pokemon array:
  - Increment the 'captured' property of the chosen
  - If the pokemon have same ideas, grab 3 more until there are 3 different ones.
  - If not, load 3 more pokemon and repeat until they hit 10 plays

7. Create a render pokemon image function:

- create the image element in JS
- use the eventListener to change the images
- If the user has played 10 times, redirect to a results page
- If not, load 3 more pokemon and repeat until they hit 10 plays

LocalStorage: 8) Create a magic string as a key (const POKEPLAYS = 'POKEPLAYS')

9. Create a getPokePlays function:

- use JSON.parse and JSON.stringify to the plays for the localstorage
- use an empty string
- return the plays

10. Create a setPokePlays function:

- use JSON.stringify to reset the plays

11. Create an increaseSeen function:

- check to see if the pokemon was seen before with findByID function
- if not, make a new object and push it
- if yes, increase the seen pokemon

12. Create an increaseCaught function:

- check to see if the pokemon was seen before with findByID function
- if yes, increase the caught pokemon

13. On results page:

- use textcontent to add the final plays of pokemon seen and caught
