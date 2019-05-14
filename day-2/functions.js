const pop = function (arr) {
  const lastItem = arr[arr.length - 1]
  arr.length = arr.length - 1
  return lastItem
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(pop(arr));

const arr = [1, 3, 5, 7, 9, 11, 23];

function isMayTwenty(num) {
  return num > 20
}

const every = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) == false) {
      return false
    }
  }
  return true
}

every(arr, isMayTwenty)

console.log(every(every));