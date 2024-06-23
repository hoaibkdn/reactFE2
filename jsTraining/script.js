/** @format */

// var: ES5 -
// let, const - ES6 -> ES5 ( babel)

// hoisting
console.log(a);

var a;
a = 10;

function test() {
  var z = 23;
}

// hoisting
// console.log(b); // Reference Error
// let b;

let x = 10;

x = 20;

//
// for (var i = 0; i < 10; i++) {
//   // i = 10
//   setTimeout(() => {
//     console.log(i);
//   }, 100); //
// }

// for (let i = 0; i < 10; i++) {
//   // i = 0; i = 1;
//   setTimeout(() => {
//     console.log(i);
//   }, 100); // 0 1 2
// }

let arr = [2, 5, 7]; // Object

// loop

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

let index = 0;
while (index < 5) {
  //
  console.log('hello', arr[index]);
  index++; //
}

do {
  console.log(arr[index]);
  console.log('index ', index);
  index += 2;
} while (index < 8);

// break continue return

function test2() {
  let res = []; // O(1)
  for (let i = 0; i < 5; i++) {
    // O(5)
    if (i > 3) {
      res.push(i);
      // break; //
      // continue;
      return res; //
    }

    if (i === 2) {
      res.push(i);
    }
  }

  res[0] += 10;
  return res;
}

let arr2 = [3, 5, 8, 1, 4, 6]; // O(n)
// smallest number
function findSmallestNum(arr) {
  if (!arr.length) {
    return null;
  }
  let smallestNum = arr[0] ?? 0; // [] // O(1)
  for (let i = 1; i < arr.length; i++) {
    if (smallestNum > arr[i]) {
      smallestNum = arr[i];
    }
  }
  return smallestNum;
} // sc: O(1) tc: O(n)

console.log('findSmallestNum ', findSmallestNum(arr2));

// even: [8, 4]
function findEvenNum(arr) {
  const res = []; //
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    const element = arr[i];
    if (element % 2 === 0) {
      // == so sanh gia tri, === gia tri + kieu du lieu
      res.push(element);
    }
  }
  return res;
}
console.log('findEvenNum ', findEvenNum(arr2));

// let n1 = null;
// let n2 = undefined; // '' undefined
// console.log(n1 == n2); // true
// console.log(n1 === n2); // false

const obj = {
  name: 'Nam',
  age: 15,
  schools: ['primary', 'second'],
}; // O(1)

// space complexity: O(n)

const marks = [
  { name: 'Tom', mark: 9 }, // 0
  undefined,
  { name: 'Jerry', mark: 10 },
  { mark: 7 },
  null,
  { name: 'Donald', mark: 6 },
  { name: 'Mickey', mark: 5 }, //
  { name: 'Mickey', mark: 2 }, //
]; // 8

function sortMark(marks) {
  let n = marks.length; // 6
  for (let i = 0; i < n - 1; i++) {
    // n-1 i = 0 O(n)
    for (let j = 0; j < n - 1 - i; j++) {
      // j = 0 1 // O(n)
      if (marks[j].mark > marks[j + 1].mark) {
        let temp = marks[j];
        marks[j] = marks[j + 1];
        marks[j + 1] = temp; // modify marks
      }
    }
  }
} // O(n^2)
// O(nlogn)

// Homework
// 1. filter mark > 5: array ['Tom', 'Jerry', 'Donald']
// 2. sort marks => sort: O(nlogn), output: [{name: mark}, {...}]
// select sort, quick sort: O(n^2)

function highestMarkName(marks) {
  let highestMark = marks[0]; //
  for (let i = 1; i < marks.length; i++) {
    if (!marks[i]) {
      continue;
    }
    if (highestMark?.mark <= marks[i].mark) {
      highestMark = marks[i];
    }
  }
  return highestMark?.name ?? '';
}
console.log('highestMarkName ', highestMarkName(marks));

// find highest mark: Jerry

function filterMarks(arrMarks) {
  let nameRes = [];
  for (let i = 0; i < arrMarks.length; i++) {
    // O(n/2)
    if (!arrMarks[i] && arrMarks[i].mark == null) {
      continue;
    }

    if (arrMarks[i].mark > 5 && arrMarks[i].name) {
      nameRes.push(arrMarks[i].name);
    }
  }
  return nameRes;
}

// filter
marks.filter(function (item) {
  return item && item.mark > 5;
}); // new array

console.log(
  'filter',
  marks.filter((item) => item?.mark > 5)
); //
console.log('marks ', marks);

const newRes = [];

marks.forEach(function (item) {
  // O(n)
  newRes.push(item?.name);
});

const mappedItems = marks.map((item) => {
  if (item) {
    return {
      ...item,
      tag: item.mark > 5 ? 'red' : 'blue',
    };
  }
});

console.log('mappedItems ', mappedItems);

console.log(
  marks.find(function (item) {
    return item?.mark === 11;
  })
); // item undefined

console.log(
  marks.findIndex(function (item) {
    return item?.mark === 11;
  })
); // number -1
