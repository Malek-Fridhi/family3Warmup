// 1-using + operator create a function 
//that combine your partner first and last name and return it.*//

// function declaration
function MyPartnerName(firstname, lastname) {
	a=""
	return firstname+" "+lastname 
}


let MultipleOf13orNot=(number)=> number%13==0?console.log("true"):console.log("false");






// 4-create a function that takes a age as a parametre and return that age in seconds.*//

const  AgeInSeconds = (age) => "age=" + " " +age*31536000 

 //5 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.
 
const sameLength=(string1, string2)=> {
	let i=0;
	while(string1.length==string2.length){
		return true
	}
	return false
}
/** 
 *? 6 - Write a function called (reverseStr) that takes a string as an input and returns the reverse of each letter
 *? followed by a number starting from zero(solve it using while loop).
 *? example:    reverseStr('hello'); "o0l1l2e3h4"
 *
 * @param {string} str
 * @return {string}
 */

let reverseStr = (str) => 
{
	let i = 0;
	let result = "";
	while (i < str.length)
		for (let j = str.length - 1; j >= 0; j--){
		result += str[j] + i;
		i++;
	}
return result}
/**
// * 7 Write a function called laugh() that takes one parameter,
// * num that represents the number of "ha"s to return.
// * laugh(6); => "hahahahahaha"
 *
 * @function laugh
 * @param {number} n
 * @return {string}
 */
const laugh= function (num){
	let str="ha"
for(i=1;i<num;i++){
	str+="ha"
}
return str
}


/**
 * 8- write a function to Reverse an array without use array.reverse() method:
 * ex: reverseArray([1,2,3]) ==> [3,2,1]
 * @function reverseArray
 * @param {array} array
 * @return {Array}
 */

let reverseArray = (array ) => 
{

/**
 * 10-Given an array of integers and an integer n.
 * find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
 * If n is not in the given array, return an empty array [].
 * Assume that n and all values in the given array will always be integers.
 * Example:
 * findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
 *
 * @param {Array} array
 * @param {number} n
 * @return {Array}
 */}
 
let findAll = (arr,n) =>  
{
	let a =[]
	let j=0
	for(let i=0;i<arr.length;i++){
		if(arr[i]==n){
		a[j]=i	
		j++
	}}
return a}


// 6. write a function that takes a string as an argument
// and returns the string reversed word by word
// Example : reverseWord("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

let reverseWord=(string) => {
	let a=[]
 for(let i=string.length-1;i>=0;i--){
	if(string[i]!==" "){
		a.push(string[i])
	}
	else{
		a.push(string[i])
	}
 }
}
