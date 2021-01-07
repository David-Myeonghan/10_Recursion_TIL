// Write two functions that find the factorial of any number.
//One should use recursive, the otehr should just use a for loop.

// 5! = 5 * 4!
// 5! = 5 * 4 * 3!
// ...

// ------------------------------------------ My answer after googling.
function myFindFactorialRecursive(number) {
	let answer;
	if (number === 1) {
		return (answer = 1);
	} else {
		return number * myFindFactorialRecursive(number - 1);
	}
}

// ------------------------------------------ My answer with: while loop
function myFindFactorialIterative(number) {
	let answer = number;

	while (number > 1) {
		number--;
		answer = answer * number;
	}

	return console.log(answer);
}

// ------------------------------------------ Solution: Recursive
function findFactorialIterative(number) {
	if (number === 2) {
		// or, if (number < 2), return 1;
		return 2;
	}
	return number * findFactorialRecursive(number - 1);
} // O(n)

// ------------------------------------------ My answer with: for loop
function findFactorialIterativeFor(number) {
	let answer = number;

	for (let i = number - 1; i > 1; i--) {
		answer = answer * i;
	}
	return answer;
}

// ------------------------------------------ Solution: Iterative
function findFactorialIterative(number) {
	let answer = 1;
	if (number === 2) {
		answer = 2;
	}
	for (let i = 2; i <= number; i++) {
		answer = answer * i;
	}
	return answer;
} // O(n)

// findFactorialIterative(4);
console.log(findFactorialIterativeFor(5));
// console.log(findFactorialRecursive(5));
