const repeatedWord = require('../challenges/repeatedWord/repeated-word');

describe.skip('RepeatedWord function', () => {
  it('returns the first word that repeats in a string', () => {
    const test = 'Those who fear judgment, fear only themselves, a forged existence. But when the end comes, those who march on will be the ones who used hope as a weapon. So we embrace fear. March on to victory. Get up when we fall. March on to victory. And when our feet bleed, then we will crawl. A humble maniac looking for the light. With imperfections and questions to ask.';
    expect(repeatedWord(test)).toEqual('fear'); 
  });
});