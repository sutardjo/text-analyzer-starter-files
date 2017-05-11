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
		displayStats();
		return false;

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

// Display stats
function displayStats() {
	$('dl').removeClass("hidden");
	$('#js-wordcount').append(wordCountAll);
	$('#js-uniquewordcount').append(wordCountUnique);
	$('#js-averagewordlength').append(averageLengthOfWords)
}


$(doEvaluation);