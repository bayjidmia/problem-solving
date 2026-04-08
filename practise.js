//Problem : 1 - find largest Number from array
let arr = [1, 2, 3, 4, 5];

let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
  // memorize : increasing only index value in the loop
  // console.log(arr[i]);
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
// console.log(largest);

// Problem : 2 - find smallest Number from array

let arr2 = [12, 14, 15, 19, 200, 300, 1];
let smallest = arr2[0];
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] < smallest) {
    smallest = arr2[i];
  }
}
// console.log(smallest);

// Problem : 3 - find second largest Number from array
let arr3 = [95, 11, 18, 25, 96, 24, 100];
let largest1 = -Infinity;
let secondlargest = -Infinity;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > largest1) {
    secondlargest = largest1;
    largest1 = arr3[i];
  }
  if (arr3[i] > secondlargest && arr3[i] != largest1) {
    secondlargest = arr3[i];
  }
}
console.log(secondlargest);
