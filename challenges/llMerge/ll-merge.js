const llModel = require('../linkedList/linked-list');

const list1 = new llModel.LinkedList();
const val1 = 'Cult of Luna';
const val2 = 'Mariner';
const val3 = 54;
list1.insert(val1);
list1.insert(val2);
list1.insert(val3);

const list2 = new llModel.LinkedList();
const val4 = 'Cult of Luna';
const val5 = 'A Dawn to Fear';
const val6 = 80;
list2.insert(val4);
list2.insert(val5);
list2.insert(val6);

function mergeLists(list1, list2) {
  const newList = new llModel.LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;

  if(!list1.head) {
    return list2.head;
  }

  if(!list2.head) {
    return list1.head;
  }

  while(current1.next !== null && current2.next !== null) {
    newList.append(current1.value);
    newList.append(current2.value);
    current1 = current1.next;
    current2 = current2.next;
  }
  newList.append(current1.value);
  newList.append(current2.value);

  if(list1.size > list2.size) {
    current1 = current1.next;
    while(current1.next) {
      newList.append(current1.value);
      current1 = current1.next;
    }
    newList.append(current1.value);
  }

  if(list2.size > list1.size) {
    current2 = current2.next;
    while(current2.next) {
      newList.append(current2.value);
      current2 = current2.next;
    }
    newList.append(current2.value);
  }
  return newList.head;
}

mergeLists(list1, list2);

module.exports = mergeLists;