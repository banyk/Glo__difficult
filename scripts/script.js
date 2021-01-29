let num = 266219;
let arrOfNums = num.toString().split('');
let result;

for (let i = 0; i < arrOfNums.length; i++) {
  result =
    +arrOfNums[i] *
    +arrOfNums[i + 1] *
    +arrOfNums[i + 2] *
    +arrOfNums[i + 3] *
    +arrOfNums[i + 4] *
    +arrOfNums[i + 5];
  break;

  /* здесь не совсем понял, как оптимизировать умножение
	подумал, что пока что главное решить задачу
	и пока не совсем понял, как по таким вопросам обращаться
	на созвоне уточню
	 */
}
console.log('Произведение цифр этого числа равно ' + result);

result = result ** 3;
alert('Результат равен ' + result);
alert('Первые две цифры равны ' + result.toString().substring(0, 2));
