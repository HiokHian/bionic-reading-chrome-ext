// credits to chatgpt for providing much of this
document.addEventListener("click", () => {
	chrome.storage.local.get("enabled", (data) => {
		if (data.enabled) {
			// get the selected text
			var selectedText = window.getSelection().toString();
			// check if there is selected text
			if (selectedText) {
				// split the text into words
				var words = selectedText.split(" ");
				// loop through each word
				for (var i = 0; i < words.length; i++) {
					var word = words[i];
					// get the length of the word
					var length = word.length;
					// calculate the index of the middle character
					var middle = Math.floor(length / 2) + 1;
					// split the word into two halves
					var firstHalf = word.slice(0, middle);
					var secondHalf = word.slice(middle);
					// wrap the first half in a bold tag
					var formattedWord = "<b>" + firstHalf + "</b>" + secondHalf;
					// replace the original word with the formatted word
					selectedText = selectedText.replace(word, formattedWord);
				}
				// replace the selected text on the webpage with the formatted text
				var range = window.getSelection().getRangeAt(0);
				range.deleteContents();
				var node = document.createElement("p");
				node.innerHTML = selectedText;
				range.insertNode(node);
			}
		}
	});
});
