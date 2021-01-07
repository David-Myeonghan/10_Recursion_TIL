let counter = 0;
function inception() {
	debugger;
	if (counter > 3) {
		return "Done!"; // undefined?
	}
	counter++;

	return inception();
	// without return keyword, the inception function will return 'unedfined'.
}
