const mergeLists = require('../challenges/llMerge/ll-merge');
const llModel = require('../challenges/linkedList/linked-list');

describe('Merge Lists', () => {
  it('merges two lists when list1 is longer', () => {
    const list1 = new llModel.LinkedList();
    list1.insert('A Greater Call');
    list1.insert('Chevron');
    list1.insert('The Wreck of the S.S. Needle');
    list1.insert('Approaching Transition');
    list1.insert('Cygnus');

    const list2 = new llModel.LinkedList();
    list2.insert('ORO');
    list2.insert('Light Chased');
    list2.insert('Shun The Mask');
    list2.insert('Vicarious Redemption');
    
    const result = mergeLists(list1, list2);

    expect(result.value).toBe('Cygnus');
    expect(result.next.value).toBe('Vicarious Redemption');
    expect(result.next.next.value).toBe('Approaching Transition');
    expect(result.next.next.next.value).toBe('Shun The Mask');
    expect(result.next.next.next.next.value).toBe('The Wreck of the S.S. Needle');
    expect(result.next.next.next.next.next.value).toBe('Light Chased');
    expect(result.next.next.next.next.next.next.value).toBe('Chevron');
    expect(result.next.next.next.next.next.next.next.value).toBe('ORO');
    expect(result.next.next.next.next.next.next.next.next.value).toBe('A Greater Call');
  });

  it('merges two lists when list two is longer', () => {
    const list1 = new llModel.LinkedList();
    list1.insert('A Greater Call');
    list1.insert('Chevron');
    list1.insert('The Wreck of the S.S. Needle');
    list1.insert('Approaching Transition');

    const list2 = new llModel.LinkedList();
    list2.insert('ORO');
    list2.insert('Light Chased');
    list2.insert('Shun The Mask');
    list2.insert('Vicarious Redemption');
    list1.insert('Cygnus');

    const result = mergeLists(list1, list2);

    expect(result.value).toBe('Cygnus');
    expect(result.next.value).toBe('Vicarious Redemption');
    expect(result.next.next.value).toBe('Approaching Transition');
    expect(result.next.next.next.value).toBe('Shun The Mask');
    expect(result.next.next.next.next.value).toBe('The Wreck of the S.S. Needle');
    expect(result.next.next.next.next.next.value).toBe('Light Chased');
    expect(result.next.next.next.next.next.next.value).toBe('Chevron');
    expect(result.next.next.next.next.next.next.next.value).toBe('ORO');
    expect(result.next.next.next.next.next.next.next.next.value).toBe('A Greater Call');
  });

  it('merges two lists when one list is empty', () => {
    const list1 = new llModel.LinkedList();
    list1.insert('A Greater Call');
    list1.insert('Chevron');
    list1.insert('The Wreck of the S.S. Needle');
    list1.insert('Approaching Transition');

    const list2 = new llModel.LinkedList();
    const result = mergeLists(list1, list2);

    expect(result.value).toBe('Approaching Transition');
    expect(result.next.value).toBe('The Wreck of the S.S. Needle');
    expect(result.next.next.value).toBe('Chevron');
    expect(result.next.next.next.value).toBe('A Greater Call');
  });
});