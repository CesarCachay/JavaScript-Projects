// Super Class Extensions
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + ' makes a noise, ';
  }
}

// class Cat extends Animal {
//   speak() {
//     return this.name + ' makes a noise, ' + this.name + ' goes meow.';
//   }
// }

// class Animal { 
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     return this.name + ' makes a noise, ';
//   }
// }

// class Cat extends Animal {
//   speak() {
//     return super.speak() + this.name + ' goes meow.';
//   }
// }

// Singleton Pattern

var Singleton = function () {
  return Singleton.instance = Singleton.instance || this;
};

// var Singleton = function(){
//   if(Singleton.__instance) {
//     return Singleton.__instance;
//   }

//   Singleton.__instance = this;
// };

// class Singleton {
//   constructor() {
//     if (Singleton.instance) return Singleton.instance;
//     Singleton.instance = this;
//   }
// }

// Singleton.instance = null;

// Convert Hash to Array

function convertHashToArray(hash) {
  const values = Object.values(hash);
  const keys = Object.keys(hash);
  const newArray = [];
  for (let i = 0; i < values.length; i++) {
    newArray.push([keys[i], values[i]])
  };
  return newArray.sort();
}


function convertHashToArray(hash) {
  let arr = []
  for (let i in hash) {
    arr.push([i, hash[i]])
  }
  return arr.sort();
}

// Deep Freeze

