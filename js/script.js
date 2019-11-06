// Globala variabler

const wordList = ['hangman', 'develop', 'anomaly', 'manhunt', 'human', 'dinosaur'];      // Array: med spelets alla ord
let selectedWord = "";    // Sträng: ett av orden valt av en slumpgenerator från arrayen ovan

let guesses = 0;     // Number: håller antalet gissningar som gjorts
let hangmanImg;      // Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`

let msgHolderEl = document.getElementById('message');     // DOM-nod: Ger meddelande när spelet är över
let startGameBtnEl = document.getElementById('startGameBtn');  // DOM-nod: knappen som du startar spelet med
let letterButtonEls = document.querySelectorAll('#letterButtons > li'); // Array av DOM-noder: Knapparna för bokstäverna
let letterBoxEls = document.getElementById('letterBoxes');    // Array av DOM-noder: Rutorna där bokstäverna ska stå

startGameBtnEl.addEventListener('click', startGame);

function startGame() {
  startGameBtnEl.style.display = "None";
  generateRandomWord();
  console.log(selectedWord);
  createLetterBoxes();
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

      input.appendChild(document.createTextNode(selectedWord[i]));
      
      list.appendChild(item);
      
    }
  
    return list;
  
  }

  letterBoxEls.appendChild(createList());

}




// TO DO:
  
  // - Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
    // - eventListener for button, call for generateRandomWord()

  // - Funktion som slumpar fram ett ord
    // - wordList[Math.floor(Math.random()*wordList.length)];

  // - Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
    // - For loop? i++ osv.

  // - Funktion som körs när du trycker på bokstäverna och gissar bokstav
    // - Kolla om bokstav finns i selectedWord-array.
    // - Om rätt: Sätt in den på rätt ruta/rutor.
    // - Om fel: Ändra till nästa bild så gubben hängs lite mer.
  
  // - Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet
    // - if/else if funktion.

  // - Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på
    // - eventListener när knappen är tryckt så inaktivera. Add attribute hidden.