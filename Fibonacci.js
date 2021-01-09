// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// The pattern of the sequence is that each value is the sum of the 2 previous values,
// that means that for N = 5 => 2 + 3.

// ------------------------------------------- my answer
function fibonacciIterative(n) {
	if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else if (n >= 2) {
		let previous = 1;
		let prePrevious = 0;
		let answer;
		for (let i = 2; i < n + 1; i++) {
			answer = previous + prePrevious;
			prePrevious = previous;
			previous = answer;
		}
		return answer;
	}
}

// ------------------------------------------- my answer: Too clumsy, should know that parameter doesn't have to be stored in variables.
function fibonacciRecursive(n) {
	let previous = n - 1;
	let prePrevious = n - 2;

	if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else if (n === 2) {
		return 1;
	} else {
		return fibonacciRecursive(previous) + fibonacciRecursive(prePrevious);
	}
}

// ------------------------------------------- Solution: more readable, but not ideal solution in time complexity.
function fibonacciRecursiveSolution(n) {
	if (n < 2) {
		return n;
	}
	return fibonacciRecursiveSolution(n - 1) + fibonacciRecursiveSolution(n - 2);
} // O(2^n): exponential time

// ------------------------------------------- Solution: much simpler than mine.
function fibonacciIterativeSolution(n) {
	let arr = [0, 1];
	for (let i = 2; i < n + 1; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}

	return arr[n];
} // O(n -2) = O(n)

console.log(fibonacciRecursive(-1));
