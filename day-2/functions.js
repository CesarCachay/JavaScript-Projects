// Function "POP"

const pop = function(arr) {
  const lastItem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastItem;
};

const arrPop = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(pop(arrPop));

// Function "EVERY"

const arrEvery = [1, 3, 5, 7, 9, 11, 23];

function isBiggerThanTwenty(num) {
  return num > 20;
}

const every = function(arrEvery, fn) {
  for (let i = 0; i < arrEvery.length; i++) {
    if (!fn(arrEvery[i])) {
      return false;
    }
  }
  return true;
};

every(arrEvery, isBiggrThanTwenty);
console.log(every(every));

// Function "SOME"

const arrSome = [3, 6, 8, -2, 10];

function isNegative(number) {
  return number < 0;
}

const some = function(arrSome, fn) {
  for (let i = 0; i < arrSome.length; i++) {
    if (fn(arrSome[i])) {
      return true;
    }
  }
  return false;
};

some(arrSome, isNegative);

// Function "FIND"
const find = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) return arr[i];
  }
  return undefined;
};

const arrayFind = [5, 12, 8, 130, 44];
find(arrayFind, num => num > 10);

// Function "CONCAT"

const concat = (arr, ...elements) => {
  for (let i = 0; i < elements.length; i++) {
    arr.push(elements[i]);
  }
  return arr;
};

const arrConcat = [1, 2, 3, 4, 5];
concat(arrConcat, 6, 7);

// Function "JOIN"

const join = (arr, separator = ",") => {
  let result = "";
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i] + separator;
  }
  return result + arr[arr.length - 1];
};

const arrJoin = [1, 2, 3, 4, 5];
join(arrJoin);

const arrJoin = [1, 2, 3, 4, 5];
join(arrJoin, "-");

const arrJoin = [1, 2, 3, 4, 5];
join(arrJoin, "--");
