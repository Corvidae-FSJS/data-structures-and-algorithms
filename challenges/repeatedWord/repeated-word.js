const repeatedWord = (book) => {
  const noPunctuation = book.replace(/[^\w\s]/, '');
  const wordList = noPunctuation.toLowerCase().split(' ');
  let wordCount = {};
  let answer;

  for(let i = 0; i < wordList.length; i++) {
    if(!wordCount[wordList[i]]) {
      wordCount[wordList[i]] = 1;
    } else {
      answer = wordList[i];
    }
  }
  return answer;
};

module.exports = repeatedWord;