const repeatedWord = (book) => {
  const noPunctuation = book.replace(/[^\w\s]/, '');
  const splitStringArr = noPunctuation.toLowerCase().split(' ');
  let wordList = {};  

  for(let i = 0; i < splitStringArr.length; i++) {
    if(!wordList[splitStringArr[i]]) {
      wordList[splitStringArr[i]] = 1;
    } else {
      return splitStringArr[i];
    }
  }
};

module.exports = repeatedWord;