const leftJoin = require('../challenges/leftJoin/left-join');
const HashTable = require('../challenges/hashTable/hash-table');

describe('Left Join Functionality', () => {
  it('adds values that have the same key as the first hash table', () => {
    const table1 = new HashTable();
    table1.add('fond', 'enamored');
    table1.add('wrath', 'anger');
    table1.add('diligent', 'employed');
    table1.add('outfit', 'garb');
    table1.add('guide', 'usher');
    const table2 = new HashTable();
    table2.add('fond', 'averse');
    table2.add('wrath', 'delight');
    table2.add('diligent', 'idle');
    table2.add('guide', 'follow');
    table2.add('flow', 'jam');
    console.log(table1, table2);
    

    expect(leftJoin(table1, table2)).toEqual([
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', null],
      ['outfit', 'garb', null],
      ['diligent', 'employed', 'idle']
    ]);
  });
});