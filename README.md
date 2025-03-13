# Anime Blurred Quest

## Description
Anime Blurred Quest is a fun guessing game where players try to identify famous anime characters from blurred images. Hints are available to assist, but using them will cost points. Test your anime knowledge and see how many characters you can guess correctly!

## Features
- Custom-built game logic using **Vanilla JavaScript** (No frameworks!)  
- Interactive UI with score and attempt tracking  
- Custom CSS styling for a unique and visually engaging experience  
- Dynamic image blurring effect to challenge players  
- Responsive design for desktop and mobile play  

## Technologies Used
- **HTML5** for structuring the webpage  
- **CSS3** for styling (entirely custom, no Bootstrap or Tailwind!)  
- **JavaScript (ES6+)** for game logic and interactivity  

## How to Play
1. A blurred image of an anime character appears on the screen.
2. A **hint** is provided to guide your guess.
3. Type the character’s name in the input box and submit.
4. If you're stuck, you can get an **extra hint**, but it costs **1 point**!
5. If you guess correctly, the image is revealed, and your **score increases**.
6. If you guess incorrectly, your **attempts increase**—3 wrong attempts and it's game over!
7. Click **Next Character** to continue playing.

## Challenges Faced
1. **Image Blurring and Reveal Effect**:
One of the trickiest parts was dynamically blurring and revealing the images. The CSS `filter: blur()` property needed to be smoothly transitioned in JavaScript when the user guessed correctly. I had to tweak the **transition timing** to avoid a sudden, jarring effect.

2. **Keeping Track of Unique Characters**:
To prevent repetition, I had to create an **array of available indexes** and remove characters as they were guessed. This required careful handling of random selection logic to ensure no duplicates appeared in the same session.

3. **Managing Game State (Score & Attempts)**:
Updating and displaying the **score and attempts** dynamically while maintaining smooth gameplay was a challenge. Incorrect guesses needed to trigger feedback, but ensuring all UI elements updated correctly in real-time required **DOM manipulation and event handling**.

4. **Hint System & Score Deduction**:
The extra hint button had to deduct a **point from the score** only if the player had enough points. This required **conditional logic** to prevent negative scores while ensuring fairness.

5. **Responsive Design Without Frameworks**:
Since I built the UI completely **without Bootstrap or Tailwind**, I had to write **custom media queries** and CSS grid/flexbox layouts to ensure proper responsiveness across different screen sizes.

