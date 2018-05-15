

const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
  //this.dinosaurs = [("Rexaropulus", "Carnivore", 50), ("Pteradactyl", "Omnivore", 25)];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
}

// This function will remove the first dinosaur object in the dinosaurs array.
Park.prototype.removeDinosaur = function(){
  this.dinosaurs.pop();
}

Park.prototype.findDinosaurBySpecies = function(species, dinosaurs){
  var foundDinosaurs = [];
  for (var dinosaur of dinosaurs){
    if (species === dinosaur.species){
      foundDinosaurs.push(dinosaur);
    }
  }

  return foundDinosaurs;
}

Park.prototype.removeDinosaurBySpecies = function(species, dinosaurs){
  for (var dinosaur of dinosaurs){
    if (species === dinosaur.species){
      this.dinosaurs.splice(dinosaur);
    }
  }

}


// This code just is wrong. Don't think can loop through this.dinosaurs.
// Park.prototype.findDinosaurBySpecies = function(species){
//   let foundDinosaurs = [];
//   for (var dinosaur in this.dinosaurs){
//     if (species === dinosaur.species){
//       foundDinosaurs.push(dinosaur);
//     }
//
//   }
//     return foundDinosaurs;
// }






module.exports = Park;
