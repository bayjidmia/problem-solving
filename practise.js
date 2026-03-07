//Problem : 1 - find largest Number from array
let arr = [1, 2, 3, 4, 5];
console.log(arr[1]);
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
  // memorize : increasing only index value in the loop
  console.log(arr[i]);
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);
