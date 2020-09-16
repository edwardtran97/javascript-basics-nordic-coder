
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



// Edabit practices
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