

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


let availableIndexes = [...Array(characters.length).keys()]; // Array of unique indexes
let currentCharacterIndex = getRandomIndex();
let score = 0;
let attempts = 0;

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
const attemptsElement = document.getElementById("attempts");

// Load the first character on page load
loadCharacter();

function getRandomIndex() {
  if (availableIndexes.length === 0) {
    alert("All characters have been shown! Restarting...");
    availableIndexes = [...Array(characters.length).keys()]; // Reset available indexes
  }

  const randomIndex = Math.floor(Math.random() * availableIndexes.length);
  return availableIndexes.splice(randomIndex, 1)[0]; // Remove and return random unique index
}

function loadCharacter() {
  const character = characters[currentCharacterIndex];

  // Hide image before loading a new one
  characterImage.classList.add("hidden");

  let newImage = new Image();
  newImage.src = character.image;
  newImage.onload = () => {
    characterImage.src = newImage.src;
    characterImage.classList.remove("hidden");
    characterImage.classList.add("blurred");
  };

  hint.textContent = `Hint: ${character.hint}`;
  extraHint.textContent = `Extra Hint: ${character.extraHint}`;
  extraHint.classList.add("hidden");
  feedback.textContent = "";
  guessInput.value = "";
}

// Increase the score
function increaseScore() {
  score++;
  scoreElement.textContent = score;
}

// Decrease score for extra hints
function decreaseScore() {
  score--;
  scoreElement.textContent = score;
}

// Increase attempts and check game over
function increaseAttempts() {
  attempts++;
  attemptsElement.textContent = attempts;
  if (attempts === 3) {
    alert("Game Over! Restarting...");
    resetGame();
  }
}

// Reset attempts and score
function resetGame() {
  attempts = 0;
  score = 0;
  availableIndexes = [...Array(characters.length).keys()]; // Reset available indexes
  attemptsElement.textContent = attempts;
  scoreElement.textContent = score;
  currentCharacterIndex = getRandomIndex();
  loadCharacter();
}

// Check the user's guess
submitGuessButton.addEventListener("click", () => {
  const guess = guessInput.value.trim().toLowerCase();
  const character = characters[currentCharacterIndex];

  if (guess === "") {
    feedback.textContent = "Your answer is empty. Try again.";
  } else if (guess === character.name.toLowerCase()) {
    feedback.textContent = "Correct! Well done!";
    increaseScore();
    characterImage.classList.remove("blurred"); // Reveal the image
  } else {
    feedback.textContent = "Incorrect! Try again.";
    increaseAttempts();
  }
});

// Show an extra hint
getExtraHintBtn.addEventListener("click", () => {
  extraHint.classList.remove("hidden");
  decreaseScore();
});

// Load the next character randomly without repeats
nextCharacterButton.addEventListener("click", () => {
  currentCharacterIndex = getRandomIndex();
  loadCharacter();
});