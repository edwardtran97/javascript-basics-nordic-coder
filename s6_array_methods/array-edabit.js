// Remove Null from an Array
// https://edabit.com/challenge/2SJX9ha6W2bYkzSNX

const removeNull = (arr) => {
    if(!Array.isArray(arr) || arr.length === 0) return false;

    let newArr = [];

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] !== null) newArr.push(arr[i]);
    }
    return newArr;
}
console.log(removeNull(["a", null, "b", null]));
console.log(removeNull([null, null, null, null, null]));
console.log(removeNull([7, 8, null, 9]));



// Use filter() method
const removeNull = (arr) => {
	return arr.filter(item => item !== null);
}



// Date Format
// https://edabit.com/challenge/NEPFa3NZSd8iiF3ps

const formatDate = (date) => {
    return date.split('/').reverse().join('');
}

console.log(formatDate('12/31/2019'));


// Difference of Max and Min Numbers in Array
// https://edabit.com/challenge/v9DwaeR6NQoapEvHh

const diffMaxMin = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return false;

    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > max) max = arr[i];   
        if (arr[i] < min) min = arr[i]; 
    }
    return max - min;
}

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
console.log(diffMaxMin([44, 32, 86, 19]));
console.log(diffMaxMin([10, 4, 1, 2, 8, 91]));
console.log(diffMaxMin([-70, 43, 34, 54, 22]));


// Use Math.max(), Math.min()

const diffMaxMin = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return false;

    return Math.max(...arr) - Math.min(...arr);
}
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
console.log(diffMaxMin([44, 32, 86, 19]));
console.log(diffMaxMin([10, 4, 1, 2, 8, 91]));
console.log(diffMaxMin([-70, 43, 34, 54, 22]));




// Capture the Rook
// https://edabit.com/challenge/H7cs3TS87sFX72mjF

const canCapture = ([yourRook, opponentsRook]) => {
    const element1 = yourRook.split('');
    const element2 = opponentsRook.split('');

    if (element1[0] === element2[0] || element1[1] === element2[1]) {
        return true;
    }
    return false;
}

console.log(canCapture(["A8", "E8"]));
console.log(canCapture(["A1", "B2"]));




// Hurdle Jump
// https://edabit.com/challenge/Hp9FitGXpKqdCW6Fd


const hurdleJump = (hurdles, jumpHeight) => {
	if (hurdles.length === 0) return true;
	
	let max = hurdles[0];
	for (let i = 0; i < hurdles.length; i += 1) {
		if (hurdles[i] >= max) {
			max = hurdles[i];	
		}
	}
	if (jumpHeight >= max) {
		return true;
	}
	return false;
}
console.log(hurdleJump([1, 2, 3, 4, 5], 5));
console.log(hurdleJump([5, 5, 3, 4, 5], 3));


// Use Math.max()

const hurdleJump = (hurdles, jumpHeight) => {
    return jumpHeight >= Math.max(...hurdles) ? true : false;
}

console.log(hurdleJump([1, 2, 3, 4, 5], 5));
console.log(hurdleJump([5, 5, 3, 4, 5], 3));



// Generate a Countdown of Numbers in an Array
// https://edabit.com/challenge/xr4Xf28xeSrc7XmCF

const countDown = (start) => {
	let decreaseNumber = new Array(start + 1);
	let newArr = [start];
	
	for (let i = 1; i < decreaseNumber.length; i += 1) {
		newArr.push(start - i);
	}
	return newArr;
}

console.log(countDown(5));


// Decrease Array 

const countDown = (number) => {
    let decreaseArray = [];

    for (i = number; i >= 0; i -= 1){
        decreaseArray.push(i);
    } 
    return decreaseArray;
}
console.log(countDown(5));




// Filter by Digit Length
// https://edabit.com/challenge/RXNybvGHLuvFiWKvq

const filterDigitLength = (arr, num) => {
	let newArr = [];
	
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i].toString().length === num) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
console.log(filterDigitLength([88, 232, 4, 9721, 555], 3));


// Use filter(), toString()

const filterDigitLength = (arr, num) => {
    return arr.filter(value => value.toString().length === num);
}

console.log(filterDigitLength([88, 232, 4, 9721, 555], 3));


// Same Number of Unique Elements
// https://edabit.com/challenge/R6DX8wKMufT5hLRuK

const same = (a1, a2) => {
    const newArr1 = a1.filter(x => a1.indexOf(x) === a1.lastIndexOf(x));
    const newArr2 = a2.filter(y => a2.indexOf(y) === a2.lastIndexOf(y));
    return (newArr1.length === newArr2.length ? true : false); 
}
console.log(same([1, 3, 4, 4, 4], [2, 5, 7]));
console.log(same([1, 3, 4, 4, 4], [2, 5, 7, 7]));


// Tìm mảng con tăng dần dài nhất
const findLongestIncreaseSubArray = (numberList) => {
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] < numberList[i - 1]) {
            const arr1 = numberList.slice(0, i);
            const arr2 = numberList.slice(i);

            return (arr1.length < arr2.length ? arr2 : arr1); 
        }
    }
}
console.log(findLongestIncreaseSubArray([1, 2, 3, 4, 5, 1, 2, 3, 4]));


// Tìm mảng con dài nhất không bị trùng

// [1, 2, [3, 4, [5]]] --> [1, 2, 3, 4, 5]