// Deep Freeze

Object.deepFreeze = function (object) {
  Object.freeze(object);
  for (let i in object) {
    if (typeof object[i] === 'object') {
      Object.deepFreeze(object[i]);
    }
  }
}


//  Other Solution  //
Object.deepFreeze = function (object) {
  Object.freeze(object);
  for (var key in object)
    Object.deepFreeze(object[key]);
}
