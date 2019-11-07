const Hashtable = require('../challenges/hashTable/hash-table');

describe('Hash Table Implementation', () => {
  it('hashes a key', () => {
    const test = new Hashtable();
    expect(test.hash('Kaon')).toBe(4);
  });
});