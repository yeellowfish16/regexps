// Обертка слова в тексте в теги
// @param text (string) - введенный текст
// @param template (object) - регулярное выражение-шаблон
// @param change (string) - на что заменяем

function wrapWordInTags (text, template, change) {
	var i = 0,
		arr = text.match(template);

	return text.replace(template, function () {
    	return '<' + change + '>' + String(arr[i++]) + '</' + change + '>';
	  }); 
}

document.getElementById('check').onclick = function() {
	document.getElementById('text').innerHTML = wrapWordInTags(document.getElementById('text').innerHTML, /([Фф]ункци(ю|ей|и|ями|ям|й|ями|ях|я))/g, 'mark');
};