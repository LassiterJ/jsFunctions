// function printReverse(array){
// // prints reverse order of array
//     let strLength = array.length;
//     // console.log(array);
//     // console.log(strLength);
//     for (i= strLength; i>0; i--) {
//         console.log(i);
//     }

// }

// printReverse(["0", "1", "2", "3"])

// function isUniform(array) {
//     let first = array[0];
//     for (var i = 0; i < array.length-1; i++) {
//         if (first !==array[i] ) {
//             return false;
//         } 
//     }
//     return true;
// }

// let answer = isUniform([0,1,1,1,1]);
// let answer2 = isUniform([0,0,0,0,0]);
// console.log(answer)
// console.log(answer2)

// let numbers = [65,44,12,4];

// result = numbers.reduce(function sumArray(total, num){
//     return total + num;
// });

// Write a function max() that accepts an array of numbers and returns the maximum number in the array
let numArray = [0, 8, 64, 5]
function max(arr) {
    let max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }


    }
return max;
}
let answer = max(numArray);
console.log(answer);
