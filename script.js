const subtractNumber = (first, second) => first - second;
const sumNumber = (first, second) => first + second;
const multiplyNumber = (first, second) => first * second;
const divideNumber = (first, second) => first / second;

function getResult() {
    const firstNumber = +prompt('Введите первое число');
    const operation = prompt('Введите операцию');
    const secondNumber = +prompt('Введите второе число');
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Вы ввели не число! Пожалуйста введите число!")
    } else {

        if (operation === '-') {
            alert(`Ваш результат ${subtractNumber(firstNumber, secondNumber)}`);
        } else if (operation === '+') {
            alert(`Ваш результат ${sumNumber(firstNumber, secondNumber)}`);
        } else if (operation === '*') {
            alert(`Ваш результат ${multiplyNumber(firstNumber, secondNumber)}`);
        } else if (operation === '/') {
            alert(`Ваш результат ${divideNumber(firstNumber, secondNumber)}`);
        } else {
            alert('Такой оперции не существует');
        }
    }
}

getResult();