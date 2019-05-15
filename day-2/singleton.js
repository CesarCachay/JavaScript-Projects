// Singleton Pattern  //

var Singleton = function () {
  return Singleton.instance = Singleton.instance || this;
};


// Other Solution //
var Singleton = function () {
  if (Singleton.__instance) {
    return Singleton.__instance;
  }

  Singleton.__instance = this;
};

class Singleton {
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    Singleton.instance = this;
  }
}

Singleton.instance = null;
