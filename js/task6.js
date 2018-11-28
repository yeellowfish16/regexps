//Вырезание подстроки по заданному шаблону из введенной строки
// @param incomingString (string) - строка, числа в которой нужно возвести в степень
// @param template (object) - шаблон

function cutString (incomingString, template) {
	var arr = incomingString.match(template);
	return String(arr[0]).toLowerCase();
}

document.getElementById('check').onclick = function() {
	var newElem = document.createElement('p');
	newElem.innerHTML = cutString(document.getElementById('input').value, /([w]{3}\.)?([a-z0-9-_]{1,}\.){0,}[a-z0-9-_]{1,}\.[a-z]{2,6}/ig);
	document.getElementById('result').appendChild(newElem);
};