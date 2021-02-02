'use strict';

/* // let num = 266219;
// let arrOfNums = num.toString().split('');
// let result;

// for (let i = 0; i < arrOfNums.length; i++) {
// 	result = +arrOfNums[i] * +arrOfNums[i + 1] * +arrOfNums[i + 2] * +arrOfNums[i + 3] *
// 		+arrOfNums[i + 4] * +arrOfNums[i + 5];
// 	break;
// }
// console.log('Произведение цифр этого числа равно ' + result);

// result = result ** 3;
// alert('Результат равен ' + result);
// alert('Первые две цифры равны ' + result.toString().substring(0, 2));

//lesson03 задача на дни недели

let lang = prompt('Введите наименование языка (ru или en)');
let arr = [
	['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
	['понедельник', 'вторние', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
];
if (lang === 'en') {
	console.log(arr[0]);
} else if (lang === 'ru') {
	console.log(arr[1]);
} else {
	console.log('Что-то пошло не так :(');
}

switch (lang) {
	case 'en':
		console.log(arr[0]);
		break;
	case 'ru':
		console.log(arr[1]);
		break;
	default:
		console.log('Что-то пошло не так :(');
}

let answer = lang === 'en' ? console.log(arr[0]) : lang === 'ru' ? console.log(arr[1]) : console.log('Что-то пошло не так:(');

// lesson03 задача на имя пользователя

let namePerson = prompt('Введите имя');
let notBoss,
	isBoss;


let whichPerson = namePerson === 'Артем' || namePerson === 'Артём' ?
	console.log('Директор') : namePerson === 'Максим' ? console.log('Преподователь') : console.log('Студент'); */


// lesson 04 hard

const trimString = function (data) {
	if (typeof data !== typeof '') {
		alert('Вы передали не строку');
	}
	if (data.length > 30) {
		return data.trim().substring(0, 29) + '...';
		/* здесь не был уверен, что сделать сначала, обрезать пробелы или заменить на точки
		но сюда по очередности действий в ТЗ, сначала надо было убрать пробелы */

	} else {
		return data.trim();
	}
};

console.log(trimString(' 1 1313131 3 13 qqqqqqqqqq '));