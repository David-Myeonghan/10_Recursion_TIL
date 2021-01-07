// Write two functions that find the factorial of any number.
//One should use recursive, the otehr should just use a for loop.

// 5! = 5 * 4!
// 5! = 5 * 4 * 3!
// ...

function findFactorialRecursive(number) {
	let answer;
	if (number === 1) {
		return (answer = 1);
	} else {
		return number * findFactorialRecursive(number - 1);
	}
}

function findFactorialIterative(number) {
	let answer = number;

	while (number > 1) {
		number--;
		answer = answer * number;
	}

	return console.log(answer);
}

// findFactorialIterative(4);
console.log(findFactorialRecursive(5));
