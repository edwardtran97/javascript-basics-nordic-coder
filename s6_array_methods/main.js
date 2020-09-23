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
    .forEach(x => console.log(x)); 3


// forEach ~~ arrow function (thường dùng)
const numberList = [1, 5, 7, 2, 10];
numberList.forEach((value) => {
    console.log(value);
});



// for ... of (thường dùng)

const randomNumber = () => 10;
const numberList = [1, 5, randomNumber(), 'hello', { name: 'Hau' }, [4, 5]];
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
        if (numberList[i] % 2 === 0) {
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
        if (numberList[i] >= Math.max(...numberList)) {
            return numberList[i] + 1;
        }
    }
}

console.log(findNumber([0, 1, 2, 3, 4]));




// Kỹ thuật đặt lính canh (tìm một phần tử thỏa điều kiện nào đó)
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






// Array of Word Lengths
// https://edabit.com/challenge/B9yPEStmax7Jxb9Dj

const wordLengths = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return false;

    let newArr = [];
    for (i = 0; i < arr.length; i += 1) {
        newArr.push(arr[i].length);
    }
    return newArr;
}
console.log(wordLengths(['Thuan', 'Tran']));
console.log(wordLengths(['hello', 'world']));


// Use map method
const wordLengths = (arr) => {
    return arr.map(x => x.length);
}
console.log(wordLengths(['Thuan', 'Tran']));
console.log(wordLengths(['hello', 'world']));




// Tìm số nguyên tố lớn nhất trong mảng


// Kiểm tra có phải mảng tăng dần hay không?
const checkIncreaseArray = (numberList) => {
    if (!Array.isArray(numberList)) return false;
    if (numberList.length < 2) return true;

    for (let i = 0; i < numberList.length - 1; i++) {
        if (numberList[i + 1] < numberList[i]) {
            return false;
        }
    }
    return true;
}

console.log(checkIncreaseArray([1, 2, 3, 4, 5]));
console.log(checkIncreaseArray([1, 2, 4, 3, 5]));
console.log(checkIncreaseArray([0, 2, 1, 0, 5]));






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
numbers.push(4);

console.log(numbers);

// Remove items at the end
const numbers = [1, 2, 3];
const lastNumber = numbers.pop();
console.log(numbers, lastNumber);


// Add new items at the beginning
const numbers = [1, 2, 3];
numbers.unshift(0);

console.log(numbers);

// Remove new items at the beginning
const numbers = [1, 2, 3];
const firstNumber = numbers.shift();
console.log(numbers, firstNumber);



// LAB: Sum of two arrays. [1, 2, 3] + [2, 4, 6] = [3, 6, 9];
// LAB: Generate an array of random numbers



// Tìm học sinh có điểm trung bình môn cao nhất
// Điểm trung bình: toán * 2 + lý + hóa / 4

const findStudent = (studentList) => {
    if (!Array.isArray(studentList) || studentList.length === 0) return null;

    let maxGrade = (studentList[0].math * 2 + studentList[0].physics + studentList[0].chemistry) / 4;
    let bestStudent = studentList[0].name;

    for (let i = 0; i < studentList.length; i++) {

        if (studentList[i].math * 2 + studentList[i].physics + studentList[i].chemistry > maxGrade) {
            maxGrade = (studentList[i].math * 2 + studentList[i].physics + studentList[i].chemistry) / 4;
            bestStudent = studentList[i].name;
        }
    }
    return `${maxGrade}, ${bestStudent}`;
}

const studentList = [
    {
        id: 1,
        name: 'Hau',
        math: 5,
        physics: 6,
        chemistry: 4,
    },
    {
        id: 2,
        name: 'Hien',
        math: 10,
        physics: 9,
        chemistry: 5,
    },
];

console.log(findStudent(studentList));



// remove duplicated letters 
const removeDuplicatdLetters = (str) => {
    if (!str) return '';

    let result = '';
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];

        if (str.indexOf(letter) === str.lastIndexOf(letter)) {
            result = `${result}${letter}`;
        }
    }
    return result;
}

console.log(removeDuplicatdLetters('abcdcd'));


// Viết function kiểm tra trong array có 2 số nào mà tổng của nó bằng tham số thứ 2 hay không. Nếu có thì return 2 số đó.

const findTwoNumber = (arr, number) => {
    if (!Array.isArray(arr) || arr.length === 0) return [];


    for (let i = 0; i < arr.length - 1; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[i] + arr[j] === number) {
                return [arr[i], arr[j]];
            }
        }
    }
    return [];
}

console.log(findTwoNumber([1, 2, 3], 5));
console.log(findTwoNumber([1, 2, 3, 4, 5, 6], 8));



// Kỹ thuật đếm 
// Đếm số lẻ âm và số chẵn dương

const countPositiveNumber = (numberList) => {
    if (!Array.isArray(numberList) || numberList.length === 0) return 0;

    let count = 0;

    for (let i = 0; i < numberList.length; i += 1) {
        if (numberList[i] < 0 && numberList[i] % 2 === -1 || numberList[i] > 0 && numberList[i] % 2 === 0) {
            count += 1;
        }
    }
    return count;
}
console.log(countPositiveNumber([-3, -2, -1, 1, 2, 4]));
console.log(countPositiveNumber([-4, -2, -1, 2, 3, 5, 6]));




const sumNumberAtEvenPosition = (numberList) => {
    if (!Array.isArray(numberList) || numberList.length === 0) return 0;

    let sum = 0;

    for (let i = 0; i < numberList.length; i += 2) {
        sum += number[i];
    }
    return sum;
}




// Callback
// imperative programming: How it works
// declarative programming: What it does


// Liệt kê các số dương và số chẵn trong mảng
const findAllEvenPositiveNumber = (numberList) => {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];

    const newArr = [];
    for (let i = 0; i < numberList.length; i += 1) {
        if (numberList[i] > 0 && numberList[i] % 2 === 0) {
            newArr.push(numberList[i]);
        }
    }
    return newArr;
}
console.log(findAllEvenPositiveNumber([1, 2, 3, 4, 5, 6]));
console.log(findAllEvenPositiveNumber([-2, 0, 3, 4, 5, 6]));




// Callback: truyền vào function một tham số chính là một function

const isEven = (number) => number % 2 === 0;

console.log(isEven);

const findAllEvenNumber = (numberList, isEvenFunction) => {
    const evenNumberList = [];

    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];

        if (isEvenFunction(number)) evenNumberList.push(number);

    }
    return evenNumberList;
}

console.log(
    findAllEvenNumber(
        [1, 2, 3, 4],
        isEven
    )
);






const processingNumber = (number, evenNumberHandler, oddNumberHandler) => {
    if (number % 2 === 0) return evenNumberHandler(number);

    return oddNumberHandler(number);
}

const evenHandler = (number) => number * 2;
const oddHandler = (number) => number + 1;
processingNumber(5, evenHandler, oddHandler);



// Use filter() method
const evenNumberList = numberList.filter(isEven);


/**
 *
 * FIND Element
 *
 * - find()
 * - findIndex()
 * - some()
 * - includes()
 * - every()
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
 * - filter(): tạo ra 1 array mới với những phần tử thỏa mãn điều kiện nào đó
 * - reduce(): lặp qua các phần tữ của mảng, xử lý một cái gì đó --> trả về kết quả cuối cùng. Ví dụ: tìm min, max, sum, ...
 * - sort()
 * - map(): tạo ra 1 array mới theo một công thức ánh xạ dựa trên array cũ
 * - find(): return về giá trị của phần tư đầu tiên thỏa mãn điều kiện
 * - findIndex(): return về vị trí của phần tử thỏa mãn điều kiện
 * - some(): kiểm tra có ít nhất 1 phần tử thỏa mãn điều kiện. return true nếu thỏa
 * - includes(): kiểm tra mảng có chứa một số / chuỗi nào đó hay không
 * - every(): kiểm tra tất cả các phàn tử thỏa mãn điều kiện. return true nếu thỏa
 */

const numberList = [1, 2, 3, 4, 5];
numberList.find((number) => {
    return number === 3;
});


numberList.find((number) => number === 3);

numberList.find(number => number === 3);

numberList.find(x => x === 3);

// Find the first even number
const numberList = [1, 2, 3, 4, 5];

console.log(numberList.find(x => x % 2 === 0));


// Viết dạng callback
const arrayFind = (numberList, checkNumber) => {
    if (!Array.isArray(numberList) || numberList.length === 0) return null;

    for (let i = 0; i < numberList.length; i++) {
        if (checkNumber(numberList[i])) return numberList[i];
    }
    return null;
}

const numberList = [1, 2, 3, 4, 5];

console.log(arrayFind(numberList, x => x % 2 === 0));



// Tìm số đầu tiên lớn hơn 3 và remove nó đi

const removeNumber = (numberList) => {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];

    const foundIndex = numberList.findIndex(x => x > 3);

    if (foundIndex >= 0) {
        numberList.splice(foundIndex, 1);
    }
    return numberList;
}
console.log(removeNumber([1, 2, 3, 4, 5]));



// map() example: tạo ra 1 array mới theo một công thức ánh xạ dựa trên array cũ

const numberList = [1, 2, 3, 4, 5];
const newList = numberList.map(x => x * 2);
console.log(newList);



const numberList = [1, 2, 3, 4, 5];
const newList = numberList.map(x => `ID-${x}`);
console.log(newList);


// filter() example: tạo ra 1 array mới với những phần tử thỏa mãn điều kiện nào đó

const numberList = [1, 2, 3, 4, 5];
const newList = numberList.filter(x => x % 2 === 1);
console.log(newList);


// some()
// every()
// includes(): chỉ dùng khi giá trị của phần tử trong mảng là string / number

const numberList = [1, 2, 3, 4, 5];
console.log(numberList.includes(5));


const wordList = ['hello', 'world'];
console.log(wordList.includes('hello'));


// some(): kiểm tra có ít nhất 1 phần tử thỏa mãn điều kiện. return true nếu thỏa
const numberList = [-1, 1, 2, 3, 4, 5];
console.log(numberList.some(x => x < 0));


const numberList = [-1, 1, 2, 3, 4, 5];
console.log(numberList.every(x => x % 2 === 1));



console.log(
    [1, 2, 3]
        .map(x => x * 2)
        .filter(x => x < 5)
);


// reduce()
// 1. Xác định giá trị khởi tạo  // 0
// 2. Xác định công thức với kết quả của bước trước đó và giá trị hiện tại // result = prevResult + currentValue

const sumReduce = (numberList) => {
    return numberList.reduce((sum, number) => {
        return ((sum + number) % 2 === 0 ? 0 : 1);
    }, 0);
}

console.log(sumReduce([1, 2, 3, 4, 5]));
console.log(sumReduce([1, 2, 3, 4]));


// Tìm từ dài nhất trong mảng - dùng reduce()
const wordList = ['Hello', 'World', 'beautiful'];

const findTheLongestWord = (wordList) => {
    if (!Array.isArray(wordList) || wordList.length === 0) return null;

    return wordList.reduce((theLongestWord, currentWord) => {
        return theLongestWord > currentWord ? theLongestWord : currentWord;
    }, wordList[0]);
};

console.log(findTheLongestWord(wordList));




// Clone array / Object (để tránh thay đổi array / object gốc)
// Value type: tham trị 
// Number, string, boolean (lưu giá trị)
let a = 5;
const b = a;
a = 10;
console.log(b);

// Reference type: tham chiếu (lưu địa chỉ chứa giá trị đó)
// Object, Array
const a = [1, 2, 3];
const b = a;
a.pop();
console.log(b);


// Clone array, object bằng Spread Operator ...
const a = [1, 2, 3];
const b = [...a, 4, 5, ...a];
a.pop();
console.log(b);


const a = { name: 'Hau' };
const b = { ...a, age: 10, }
a.name = 'Hien';
console.log(b.name);


// Bài tập trên channel Easy Frontend
// https://www.youtube.com/watch?v=RLBqJpK1hro&pbjreload=101

const doSomeThingCool = (number, obj) => {
    number = 1500;
    obj.value = 2500;
};

const a = 1000;
const b = { value: 2000 };

doSomeThingCool(a, b);
console.log(a + b.value);



const doSomeThingGreat = (obj, arr) => {
    obj.value = 3500;
    arr.push(obj.value); // [3500]
}

const a = { value: 1500 };
const b = [1000];
b.push(a.value); // [1000, 1500]

doSomeThingGreat(a, b);
console.log(b);



// Đệ quy: gọi lại function là chính nó
// Có 2 loại: đệ quy tuyến tính (gọi 1 lần), đệ quy nhị phân (gọi 2 lần)

const sum = (n) => {
    if (n === 1) return 1;

    return n * sum(n - 1);
}
console.log(sum(5));