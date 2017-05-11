var wordArray = [];
var textToEvaluate;
var wordCountAll;
var wordCountUnique;
var wordArrayUnique = [];
var averageLengthOfWords;

function doEvaluation() {
	$('#submitButton').click(function() {
		textToEvaluate = $('#textArea').val();
		wordArray = textToEvaluate.split(" ");
		wordCountAll = wordArray.length;
		wordCountUnique = uniqueWords();
		averageLengthOfWords = averageLength();
	})
}

// Creates unique word array and counts words
function uniqueWords() {
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

$(doEvaluation);