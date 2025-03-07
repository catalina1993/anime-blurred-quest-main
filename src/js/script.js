

// List of characters and hints
const characters = [
  {
    name: "Naruto",
    image: "src/img/character1.png",
    hint: "A ninja who loves ramen and wants to be Hokage.",
    extraHint: "Blonde hair, orange outfit, and ninja headband.",
  },
  {
    name: "Luffy",
    image: "src/img/character2.png",
    hint: "A pirate dreaming of becoming the Pirate King.",
    extraHint: "Straw hat and captain of the Straw Hat Pirates.",
  },
  {
    name: "Goku",
    image: "src/img/character3.png",
    hint: "A Saiyan who loves battles and strong opponents.",
    extraHint: "Spiky black hair and wears an orange gi.",
  },
  {
    name: "Light",
    image: "src/img/character4.png",
    hint: "A genius student who uses a deadly notebook.",
    extraHint: "Holds the Death Note with sharp, cold eyes.",
  },
  {
    name: "Levi",
    image: "src/img/character5.png",
    hint: "A soldier who fights Titans with unmatched skill.",
    extraHint: "Short black hair and known for being clean.",
  },
  {
    name: "Vegeta",
    image: "src/img/character6.png",
    hint: "A Saiyan prince striving to surpass Goku.",
    extraHint: "Widow's peak, spiky hair, and Saiyan armor.",
  },
  {
    name: "Kakashi",
    image: "src/img/character7.png",
    hint: "The 'Copy Ninja' who hides his face and reads books.",
    extraHint: "Silver hair, face mask, and a Sharingan eye.",
  },
  {
    name: "Tanjiro",
    image: "src/img/character8.png",
    hint: "A boy who wields a sword to protect his sister.",
    extraHint: "Green haori and a scar on his forehead.",
  },
  {
    name: "Itachi",
    image: "src/img/character9.png",
    hint: "A ninja who sacrifices all for peace and family.",
    extraHint: "Wears an Akatsuki cloak and Sharingan eyes.",
  },
  {
    name: "Eren",
    image: "src/img/character10.png",
    hint: "A fighter willing to do anything for freedom.",
    extraHint: "Brown hair, green cloak, and fiery will.",
  },
  {
    name: "Gojo",
    image: "src/img/character11.png",
    hint: "A sorcerer with unmatched powers and techniques.",
    extraHint: "White hair, black blindfold, and immense power.",
  },
  {
    name: "Usagi",
    image: "src/img/character12.png",
    hint: "A clumsy girl who fights evil with moon powers.",
    extraHint: "Blonde twin buns and a sailor outfit.",
  },
];
//Generate Random number to select a character
let currentCharacterIndex = Math.floor(Math.random()*characters.length);
//Set initial score and attempts to 0
let score = 0;
let attempts = 0;
let character = characters[currentCharacterIndex]; 

// DOM Elements
const characterImage = document.getElementById("blurred-image");
const hint = document.getElementById("hint");
const extraHint = document.getElementById("extra-hint");
const guessInput = document.getElementById("guess-input");
const feedback = document.getElementById("feedback");
const submitGuessButton = document.getElementById("submit-button");
const getExtraHintBtn = document.getElementById("hint-button");
const nextCharacterButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

// Initialize the game
function loadCharacter() {
  console.log(scoreElement.textContent);
  //Generate Random Number to
  //Commenting to try use as global variable
  character = characters[currentCharacterIndex];
  characterImage.src = character.image;
  characterImage.classList.add('blurred')
  console.log(characterImage.src);
  hint.textContent = `Hint: ${character.hint}`;
  extraHint.textContent = `Extra Hint: ${character.extraHint}`
  extraHint.classList.add('hidden');
  feedback.textContent = "";
  guessInput.value = "";
  currentCharacterIndex = Math.floor(Math.random()*characters.length);
  characterImage.classList.add("blurred");

}

// Increase the score
function increaseScore() {
  score++;
  scoreElement.textContent = score;
}
function decreaseScore(){
  score--;
  scoreElement.textContent = score;
} 
//increase attempts
function increaseAttempts(){
  attempts++;
  document.getElementById('attempts').textContent = attempts;
  gameCheck();
}
function resetAttempts(){
attempts = 0;
document.getElementById('attempts').textContent = attempts;
}
function resetScore(){
  score = 0;
  scoreElement.textContent = score;
  }
function gameCheck(){
  if(attempts === 3){
    alert("You have reached 3 attempts. Game Over.");
    resetAttempts();
    resetScore();
    loadCharacter();
  }
}


// Check the user's guess
submitGuessButton.addEventListener("click", () => {
  const guess = guessInput.value.trim();
//  character = characters[currentCharacterIndex]; 
  console.log('Submit Guess Button Pressed.');
    if(guess === ""){
      feedback.textContent = "Your Answer is Empty. Try again.";
      console.log('EMPTY STRING BLOCK EXECUTED');
    }
    else if((guess.toLowerCase()) === (character.name.toLowerCase())) {
    feedback.textContent = "Correct! Well done!";
    increaseScore();
    console.log('CORRECT GUESS BLOCK EXECUTED');
    // increaseAttempts(); 
    characterImage.classList.remove("blurred");
  } else{
    increaseAttempts();
    feedback.textContent = 'Incorrect! Try again';
    console.log('INCORRECT GUESS BLOCK EXECUTED');
   
  }
});

// Show an extra hint
getExtraHintBtn.addEventListener("click", () => {
  extraHint.classList.remove("hidden")
  decreaseScore();
});

// Load the next character
nextCharacterButton.addEventListener("click", () => {
  currentCharacterIndex = Math.floor(Math.random()*characters.length);
  loadCharacter();
});


// Add this to the correct guess section
// submitGuessButton.addEventListener("click", () => {
//   const guess = guessInput.value.trim().toLowerCase();
//   const character = characters[currentCharacterIndex].name.toLowerCase();

//   if (guess === character) {
//     feedback.textContent = "Correct!";
//     updateScore(); 

//   } else {
//     feedback.textContent = "Incorrect! Try again.";
//   }
// });

// Load the first character on page load
loadCharacter();
