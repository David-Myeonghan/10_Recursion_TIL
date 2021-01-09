//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
	return [...str].reverse().join("");
}

console.log(reverseStringIterative("yoyo mastery"));
//should return: 'yretsam oyoy'
