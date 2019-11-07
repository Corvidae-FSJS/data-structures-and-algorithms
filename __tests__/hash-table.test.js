const Hashtable = require('../challenges/hashTable/hash-table');

describe('Hash Table Implementation', () => {
  it('hashes a key', () => {
    const test = new Hashtable();
    expect(test.hash('Kaon')).toBe(4);
  });

  it('adds a key value pair', () => {
    const test = new Hashtable();
    test.add('Kaon', 'test');
    expect(test.get('Kaon')).toEqual(['test']);
  });

  it('adds a value when the key already exists', () => {
    const test = new Hashtable();
    test.add('Kaon', 'test1');
    test.add('Kaon', 'test2');
    expect(test.get('Kaon')).toEqual(['test1', 'test2']);
  });
});