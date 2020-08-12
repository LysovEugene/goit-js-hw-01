const yearOfBirth = 2006;
console.log(yearOfBirth);

// console.log(a); // ReferenceError: a is not defined
let a = 10;
console.log(a); // 10

// console.log(b); // ReferenceError: b is not defined
const b = 15;
console.log(b); //15

const message = "JavaScript is awesome!";
/*
 * В круглых скобках указываем имя переменной,
 * значение которой необходимо вывести в консоль
 */
console.log(message); // JavaScript is awesome!
const name = "Mango";
/*
 * Можно сначала указать какую-то произвольную строку,
 * к примеру описывающую переменную или дополняющую ее, после чего
 * поставить запятую и указать имя переменной
 */
console.log("My name is: ", name); // My name is: Mango
alert(message);

const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);

const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // 'number'
