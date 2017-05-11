(function () {

	// Analyzes text submitted
	function analyzeText() {
		// Declare variables
		const $submitButton = $('#submitButton');
		const $textArea = $('#textArea');

		// Stores text on button click.
		$submitButton.click(function() {
		textToAnalyze = $textArea.val();
		console.log(textToAnalyze);

		// Splits words into new array
		arrayOfWords = textToAnalyze.split(" ");
		console.log(arrayOfWords);
		
		// Word count
		const wordCount = arrayOfWords.length;
		console.log(wordCount);

		// $(isThisUnique);

		// Unique Word Count
		// pick current word
		// function isThisUnique() {
		// 	for (var i = 0; i <= wordCount; i++) {
		// 		currentWord = arrayOfWords[i];
		// 	}
		// }
		// Compare each to uniqueWords
		// Take the next word
		// Compare it to last item in array
		// If word does not equal push to unique words
	})
	}

	$(analyzeText);
	
}()) // Immediately Invoked Function Expression (IIFE)


// 1. let, const > var
// 2. Immediately Invoked Function Expression (IIFE) (function () {}())
// 3. stateless (pass stuff as arguments to functions and use what is returned from those functions) vs stateful
// 4. if you can, extract out dom elements, prefer to prepend $ to variable name