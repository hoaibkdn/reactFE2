/** @format */

const products = [
  {
    name: 'T-shirt',
    quantity: 20,
    models: {
      value: 1,
      color: 'red',
      size: 'L',
    },
  },
  null,
  {
    name: 'short',
    quantity: 25,
    models: {
      value: 2,
      color: 'black',
      size: 'M',
    },
  },
  {
    name: 'pant',
    quantity: 31,
    models: {
      value: 3,
      color: 'gray',
      size: 'M',
    },
  },
  undefined,
  {
    name: 'pant',
    quantity: 0,
    models: {
      value: 1,
      color: 'blue',
      size: 'M',
    },
  },
];

// 1. find 1 item which has  black color
// 2. filter items having M size
const blackItem = products.find(function (item) {
  // O(n)
  return item?.models?.color === 'black';
});

const mItems = products.filter((item) => item?.models?.size === 'M');

console.log(blackItem, mItems);

// [1] [1, 2] 3
// reduce: return new data
// [{ name: '', size: ''}, { name: '', size: ''}, { name: '', size: ''}]
const newInfo = products.reduce(function (acc, item) {
  if (item?.models?.size && item?.name) {
    acc.push({
      name: item.name,
      size: item.models.size,
    });
  }
  return acc; // [{name: 'T-shirt', size: 'L'}, {name: 'short', size: 'M'}]
}, []);

console.log('newInfo ', newInfo);

// [{ name: '', quantity:  }] quantity > 0
// total: 76
const newInfo2 = products.reduce((acc, item) => {
  if (item?.quantity > 0 && item?.name) {
    acc.push({
      name: item.name,
      quantity: item.quantity,
    });
  }
  return acc;
}, []);

const totalQuantity = products.reduce((total, item) => {
  if (item?.quantity >= 0) {
    total += item.quantity; //
  }
  return total; //  20
}, 0);

console.log('newInfo2 ', newInfo2);
console.log('totalQuantity ', totalQuantity);

const currentArr = [1, 4, 3, 6, 7, 9, 5]; // 5

// push, pop, shift, unshift
currentArr.push(9);
const currentValue = currentArr.pop(); // 9
const lastItem = currentArr[currentArr.length - 1];

const firstItem = currentArr.shift();
currentArr.unshift(5);

console.log('currentArr ', currentArr);

// slice splice
const newSliced = currentArr.slice(2, 4); //
console.log('newSliced ', newSliced);
console.log('currentArr ', currentArr);

currentArr.splice(1, 1);
console.log('currentArr ', currentArr);

// 1. const arr = [1, 4, 6, 7, 9];
// x = 6 -> if x existing in the array -> remove it in the array, set it in the first place
// output [6, 1, 4, 7, 9]
// function (arr, x) { }

// 2. output: { total: quantity, products: [{name: '', color: ''}] }

// reverse
currentArr.reverse();
console.log(currentArr);

console.log(currentArr.some((item) => item === 10)); // true, false

currentArr.sort((a, b) => b - a); // ['anna', 'aboy', 'delete']
console.log('currentArr sort ', currentArr);

const obj = {
  name: '',
  age: 7,
}; // obj.hasProperty('name')
// if(String(obj) === '{}')

const keys = Object.keys(obj); // ['name', 'age'] O(n) // ['0', '1', '2', '3']

if (currentArr.includes(4)) {
  // O(n)
}

const newArr = currentArr.concat([1, 4]);
const newArr2 = [...currentArr, ...[1, 4]];
console.log('newArr', newArr);

const initialArr = [3, 4, 3, 3, 5, 1, 1, 5];
// remove duplicated numbers: [3, 4, 5, 1]

function removeDuplicatedNumber(arr) {
  const res = []; // O(1)
  arr.forEach((item) => {
    // O(n)
    if (!res.includes(item)) {
      // O(n)
      res.push(item);
    }
  });
  return res;
} // O(n^2)

function removeDupNum2(arr) {
  const obj = {}; //
  const res = []; //
  arr.forEach((item) => {
    // O(n)
    if (!obj[item]) {
      obj[item] = 1;
      res.push(item);
    } else {
      obj[item] += 1;
    }
  });
  return res;
} // O(n)

console.log(removeDupNum2(initialArr));

// fibonacci: 1 1 2 3 5 8 13 21 ....
// n = 5 => 8
function fibN(n) {
  if (n <= 2) return n;
  return fibN(n - 1) + fibN(n - 2);
} // O(2^n)
// fibN(4) = fibN(3) + fibN(2)
// fibN(3) = fibN(2) + fibN(1)
// fibN(2) ==
function fibN2(n, memo = {}) {
  //
  if (n <= 2) return n;
  if (memo[n]) return memo[n]; // n-2
  memo[n] = fibN2(n - 1, memo) + fibN2(n - 2, memo);
  return memo[n];
} // O(n)

// console.log('fibN2 ', fibN2(40));
// console.log('fibN ', fibN(40));

const sortedArr = [1, 2, 2, 4, 4, 6, 6, 7];
// [1, 2, 4, 6, 7]

// Set
function removeDuplicates(arr) {
  const resArr = [];
  let crrIndex = -1;
  arr.forEach((item, index) => {
    // O(n)
    if (index === 0 || resArr[crrIndex] !== item) {
      resArr.push(item);
      crrIndex++;
    }
  });
  return resArr;
  // return new Set(arr); // O(n)
}

console.log('set', removeDuplicates(sortedArr));
// Map
// WeakMap
// Set

// Homework:
// Given 2 sorted arrays
// const nums1 = [1, 2, 6, 8]
// const nums2 = [0, 2, 9]
// Merge 2 sorted array, return a new sorted array: [0, 1, 2, 2, 6, 8, 9]
