// Write two functions that find the factorial of any number.
//One should use recursive, the otehr should just use a for loop.

// 5! = 5 * 4!
// 5! = 5 * 4 * 3!
// ...

function findFactorialRecursive(number) {
	let answer = number;
	let counter = number - 1;

	// base case : when the number is 1.
	// recursive case: when the number is not 1.

	answer = answer * counter;

	if (counter !== 1) {
		// console.log(answer);
		return findFactorialRecursive(number - 1);
	}

	return console.log(answer);
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
findFactorialRecursive(4);
