// Проверка соответствия введенной строки шаблону
// @param string (string) - введенная строка
// @param template (object) - регулярное выражение-шаблон

function checkStringForTemplate (string, template) {
	return template.test(string);
}

document.getElementById('check').onclick = function() {
	alert(checkStringForTemplate(document.getElementById('input').value, /^[a+\s]+$/));
};