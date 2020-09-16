// Modern JS
'use strict';

/**
 *
 * AGENDA
 *
 * - What is array? Array là kiểu dữ liệu dạng danh sách item
 * - How to create an array?
 * - How to loop through each item in array?
 * - How to add/remove an item?
 * - How to find an item?
 * - What is split and join?
 * - Some cool method?
 *
 */


// What is array?
// How to create an array?
// How many ways to loop through an array?
// scope, hoisting

// Đặt tên biến số nhiều theo kiểu danh sách.
const numberList = [];
const numberList = [1, 2, 5, 7, -19, 1.25, 'hello', [1, 2]];
const wordList = ['hoc', 'js', 'de', 'thay', 'ghe'];

console.log(wordList[2]); 
console.log(wordList[wordList.length - 1]); 

const studentList = [
    {
        name: 'Van A',
        age: 11,
        hobbyList: ['ca hat', 'doc sach'],
    },
    {
        name: 'Van B',
        age: 10,
        hobbyList: ['ca hat'],
    },
    {
        name: 'Van C',
        age: 9,
        hobbyList: ['ca hat'],
    },
];

const secretProp = 'age';
console.log(studentList[0].name); 
console.log(studentList[0][secretProp]); 


// For Loop
const numberList = [1, 5, 7, 2, 10];

for (let i = 0; i < numberList.length; i += 1) {
    const number = numberList[i];
    console.log(number);
}


// While Loop: kiểm tra kỹ điều kiện dừng của vòng lặp
const numberList = [1, 5, 7, 2, 10];
let i = 0;
while (i < numberList.length) {
    console.log(numberList[i]);
    i += 1;
}


// forEach
const numberList = [1, 5, 7, 2, 10];
numberList.forEach(function (value, index, array) {
    console.log(value);
});



const numberList = [1, 5, 7, 2, 10];

numberList
    .filter(x => x % 2 === 0)
    .map(x => x * 2)
    .forEach(x => console.log(x));3


// forEach ~~ arrow function (thường dùng)
const numberList = [1, 5, 7, 2, 10];
numberList.forEach( (value) => {
    console.log(value);
});



// for ... of (thường dùng)

const randomNumber = () => 10;
const numberList = [1, 5, randomNumber(), 'hello', {name: 'Hau'}, [4, 5]];
for (const item of numberList) {
    console.log(item);
}



// Kỹ thuật đặt cờ hiệu
// Kiểm tra mảng toàn số dương / số âm / số chẵn / số lẻ (thỏa một điều kiện cho trước nào đó)

const checkIfAllPositive = (numberList) => {
    
    let isAllPositive = true;

    for (let i = 0; i < numberList.length; i += 1) {

        if (numberList[i] <= 0) {
            isAllPositive = false;
            break;
        }
    }
    return isAllPositive;
}

const a1 = [1, 2, 4];
const a2 = [-1, 2, 4];
console.log(checkIfAllPositive(a1));
console.log(checkIfAllPositive(a2));




// Kiểm tra mảng có toàn số lẻ
const checkIfAllOdd = (numberList) => {

    let isAllOdd = true;

    for (let i = 0; i < numberList.length; i += 1) {
        if (numberList[i] % 2 === 0){
            isAllOdd = false;
            break;
        } 

    }
    return isAllOdd;
}

console.log(checkIfAllOdd([1, 2, 4]));
console.log(checkIfAllOdd([3, 5, 7, 10]));



// Kiểm tra có 1 số chia hết cho 10
const checkIf10 = (numberList) => {
    
    let is10 = false;

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] % 10 === 0) {
            is10 = true;
            break;
        }   
    }
    return is10;
}

console.log(checkIf10([1, 2, 4]));
console.log(checkIf10([3, 5, 7, 10]));
console.log(checkIf10([3, 5, 7, 11]));
console.log(checkIf10([3, 10, 7, 10]));


// Kiểm tra và in ra số thiếu của array

const findNumber = (numberList) => {
    
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] >= Math.max(...numberList)){
            return numberList[i] + 1;
        }
    }
}

console.log(findNumber([0, 1, 2, 3, 4]));




// Kỹ thuật đặt lính canh
const findMax = (numberList) => {
    // return null in case of empty list
    if (!Array.isArray(numberList) || numberList.length === 0) return null;

    let max = numberList[0];
    for (let i = 0; i < numberList.length; i += 1) {
        const number = numberList[i];

        if (number > max) {
            max = number;
        }

    }

    // find max
    return max;
}

console.log(findMax([2, 11, 5, 4, 7]));
console.log(findMax([2, 12, 5, 4, 7]));



// Viết function trả về số nguyên tố

const isPrime = (number) => {
    if (number < 2) return false;

    for (let i = 2; i <= Math.trunc(Math.sqrt(number)); i += 1) {
        if (number % i === 0) {
            return `${number} : khong phai so nguyen to`;
        }
    }
    return `${number} : la so nguyen to`;

}

console.log(isPrime(11));
console.log(isPrime(10));
console.log(isPrime(9));


// Tìm số nguyên tố lớn nhất trong mảng



// LAB: Loop through array and print all items
// LAB: Print all even numbers of an array
// LAB: Sum all odd numbers of an array
// LAB: Find min and max of an array


/**
 *
 * ADD/REMOVE ITEM
 *
 * - Add at the end: push() --> FAST
 * - Add at the beginning: unshift() --> SLOW
 *
 * - Remove the last item: pop() --> FAST
 * - Remove the first item: shift() --> SLOW
 *
 * - Add new item at a middle position: splice()
 * - Remove at a middle position: splice()
 */

// Add new items at the end
const numbers = [1, 2, 3];

console.log(numbers);

// Remove items at the end
const numbers = [1, 2, 3];

console.log(numbers, lastNumber);


// Add new items at the beginning
const numbers = [1, 2, 3];

console.log(numbers);

// Add new items at the beginning
const numbers = [1, 2, 3];

console.log(numbers, firstNumber);



// LAB: Sum of two arrays. [1, 2, 3] + [2, 4, 6] = [3, 6, 9];
// LAB: Generate an array of random numbers


/**
 *
 * FIND Element
 *
 * - find()
 * - findIndex()
 * - some()
 * - includes()
 */






// Includes



// LAB: Merge two arrays and remove duplication. [1, 2, 3] and [2, 3, 4, 5] = [1, 2, 3, 4, 5]
// LAB: Remove all duplication of an array.

/**
 *
 * SPLIT and JOIN
 *
 */

// ---------------------------
// parameterize
// Write a JavaScript function to parameterize a string. "Code JS Is Fun" --> "code-js-is-fun"


/**
 *
 * COOL METHODS
 *
 * - filter()
 * - reduce()
 * - sort()
 * - map()
 */



