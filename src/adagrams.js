const LETTERPOOL = {
  'A': 9, 
  'B': 2, 
  'C': 2, 
  'D': 4, 
  'E': 12, 
  'F': 2, 
  'G': 3, 
  'H': 2, 
  'I': 9, 
  'J': 1, 
  'K': 1, 
  'L': 4, 
  'M': 2, 
  'N': 6, 
  'O': 8, 
  'P': 2, 
  'Q': 1, 
  'R': 6, 
  'S': 4, 
  'T': 6, 
  'U': 4, 
  'V': 2, 
  'W': 2, 
  'X': 1, 
  'Y': 2, 
  'Z': 1
}

export const drawLetters = () => {
    let letterFreq = {};
    let selectedLetter = [];
    while ((selectedLetter.length) < 10) {
      let random = Object.keys(LETTERPOOL)[Math.floor(Math.random()*Object.keys(LETTERPOOL).length)];
          if (random in letterFreq) {
              letterFreq[random] += 1;
          } else {
              letterFreq[random] = 1;
          if (letterFreq[random] <= LETTERPOOL[random]){
            selectedLetter.push(random)
          }        
          }        
    }
    return (selectedLetter)
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let lettersInHandCopy = lettersInHand
  for (let letter of input.toUpperCase()) {
    if (!lettersInHandCopy.includes(letter))  {
      return false;
    } 
    lettersInHandCopy.splice(0, 1, letter);
    }
    return true;
};


let SCORECHART = { 
  'A': 1, 
  'B': 3, 
  'C': 3, 
  'D': 2, 
  'E': 1, 
  'F': 4, 
  'G': 2, 
  'H': 4, 
  'I': 1, 
  'J': 8, 
  'K': 5, 
  'L': 1, 
  'M': 3, 
  'N': 1, 
  'O': 1, 
  'P': 3, 
  'Q': 10, 
  'R': 1, 
  'S': 1, 
  'T': 1, 
  'U': 1, 
  'V': 4, 
  'W': 4, 
  'X': 8, 
  'Y': 4, 
  'Z': 10
};

export const scoreWord = (word) => {
  let score = 0
  for(let letter of word.toUpperCase()){
    score += SCORECHART[letter];
  }
  if (word.length > 6){
    score +=8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let highestScore = {'score':0,'word':''};

  for (let word of words){
    if (scoreWord(word)> highestScore['score']) {
        highestScore['score'] = scoreWord(word);
        highestScore['word']= word;
    } else if (scoreWord(word) === highestScore['score']){
        if ( (word.length < highestScore['word'].length) && (highestScore['word'].length !== 10)){
            highestScore['word']= word;
        } else if ((word.length ===10) && (highestScore['word'].length !== 10)) {
            highestScore['word']= word;
        }
  }
  }
  return highestScore;
};
