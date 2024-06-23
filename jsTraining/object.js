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

const currentArr = [1, 4, 6, 7, 9]; // 5

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
