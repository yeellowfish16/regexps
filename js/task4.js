// Разбивам текст на слова и считаем количество каждого слова
// @param text (string) - введенный текст
// @param template (object) - регулярное выражение-шаблон
// @param change (string) - на что заменяем

function countEveryWordInText(text) {
	var regExp = /[а-яА-ЯёЁa-zA-Z]+/g,
		countResult = {},
		wordsArray = text.match(regExp);

	for (var i = 0; i < wordsArray.length; i++) {
		var a = wordsArray[i];
		
		if (countResult[a] != undefined) {
			++ countResult[a];
		}
		
		else {
			countResult[a] = 1;
		}
	}
	
	for (var word in countResult) {
		var newElem = document.createElement('p');
		newElem.innerHTML = 'Слово \"' + word + '\" встречается ' + countResult[word] + ' раз(а)';
		document.getElementById('result').appendChild(newElem);
	}
	return;
}

document.getElementById('check').onclick = function() {
	countEveryWordInText(document.getElementById('input').value);
};