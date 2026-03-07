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

// Problem : 2 - find smallest Number from array

let arr2 = [12, 14, 15, 19, 200, 300, 1];
let smallest = arr2[0];
for (let i = 1; i < arr2.length; i++) {
  console.log(arr2[i]);
  if (arr2[i] < smallest) {
    smallest = arr2[i];
  }
}
console.log(smallest);
