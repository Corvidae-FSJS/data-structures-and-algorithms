const Hashtable = require('../challenges/hashTable/hash-table');

describe.skip('Hash Table Implementation', () => {
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

  it('returns null when key does not exist', () => {
    const test = new Hashtable();
    expect(test.get('Kaon')).toEqual(null);
  });

  it('checks if a hash table contains a key', () => {
    const test = new Hashtable();
    test.add('Kaon', 'test');
    expect(test.contains('Kaon')).toBe(true);
    expect(test.contains('Dylan')).toBe(false);
  });
});