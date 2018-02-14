// value -> name, age 
function Person(name, age) {
    // properties in the function-> key property = value
    this.name = name;
    this.age = age;
}
// create new ojects that follow this schema
var person1 = new Person("Wesley", 17);
var person2 = new Person("Nina", 27);
// create object in terminal, enter -> node characters.js
// console.log(person1);
// console.log(person2);

function Character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
// Add method with ->this 
    this.printStats = function() {
        console.log("Name: " +this.name+"\nProfession: "+this.profession+"\nGender: "+this.gender+"\nAge: "+this.age+"\nStrength: "+this.strength+"\nHitpoints: "+this.hitpoints);
    };
    this.isAlive = function(){
        if(this.hitpoints > 0){
            console.log(this.name+" is alive!");
            return true;
            } else {
                console.log(this.name+" is dead!");
                return false;
            }
    }
    this.attack = function(character2){
        character2.hitpoints -= this.strength;
    }
    this.leveUp = function(){
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    }
}
// Create Crusher Character 
var warrior = new Character("Crusher","Warrior","Male",25,10,75);
// console.log(warrior);
var rogue = new Character("Dodger","Rogue","Female",23,20,50);

// Create a constructor that creates an Object that has properties and methods in it 
warrior.printStats();
console.log();
rogue.printStats();

rogue.attack(warrior);
console.log();
warrior.printStats();
warrior.isAlive();

// Dodger properties with levelUp will change to -> age:25, strength:25, hitpoints:75
rogue.leveUp();
console.log();
rogue.printStats();