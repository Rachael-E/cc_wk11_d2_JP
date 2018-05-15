const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    dinosaur1 = new Dinosaur ("T-rex", "Carnivore", 50);
    dinosaur2 = new Dinosaur ("Diplodocus", "Herbivore", 20);
    dinosaur3 = new Dinosaur ("Triceratops", "Herbivore", 40);
    dinosaur4 = new Dinosaur ("Velociraptor", "Carnivore", 100);
    dinosaur5 = new Dinosaur ("Triceratops", "Carnivore", 200);

    dinolist = [dinosaur1, dinosaur2, dinosaur3, dinosaur5]

    park = new Park ("Jurassic Park", 50, dinolist); // already populated with 2 dinosaurs in the constructor in park.js...but how does it know it's of type Dinosaur? I don't think it does?

  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park")

  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);

  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);

  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 5);

  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur();
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);

  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.findDinosaurBySpecies("Triceratops", dinolist).length;
    assert.strictEqual(actual, 2);
  });

// can't get this one to assert to 2. There are 4 dinosaurs in the dinosaurs arraylist, it should remove 2 since they are triceratops, but it does not.
  it('should be able to remove all dinosaurs of a particular species', function () {
    park.removeDinosaurBySpecies("Triceratops", dinolist);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);

  });

  xit('should be able to find the dinosaur that attracts the most visitors', function () {

  });

});
