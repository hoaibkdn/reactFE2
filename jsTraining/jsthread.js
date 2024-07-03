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

console.log('print 1');
setTimeout(() => {
  console.log('print 5');

  // micro task
  Promise.resolve().then(() => {
    console.log('print 2');
  });
}, 0);
Promise.resolve().then(() => {
  console.log('print 4');
});
console.log('print 3');

// 1 3 4 2 5
// 1 3 4 5 2
// 1 3 4 5 2
