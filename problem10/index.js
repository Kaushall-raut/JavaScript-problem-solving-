let a = [2, 3, 6, 6, 5];
let store = 0;
a.sort();
for (let i = 0; i < a.length; i++) {
  for (let j = 1; j <= i; j++) {
    if (a[j] < a[i]) {
      //   console.log(a[j]);
      store = a[i] - 1;
    }
    // console.log(store);
  }
}
// document.write("hello")
console.log(store);
