const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation.js');

describe('Multi-Bracket Validation', () => {
  it('returns a boolean', () => {
    expect(multiBracketValidation('{}')).toBe(true);
    expect(multiBracketValidation('{}()[]')).toBe(true);
    expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
    expect(multiBracketValidation('(){}[[]]')).toBe(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBe(true);
    expect(multiBracketValidation('[({}]')).toBe(false);
    expect(multiBracketValidation('(](')).toBe(false);
    expect(multiBracketValidation('{(})')).toBe(false);
  });
});