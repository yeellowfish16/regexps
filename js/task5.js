//Возведение чисел в строке в степень
// @param incomingString (string) - строка, числа в которой нужно возвести в степень
// @param pow (number) - показатель степени

function replaceDigitsInStringToPow (incomingString, pow) {
	var regExp = /\d+/g,
		arr = incomingString.match(regExp),
		i = 0;
	
	return incomingString.replace(regExp, function () {
		return String(Math.pow(Number(arr[i++]), pow));
	});
}

document.getElementById('check').onclick = function() {
	var newElem = document.createElement('p');
	newElem.innerHTML = replaceDigitsInStringToPow(document.getElementById('input').value, 3);
	document.getElementById('result').appendChild(newElem);
};	