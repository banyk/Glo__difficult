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

let answer = lang === 'en' ? console.log(arr[0]) : lang === 'ru' ?
 console.log(arr[1]) : console.log('Что-то пошло не так:(');

// lesson03 задача на имя пользователя

let namePerson = prompt('Введите имя');
let notBoss,
	isBoss;


let whichPerson = namePerson === 'Артем' || namePerson === 'Артём' ?
	console.log('Директор') : namePerson === 'Максим' ? console.log('Преподователь') : console.log('Студент'); */


// lesson 04 hard
/* 
const trimString = function (data) {
	if (typeof data !== 'string') {
		alert('Вы передали не строку');
	}
	if (data.trim().length > 30) {
		return data.trim().substring(0, 29) + '...';
	} else {
		return data.trim();
	}
};


console.log(trimString('       asdasdasdad   adadad       йвйвфывйуй     ')); */

// lesson 05 hard

const arr = ['24565', '34465644', '13744', '444875', '944245', '241244', '447845'];

arr.forEach(function (item) {
	if (item[0] === '2' || item[0] === '4') {
		// console.log(item);
	}
});
// вывод чисел начинающихся с 2 или 4

label:
	for (let i = 2; i <= 100; i++) {

		for (let j = 2; j < i; j++) {
			if (i % j === 0) {
				continue label;
			}
		}
		// console.log(i + ' Делители этого числа: 1 и ' + i);
	}
// вывод простых чисел 

// lesson 06 hard1) 

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let date = new Date();
let today = date.getDay();

week.forEach(function (item, i) {
	let elem = document.createElement('span');
	elem.textContent = item;
	if (item === 'Суббота' || item === 'Воскресенье') {
		elem.style.fontStyle = 'Italic';
	}
	if (i === today - 1 || i === 6 && today === 0) {
		elem.style.fontWeight = 700;
	}
	let br = document.createElement('br');
	document.body.append(elem, br);
});