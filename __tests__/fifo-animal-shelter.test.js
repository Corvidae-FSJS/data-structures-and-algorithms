const AnimalShelter = require('../challenges/fifoAnimalShelter/fifo-animal-shelter.js');

describe.skip('Animal Shelter Model Tests', () => {
  it('successfully enqueue cats and dogs', () => {
    const animalShelter = new AnimalShelter();
    const cat1 = { name: 'CMO', type: 'cat' };
    const cat2 = { name: 'Ender', type: 'cat' };
    const cat3 = { name: 'Space Cat', type: 'cat' };
    const dog1 = { name: 'Sköll', type: 'dog' };
    const dog2 = { name: 'Hati', type: 'dog' };
    const dog3 = { name: 'Fenrir', type: 'dog' };
    animalShelter.dogs.enqueue(dog1);
    animalShelter.dogs.enqueue(dog2);
    animalShelter.cats.enqueue(cat2);
    animalShelter.cats.enqueue(cat3);
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(dog3);
    expect(animalShelter.cats.front.next.next.value).toBe('CMO');
    expect(animalShelter.dogs.front.next.next.value).toBe('Fenrir');
  });

  it('removes an animal based on preference', () => {
    const animalShelter = new AnimalShelter();
    const cat1 = { name: 'CMO', type: 'cat' };
    const cat2 = { name: 'Ender', type: 'cat' };
    const cat3 = { name: 'Space Cat', type: 'cat' };
    const dog1 = { name: 'Sköll', type: 'dog' };
    const dog2 = { name: 'Hati', type: 'dog' };
    const dog3 = { name: 'Fenrir', type: 'dog' };
    animalShelter.dogs.enqueue(dog1);
    animalShelter.dogs.enqueue(dog2);
    animalShelter.dogs.enqueue(dog3);
    animalShelter.cats.enqueue(cat1);
    animalShelter.cats.enqueue(cat2);
    animalShelter.cats.enqueue(cat3);
    const removedDog = animalShelter.dequeue('dog');
    const removedCat1 = animalShelter.dequeue('cat');
    const removedCat2 = animalShelter.dequeue('cat');
    const removedCat3 = animalShelter.dequeue('cat');
    const removedCat4 = animalShelter.dequeue('cat');
    expect(removedDog.name).toEqual('Sköll');
    expect(removedCat1.name).toEqual('CMO');
    expect(removedCat2.name).toEqual('Ender');
    expect(removedCat3.name).toEqual('Space Cat');
    expect(removedCat4).toEqual('No Moar Catz');
  });
});

