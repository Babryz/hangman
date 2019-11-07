// Globala variabler

const wordList = ['HANGMAN', 'DEVELOP', 'ANOMALY', 'MANHUNT', 'HUMAN', 'DINOUSAUR'];      // Array: med spelets alla ord
let selectedWord = "";    // Sträng: ett av orden valt av en slumpgenerator från arrayen ovan

let guesses = 0;     // Number: håller antalet gissningar som gjorts
let hangmanImg = document.getElementById('hangman');      // Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`

let msgHolderEl = document.getElementById('message');     // DOM-nod: Ger meddelande när spelet är över
let startGameBtnEl = document.getElementById('startGameBtn');  // DOM-nod: knappen som du startar spelet med

// Don´t touch variables below.
let letterBoxEls = document.getElementById('letterBoxes');    // Array av DOM-noder: Rutorna där bokstäverna ska stå
// let letterButtonEls = document.querySelectorAll('#letterButtons > li > button'); // Array av DOM-noder: Knapparna för bokstäverna
let buttons = document.querySelectorAll('#letterButton');

startGameBtnEl.addEventListener('click', startGame);

function addLetterListener() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', letterButton)
  }
}

function startGame() {
  startGameBtnEl.style.display = 'none';
  generateRandomWord();
  console.log(selectedWord);
  createLetterBoxes();
  addLetterListener();
}

function generateRandomWord() {
  let random = wordList[Math.floor(Math.random()*wordList.length)];
  selectedWord = random
  
}

function createLetterBoxes()  {
  function createList() {
  
    let list = document.createElement('ul');
    
    for (let i = 0; i < selectedWord.length; i++) {
      
      let item = document.createElement('li');
      let input = document.createElement('input');
      
      item.appendChild(input);
      
      list.appendChild(item);

      input.setAttribute("type", "text");
      input.setAttribute("value", selectedWord[i]);
      input.setAttributeNode(document.createAttribute("disabled"));
      input.style.color = 'transparent';
      
    }

    return list;
  
  }

  letterBoxEls.appendChild(createList());

}

function letterButton() {
  console.log(this.value);
  this.setAttributeNode(document.createAttribute("disabled"));
  this.style.color = 'transparent';

  if (selectedWord.match(this.value)) {
    console.log('You´re right!')
  } else {
    guesses = guesses + 1;
    console.log(guesses);
    changeImg();
  }
}

function changeImg() {
  if (guesses === 1) {
    hangmanImg.src = "images/h1.png";    
  } else if (guesses === 2) {
    hangmanImg.src = "images/h2.png";
  } else if (guesses === 3) {
    hangmanImg.src = "images/h3.png";
  } else if (guesses === 4) {
    hangmanImg.src = "images/h4.png";
  } else if (guesses === 5) {
    hangmanImg.src = "images/h5.png";
  } else if (guesses === 6) {
    hangmanImg.src = "images/h6.png";
  }
}







// TO DO:
  
  // DONE Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
    // DONE eventListener for button, call for generateRandomWord()

  // DONE Funktion som slumpar fram ett ord
    // GRATISGREJOR --> wordList[Math.floor(Math.random()*wordList.length)];

  // DONE Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
    // YES INDEED --> For loop? i++ osv.

  // - Funktion som körs när du trycker på bokstäverna och gissar bokstav
    // DONE for loop to add eventlistener to all letterButtons.
    // DONE Få funktion att funka när man trycker på bokstav?
    // DONE Clicked button now returns its value.
    // - Kolla om bokstav finns i selectedWord-array och också vart. Index?
    // - Om rätt: Sätt in den på rätt ruta/rutor.
    // - Om fel: Ändra till nästa bild så gubben hängs lite mer.
  
  // - Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet
    // - if/else if funktion.

  // - Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på
    // - eventListener när knappen är tryckt så inaktivera. Add attribute hidden.

  // - Lägg till funktion för att reseta spelet ifrån start.
    // - Få tillbaka alla bokstäver.
    // - 


// SUGGESTIONS TO DO IF TIME LEFT

  // - Fix styling to be more fancy.
  // - Add possibilty too choose between categories.
  // - Add possibilty of having sentences with spaces.
    // - Visibility: hidden; when space there.
  