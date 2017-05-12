var textToEvaluate;
var wordCountAll;
var wordCountUnique;
var averageLengthOfWords;
const $submitButton = $('#submitButton');
const $textArea = $('#textArea');
const $jsWordcount = $('#js-wordcount')
const $jsUniqueWordCount = $('#js-uniquewordcount');
const $jsAverageWordLength = $('#js-averagewordlength');

function doEvaluation() {
	$submitButton.click(function() {
		textToEvaluate = $textArea.val();
		let wordArray = textToEvaluate.split(" ");
		wordCountAll = wordArray.length;
		wordCountUnique = uniqueWords(wordArray);
		averageLengthOfWords = averageLength();
		displayStats();
		return false;

	})
}

// Creates unique word array and counts words
function uniqueWords(wordArray) {
	let wordArrayUnique = [];
	$.each(wordArray, function(i, el) {
		if ($.inArray(el, wordArrayUnique) === -1) wordArrayUnique.push(el);
	})
	return wordArrayUnique.length;
}

// Calculate average word length
function averageLength() {
	var withoutSpace = textToEvaluate.replace(/ /g,"");
	return (withoutSpace.length)/wordCountAll;
}

// Display stats
function displayStats() {
	$('dl').removeClass("hidden");
	$jsWordcount.html(wordCountAll);
	$jsUniqueWordCount.html(wordCountUnique);
	$jsAverageWordLength.html(averageLengthOfWords)
}

doEvaluation();