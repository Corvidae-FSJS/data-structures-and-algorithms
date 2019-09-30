const { LinkedList } = require('../challenges/linkedList/linked-list');

describe('linked lists', () => {
  it('can make an empty list', () => {
    const list = new LinkedList;
    const result = {
      head: null,
      size: 0
    };
    expect(list).toEqual(result);
  });

  it('can insert a new node into list', () => {
    const list = new LinkedList;
    expect(list.size).toBe(0);
    list.insert('test');
    expect(list.size).toBe(1);
  });

  it('can properly point to the first node', () => {
    const list = new LinkedList;
    list.insert('test');
    const result = {
      value: 'test',
      next: null
    };
    expect(list.head).toEqual(result);
  });

  it('can properly insert multiple nodes', () => {
    const list = new LinkedList;
    list.insert('first');
    list.insert('second');
    list.insert('third');
    const first = {
      value: 'first',
      next: null
    };
    const second = {
      value: 'second',
      next: first
    };
    const third = {
      value: 'third',
      next: second
    };
    expect(list.head).toEqual(third);
    expect(list.head.next).toEqual(second);
    expect(list.head.next.next).toEqual(first);
    expect(list.size).toBe(3);
  });

  it('will return true when finding a value that exists in a list and false if not present', () => {
    const list = new LinkedList;
    list.insert('first');
    list.insert('second');
    list.insert('third');

    expect(list.includes('four')).toBe(false);
    expect(list.includes('third')).toBe(true);
  });

  it('will return an array of values', () => {
    const list = new LinkedList;
    list.insert('first');
    list.insert('second');
    list.insert('third');

    expect(list.toString()).toBe('third, second, first, ');
  });

  it('Appends a value to the end of the list', () => {
    const list = new LinkedList;
    list.append('first');
    list.append('second');
    list.append('third');

    expect(list.head.value).toEqual('first');
    expect(list.head.next.value).toEqual('second');
    expect(list.head.next.next.value).toEqual('third');
    expect(list.size).toBe(3);
  });

  it('Appends a new node with the given new value immediately before the first value node', () => {
    const list = new LinkedList;
    expect.assertions(5);
    list.append('first');
    list.append('third');
    list.insertBefore('third', 'second');
    
    expect(list.head.value).toEqual('first');
    expect(list.head.next.value).toEqual('second');
    expect(list.head.next.next.value).toEqual('third');
    expect(list.size).toBe(3);
    const emptyList = new LinkedList;
    expect(() => {
      emptyList.insertBefore(1, 2);
    }).toThrow('cannot use insertBefore on empty list');
  });

  it('Appends a new node with the given new value immediately after the first value node', () => {
    const list = new LinkedList;
    expect.assertions(5);
    list.append('first');
    list.append('third');
    list.insertAfter('first', 'second');
    
    expect(list.head.value).toEqual('first');
    expect(list.head.next.value).toEqual('second');
    expect(list.head.next.next.value).toEqual('third');
    expect(list.size).toBe(3);
    const emptyList = new LinkedList;
    expect(() => {
      emptyList.insertAfter(1, 2);
    }).toThrow('cannot use insertAfter on empty list');
  });    
});