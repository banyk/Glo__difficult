// let num = 266219;
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

//lesson03

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

let answer = lang === 'en' ? console.log(arr[0]) : console.log(arr[1]);