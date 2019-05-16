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

// Other Solution //

function convertHashToArray(hash) {
  let arr = []
  for (let i in hash) {
    arr.push([i, hash[i]])
  }
  return arr.sort();
}
