
// NaN 
console.log(1 - 'abc');
console.log(Number.parseInt('abcde'));
console.log(1.5e6);

// Operators

Math.trunc(a / b) /* Chia lấy phần nguyên */

console.log(5 / 2);
console.log(Math.trunc(5 / 2));

// So sánh số thực
So sánh 2 số thực thông qua hằng số EPSILON.Không so sánh trực tiếp 2 số thực với nhau

0.1 + 0.2 - 0.3 < Number.EPSILON

// Convert number to String: toString()

const count = 123;

count.toString(2);
count.toString(16);

// Parse a string to number: parseInt(), parseFloat()

Rounding: Math.round(), Math.floor(), Math.ceil(), Math.trunc()
Random: Math.random()

const isEven = (number) => {
    return number % 2 === 0;

}

console.log(isEven(2));
console.log(isEven(3));



const countNumber = (n) => {
    if (n <= 0) {
        console.log('Cho so ki qua');
        return;
    }

    for (let i = 1; i <= n; i += 1) {
        if (i % 2 === 1)
            console.log(i);
    }
}

countNumber(10);


const sum = (n) => {
    if (n <= 0) return 0;

    let total = 0;
    for (let i = 1; i <= n; i += 1) {
        // total = total + i;
        total += i;
    }

    return total;
}

console.log(sum(20));


// S(n) = n * (n + 1) / 2

const sumMagic = (n) => {
    return n * (n + 1) / 2;
}

console.log(sumMagic(25));



// Template string

const name = 'Thuan';
const greeting = `My name is ${name}`;
console.log(greeting);


// Escape '" back slash

// Strings are immutable (không thay đổi được). String trong JS không thay đổi được ký tự sau khi khai báo. Chỉ có 1 cách là thay đổi giá trị của cả string
let hello = 'Rich';

hello = 'rich';
console.log(hello);


const name = 'Easy Frontend';

name[0] = 'e';
console.log(name);


// for ... of : lấy từng kí tự trong string
const name = 'Thuan';

for (const letter of name) {
    console.log(letter);
}

const fullName = 'Edward Tran';

for (const letter of fullName) {
    console.log(letter);
}



// toLowerCase(), toUpperCase(): biến chuỗi thành chữ thường, chữ hoa
const name = 'David Brain';

console.log(name.toLowerCase());
console.log(name.toUpperCase());


// indexOf(): trả về vị trí đầu tiên
// lastIndexOf(): trả về vị trí cuối cùng

const fullName = 'Edward Tran';

console.log(fullName.indexOf('d'));
console.log(fullName.lastIndexOf('d'));



// includes(): bao gồm một từ nào đó
const info = 'Edward Tran is student in Front-end Devlopment course at Nordic Coder School';

console.log('Info has: ', info.toLowerCase().includes('Tran is'.toLowerCase()));




// startsWith()
// endsWith()
const info = 'Edward Tran is student in Front-end Devlopment course at Nordic Coder School';

console.log('Info has: ', info.toLowerCase().startsWith('e'));
console.log('Info has: ', info.endsWith('School'));




// slice(), substring()
const info = 'Edward Tran is student in Front-end Devlopment course at Nordic Coder School';

console.log(info.substring(3));
console.log(info.slice(0, 6));




// So sánh chuỗi 
const name1 = 'Thuan';
const name2 = 'Tran';

console.log(name1 < name2);




// split(' '): tách string thành array

const hello = 'Hello Easy Ah <3';

const wordList = hello.split(' ');

console.log(wordList, wordList.length);




// PRACTICES

const chiaTien = (number) => {
    if (number <= 0) return;

    const k10 = Math.trunc(number) / 10;

    let remaining = number % 10;
    const k5 = Math.trunc(remaining) / 5;

    remaining = remaining % 5;
    const k2 = Math.trunc(remaining) / 2;

    remaining = remaining % 2;
    const k1 = Math.trunc(remaining) / 1;

    const expression = `${number} = ${k10}x10 + ${k5}x5 + ${k2}x2 + ${k1}x1`;
    console.log(expression);
}


chiaTien(128);


const randomNumber = (max) => {
    return Math.trunc(
        Math.random() * max
    );
}

console.log(randomNumber(1000));
console.log(randomNumber(1000));
console.log(randomNumber(1000));


const randomNumberInRange = (min, max) => {
    return min + Math.trunc(
        Math.random() * (max - min)
    );
}


console.log(randomNumberInRange(1000, 2000));
console.log(randomNumberInRange(1000, 2000));
console.log(randomNumberInRange(1000, 2000));



// Kiểm tra số chẳn lẻ
const isOddOrEven = (number) => {
    if (number <= 0) {
        console.log("Please enter number > 0");
        return;
    }

    if (number % 2 === 0) {
        console.log(number, ": Day la so chan");
        return;
    }

    console.log(number, ": Day la so le");

}

isOddOrEven(2);
isOddOrEven(3);
isOddOrEven(5);
isOddOrEven(8);
isOddOrEven(0);
isOddOrEven(-7);



// Kiểm ra n có phải là số nguyên tố
const checkNumber = (n) => {
    if (n < 2) {
        console.log(n, ": Day khong phai la so nguyen to");
        return;
    }

    if (n >= 2) {
        for (let i = 2; i < n - 1; i += 1) {
            if (n % i === 0) {
                console.log(n, ": Day khong phai la so nguyen to");
                return;
            }
        }
    }

    console.log(n, ": Day la so nguyen to");
}

checkNumber(-2);
checkNumber(1);
checkNumber(2);
checkNumber(5);
checkNumber(4);
checkNumber(7);
checkNumber(10);



// Đếm tổng các chữ số
const countNumber = (n) => {
    if (n <= 0) return 0;

    let total = 0;
    for (let i = 1; i <= n; i += 1) {
        total += i;
    }
    return total;
}
console.log(countNumber(20));
console.log(countNumber(10));


// Random một số nguyên

const randomNumber = (n) => {
    if (Number.isInteger(n) === false) {
        console.log("Please enter integer number");
        return;
    }

    return Math.trunc(Math.random(n) * n);
}

console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));



// Bài toán chia tiền

const countCurrency = (number) => {
    if (number <= 0) {
        console.log('Please enter number > 0');
        return 0;
    }

    const k10 = Math.trunc(number / 10);

    let remaining = number % 10;
    const k5 = Math.trunc(remaining / 5);

    remaining = remaining % 5;
    const k2 = Math.trunc(remaining / 2);

    remaining = remaining % 2;
    const k1 = Math.trunc(remaining / 1);

    const expression = `${number} = ${k10}*10 + ${k5}*5 + ${k2}*2 + ${k1}*1`;
    console.log(expression);
}

countCurrency(128);
countCurrency(256);
countCurrency(512);
countCurrency(1000);
countCurrency(0);
countCurrency(-1);



// Tính tiền taxi

const taxiFee = (sumDistance) => {
    const distance1 = 1;
    let distance2 = 5;
    const distance3 = sumDistance - distance1 - distance2;
    let taxiFee = distance1 * 15000 + distance2 * 13500 + distance3 * 11000;

    if (sumDistance <= 0) {
        console.log('Please enter sumDistance > 0');
        return;
    }

    if (sumDistance > 0 && sumDistance < 6) {
        distance2 = sumDistance - 1;
        taxiFee = distance1 * 15000 + distance2 * 13500;
        console.log('Tien taxi: ', taxiFee);
        return;
    }

    if (sumDistance >= 6 && sumDistance <= 120) {
        console.log('Tien taxi: ', taxiFee);
        return;
    }

    taxiFee *= 0.9;
    console.log('Tien taxi: ', taxiFee);
}

taxiFee(50);
taxiFee(5);
taxiFee(4);
taxiFee(125);
taxiFee(0);



// Convert second to hh:mm:ss

const convertTime = (second) => {
    if (second <= 0) {
        console.log('Please enter second > 0');
        return;
    }

    const countHour = Math.trunc(second / 3600);

    let remaining = second % 3600;
    const countMinutes = Math.trunc(remaining / 60);

    remaining = remaining % 60;
    const countSeconds = Math.trunc(remaining / 1);

    const expression = `${second} = ${countHour}h : ${countMinutes}m : ${countSeconds}s`;
    console.log(expression);
}

convertTime(1800);
convertTime(3600);
convertTime(5400);
convertTime(6200);
convertTime(7200);
convertTime(0);


// Given number of passengers. How many number of taxi 4-seat to carry enough passengers

const dividePassengers = (passengers) => {

    const k4 = Math.trunc(passengers / 4);

    let remaining = passengers % 4;
    const k3 = Math.trunc(remaining / 3);

    remaining %= 3;
    const k2 = Math.trunc(remaining / 2);

    remaining %= 2;
    const k1 = Math.trunc(remaining / 1);

    const expression = k1 + k2 + k3 + k4;
    console.log(passengers, 'passengers: ', expression, 'taxi');
}
dividePassengers(10);
dividePassengers(11);
dividePassengers(12);
dividePassengers(13);
dividePassengers(14);
dividePassengers(15);


// Tính S(n) = 1 + 2 + ... + n
const sum = (n) => {
    if (n <= 0) {
        console.log('Please enter n > 0');
        return;
    }

    console.log(n * (n + 1) / 2);
}
sum(10);
sum(20);
sum(0);
sum(-2);



// Tính S(n) = 1 x 2 x ... + n
const sum = (n) => {
    if (n <= 0) {
        // console.log('Please enter n > 0');
        return 0;
    }

    let total = 1;
    for (let i = 1; i <= n; i += 1) {
        total *= i;
    }
    return total;
}
console.log(sum(10));
console.log(sum(5));
console.log(sum(0));
console.log(sum(-2));


//  Đếm số lượng chữ số của một số nguyên dương
const numberLength = (number) => {
    if (number <= 0){
        console.log('Please enter number > 0');
        return;
    }

    console.log('Number length: ', number.toString().length);
}
numberLength(12345);
numberLength(0);
numberLength(015);