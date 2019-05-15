// Function "POP"

const pop = function (arr) {
  const lastItem = arr[arr.length - 1]
  arr.length = arr.length - 1
  return lastItem
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(pop(arr));

// Function "EVERY"

const arr = [1, 3, 5, 7, 9, 11, 23];

function isBiggerThanTwenty(num) {
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

every(arr, isBiggrThanTwenty)
console.log(every(every));

// Function "SOME"

const arr = [3, 6, 8, -2, 10];

function isNegative(number) {
  return number < 0
}

const some = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) == true) {
      return true
    }
  }
  return false
}

some(arr, isNegative)

// Function "FIND"




// Function "CONCAT"



// Function "JOIN"
