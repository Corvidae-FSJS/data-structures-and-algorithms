const { Queue } = require('../stacksAndQueues/stacks-and-queues');

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(animal) {
    if(animal.type === 'cat') {
      this.cats.enqueue(animal.name);
    }
    if(animal.type === 'dog') {
      this.dogs.enqueue(animal.name);
    }
  } 

  dequeue(pref) {
    if(pref === 'cat') {
      if(!this.cats.peek()) 
        return 'No Moar Catz';
      if(this.cats.peek())
        return this.cats.dequeue();
    }
    if(pref === 'dog') {
      if(!this.dogs.peek())
        return 'No Moar Doges';
      if(this.dogs.peek()) 
        return this.dogs.dequeue();
    }
    else return null;
  }
}

module.exports = AnimalShelter;