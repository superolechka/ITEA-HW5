let result;
const calculator = {

    add() {
        return operand1 + operand2; 
    },
    sub() {
        return operand1 - operand2;
    },
    mult() {
        return operand1 * operand2;
    },
    div() {
        return operand1 / operand2;
    }
};

calculator.operand1 = Number(prompt("Введіть перше число"));
while (Number.isNaN(calculator.operand1)) {
    calculator.operand1 = Number(prompt("Ви ввели не число. Спробуйте ще раз"));
};

calculator.operand2 = Number(prompt("Введіть друге число"));
while (Number.isNaN(calculator.operand2)) {
    calculator.operand2 = Number(prompt("Ви ввели не число. Спробуйте ще раз"));
};

calculator.sign = prompt("Введіть знак однієї з арифметичних операцій: + - * / ");

switch (calculator.sign) {
    case "+":
        console.log(calculator.add());
        break;
    case "-": 
        console.log(calculator.sub());
        break;
    case "*": 
        console.log(calculator.mult());
        break;
    case "/": 
        console.log(calculator.div());
        break;
    default: 
        console.log(calculator.sign,"- не є знаком арифметичної операції.Уважніше спробуйте ще раз");
        break;
}    
