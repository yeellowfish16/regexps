//Поиск целых положительных чисел, неравных нулю
// @param incomingString (string) - строка, из которой нужно вырезать числа

function findEvenPositiveNumbers (incomingString) {
	var arr = incomingString.match(/(?<![-\d])(?<!\d[.,])(?!0)(\d*[24680])(?![.,]?\d)/g);
	return String(arr);
}

document.getElementById('check').onclick = function() {
	var newElem = document.createElement('p');
	newElem.innerHTML = findEvenPositiveNumbers(document.getElementById('input').value);
	document.getElementById('result').appendChild(newElem);
};