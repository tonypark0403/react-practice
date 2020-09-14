// export function callApiLike() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000);
//   });
// }

export function callApiLike() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 < 5) {
        resolve();
      } else {
        reject('callApiLike is falied');
      }
    }, 1000);
  });
}
