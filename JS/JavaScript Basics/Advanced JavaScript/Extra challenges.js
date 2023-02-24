// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

let input = array.sort(function (a, b) { return a - b });

let newArray = [];

let storeArray = [];

input.forEach(function (value, i) {
    if (value === input[i + 1]) {
        storeArray.push(value);

    } else if (value === input[i - 1]) {
        storeArray.push(value);
        newArray.push(storeArray);
        storeArray = [];
    } else {
        newArray.push(value);
    };
});

console.log("last step", newArray);

// BONUS
let input = [1, "2", "3", 2, 3]

let stringArray = input.filter(function(value){
    return typeof value === "string";
    }).sort();

let numArray = input.filter(function(value){
    return typeof value === "number";
    }).sort(function(a,b){return a-b});

let endArray = [numArray, stringArray];

console.log(endArray);



// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

const array = [1,2,3,4,2];

function arrayTarget(array, target) {
	let temp = [];
	let sumArray= [];
	let resultArray = [];
	
	for(let i = 0; i < array.length; i++) {
		if(array[i] + array[i+1] === target) {
			temp.push(array[i], array[i+1]);
			sumArray.push(temp);
			temp = [];
		} 
		for(let j = 0; j < i; j++) {
			if(array[i+1] + array[j] === target) {
				temp.push(array[j], array[i+1]);
				sumArray.push(temp);
				if(sumArray[i-1] === array[j][i]) {
					sumArray.pop();
				}
				temp = [];
			}
		}	
	}
	resultArray = resultArray.concat([sumArray]);
	
	return resultArray;
}

console.log(arrayTarget(array, 4));



// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that if you enter 
// HEX color format it returns RGB and if you enter RGB color format it returns HEX.

let hexVal1 = "9e";
let hexVal2 = "4a";
let hexVal3 = "4a"; // rgb(158, 74, 74)
let rgbVal1 = 255;
let rgbVal2 = 104;
let rgbVal3 = 23; // #ff6817

function colourConverter(val,val2,val3) { // hex to rgb, rgb to hex
	if(typeof val === "string" && typeof val2 === "string" && typeof val3 === "string") {
		val = parseInt(val, 16);
		val2 = parseInt(val2, 16);
		val3 = parseInt(val3, 16);
		return `rgba(${val}, ${val2}, ${val3})`;
	} else if (typeof val === "number" && typeof val2 === "number" && typeof val3 === "number") {
		val = val.toString(16);
		val2 = val2.toString(16);
		val3 = val3.toString(16);
		return `#${val}${val2}${val3}`;
	}
}

console.log(colourConverter(hexVal1,hexVal2,hexVal3));
console.log(colourConverter(rgbVal1,rgbVal2,rgbVal3));