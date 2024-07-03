/** @format */

// console.log('print 1');

// // task queue (webapi event loop)
// setTimeout(() => {
//   console.log('print 2');
//   setTimeout(() => {
//     console.log('print 4');
//   }, 1000);
//   setTimeout(() => {
//     console.log('print 6');
//   }, 10);
// }, 200);
// console.log('print 3');
// setTimeout(() => {
//   console.log('print 5');
// }, 100);

// 1 3 5 2 6 4
// 1 3 5 2 6 4

// console.log('print 1');
// setTimeout(() => {
//   console.log('print 5');

//   // micro task
//   Promise.resolve().then(() => {
//     console.log('print 2');
//   });
// }, 0);
// Promise.resolve().then(() => {
//   console.log('print 4');
// });
// console.log('print 3');

// 1 3 4 2 5
// 1 3 4 5 2
// 1 3 4 5 2

// asynchronous
function fetchUser(userId) {
  // Promise
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      .then((response) => {
        if (response?.status !== 200) {
          throw new Error('Error');
        }
        return response.json();
      })
      .then((users) => {
        resolve(users);
      })
      .catch((err) => reject('Api error'));
  });
}

fetchUser(2).then((users) => console.log('users ', users));
// fetchUser(20000)
//   .then((users) => console.log('users ', users))
//   .catch((err) => alert(err));

async function fetchUser2(userId) {
  // return Promise
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users/' + userId
  );
  if (response.status !== 200) {
    throw new Error('Cannot fetch');
  }
  return response.json();
}

fetchUser2(3).then((users) => console.log('user 3 ', users));

function fetchPost(postId) {
  // Promise
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
      .then((response) => {
        if (response?.status !== 200) {
          throw new Error('Error');
        }
        return response.json();
      })
      .then((posts) => {
        resolve(posts);
      })
      .catch((err) => reject('Api error'));
  });
}

fetchPost(3).then((post) => console.log('post 3 ', post));

Promise.all([fetchUser(4000), fetchPost(5), fetchUser(5)])
  .then((values) => console.log('all ', values))
  .catch((error) => console.log('error ', error));

Promise.allSettled([fetchUser(4000), fetchPost(5), fetchUser(5)])
  .then((values) => console.log('all settled ', values)) //
  .catch((error) => console.log('error 2 ', error));

Promise.race([fetchUser(4), fetchPost(5000), fetchUser(50000)]).then((value) =>
  console.log('race ', value)
);

// ES5
// ES6

const obj = {
  name: 'XXX',
  class: '10',
};

// const name = obj.name; //
// const classP = obj.class;

const { name, class: classX } = obj;

// Regexp
const str = 'hello #$ world';

const result = /^hello/.test(str); // true false
console.log('result ', result);

function splitWords(str) {
  return str.split(/\s+/); // email // @
}

console.log(splitWords(str));
