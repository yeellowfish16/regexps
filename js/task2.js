// Проверка соответствия введенной строки шаблону и ее длины
// @param string (string) - введенная строка
// @param template (object) - регулярное выражение-шаблон

function checkStringForTemplate (string, template) {
	return template.test(string);
}

document.getElementById('check').onclick = function() {
	alert(checkStringForTemplate(document.getElementById('input').value, /^[\wа-яА-Я]{5,}$/));
};