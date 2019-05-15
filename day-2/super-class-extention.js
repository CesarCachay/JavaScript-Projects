// Super Class Extensions
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + ' makes a noise, ';
  }
}

class Cat extends Animal {
  speak() {
    return this.name + ' makes a noise, ' + this.name + ' goes meow.';
  }
}


// Other Solution //

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + ' makes a noise, ';
  }
}

class Cat extends Animal {
  speak() {
    return super.speak() + this.name + ' goes meow.';
  }
}
