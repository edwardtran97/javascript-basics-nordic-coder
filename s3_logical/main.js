
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

    const expression = `0${second} = 0${countHour} : 0${countMinutes} : 0${countSeconds}`;
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
    if (number <= 0 || Number.isInteger(number) === false) {
        console.log('Please enter integer number > 0');
        return;
    }

    console.log('Number length: ', number.toString().length);
}
numberLength(12345);
numberLength(0);
numberLength(015);
numberLength(150);
numberLength(1.5);
numberLength(0123456789);
numberLength(1234567890);


const sum = (n) => {
    if (n <= 0) return 0;

    let total1 = 0;

    for (let i = 1; i < 10 && i <= n; i += 1) {
        if (i % 2 === 1) {
            total1 += i;
        }
    }


    let total2 = 0;

    for (let i = 10; i >= 10 && i <= n; i += 1) {
        if (i % 2 === 0) {
            total2 += i;
        }
    }
    return total1 + total2;
}

console.log(sum(15));
console.log(sum(5));
console.log(sum(18));
console.log(sum(9));


const sum = (n) => {
    if (n <= 0) return 0;

    let total = 0;
    for (let i = 1; i <= n; i += 1){
        if ((i < 10 && i % 2 === 1) || (i >= 10 && i % 2 === 0)){
            total += i;
        } 
    }
    return total;
}


console.log(sum(10));


// Cho 1 chuổi. Tìm từ dài nhất / ngắn nhất trong chuỗi
// Falsy value: null, underfined, 0, ''
// Truthy: 

const findLongestWord = (str) => {
    if (!str) return '';

    const wordList = str.split(' ');
    let longestWord = '';

    for (let i = 0; i < wordList.length; i += 1) {
        if (wordList[i].length > longestWord.length){
            return longestWord = wordList[i];
        }
    }
}

console.log(findLongestWord('Hello World'));
console.log(findLongestWord('Hello abcdef'));




// Count Instances of a Character in a String
// https://edabit.com/challenge/kbFhwaDyrd79JrgeB

const charCount = (myChar, str) => {
    
    if (!myChar || !str) return 0;

    let numberOfTimes = 0;
	
	for (let i = 0; i < str.length; i += 1){
		if (myChar === str[i]){
			numberOfTimes += 1;
		}
	}
	return numberOfTimes;
}

console.log(charCount('', 'Thuan Tran'));
console.log(charCount('a', 'Thuan Tran'));
console.log(charCount('T', 'Thuan Tran'));
console.log(charCount('t', 'Thuan Tran'));
console.log(charCount('n', 'Thuan Tran'));




const str = 'My name is Thuan.';

const words = str.split(' ');

console.log(words[3].slice(0, 5));



// Find the Bomb
// https://edabit.com/challenge/r4hycBjiBNMs6AAjq

const bomb = (str) => {
	const words = str.split(' ');
	
	for (let i = 0; i < words.length; i += 1){
		if (words[i].toLowerCase().slice(0, 4) === 'bomb') {
			return 'Duck!!!';
		}
	}
	return 'There is no bomb, relax.';
}

console.log(bomb('That is has bomb!'));
console.log(bomb('That is has bomB???'));
console.log(bomb('That is has BomB.'));
console.log(bomb('That is has BoMb'));
console.log(bomb('This is very peaceful'));


// Repeating Letters
// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

const doubleChar = (str) => {
    return str.split('').map(char => char.repeat(2)).join('');
}

console.log(doubleChar('String'));
console.log(doubleChar('Thuan'));



// Repeat a String n Number of Times
// https://edabit.com/challenge/MjqneMZ7aZa8AxXZG

const repetition = (txt, n) => {
	if (n <= 0) return '';
	
	let str = '';
	for (let i = 0; i < n; i += 1) {
		str += txt;
	}
	return str;
}
console.log(repetition('abc', 3));
console.log(repetition('Thuan', 0));



// Use string.prototype.repeat()

const repetition = (txt, n) => {
    if (n <= 0) return '';

    return txt.repeat(2);
}
console.log(repetition('abc', 2));
console.log(repetition('abc', 0));



// How Many Vowels?
// https://edabit.com/challenge/3EQGHyiYTNc9LPmhF

const countVowels = (str) => {
	if (!str) return '';
	
	let count = 0;
	for (let i = 0; i < str.length; i += 1) {
		if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
			count += 1;			
		}
	}
	return count;
}
console.log(countVowels('Thuan'));
console.log(countVowels('bbb'));


// Remove Every Vowel from a String
// https://edabit.com/challenge/DbLp2kHgwQbridSSy

const removeVowels = (str) => {
    return str.replace(/[aeiou]/gi, '');
}
console.log(removeVowels('My name is Thuan'));




// Finding Nemo
// https://edabit.com/challenge/c23dFfNiKbnguSQtq

const findNemo = (sentence) => {
	if (!sentence) return '';
	
	const arr = sentence.split(' ');
	const orderOfWord = arr.indexOf('Nemo') + 1;
	
	if (arr.includes('Nemo') === true){
		return `I found Nemo at ${orderOfWord}!`;
	}
	return "I can't find Nemo :(";
}

console.log(findNemo("I am Ne mo Nemo !"));
console.log(findNemo("I am Nemo Nemo !"));
console.log(findNemo("I am di dqiuhdwq dqwojqwo Nemo !"));


// Use For Loop
const findNemo = (sentence) => {
	if (!sentence) return '';
	
	const arr = sentence.split(' ');
	let orderOfWord = 0;
	
	for (let i = 0; i < arr.length; i += 1) {
		if (arr.includes('Nemo') === true) {
			orderOfWord += arr.indexOf('Nemo') + 1;
			return `I found Nemo at ${orderOfWord}!`;
		}
	}
	return "I can't find Nemo :(";
}
console.log(findNemo("I am Ne mo Nemo !"));
console.log(findNemo("I am Nemo Nemo !"));
console.log(findNemo("I am di dqiuhdwq dqwojqwo Nemo !"));


// Hiding the Card Number
// https://edabit.com/challenge/rtpvAqFT3koqMoFCJ

const hideCard = (card) => {
    
    const last4Digits = card.slice(-4);
    const hideNumber = last4Digits.padStart(card.length, '*');

    return hideNumber;

}

console.log(hideCard('0123456789'));