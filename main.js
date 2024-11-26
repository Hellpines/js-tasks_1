// console.log("Задача 1")
// let a = 10
// let b = 3
// console.log(a % b)

// console.log("Задача 2")
// let c = Number(prompt("Основание степени: "));
// let d = Number(prompt("Показатель степени: "));
// console.log(c**d)

// console.log("Задача 3")
// let e = Number(prompt("Первый катет: "));
// let f = Number(prompt("Второй катет: "));
// console.log(0.5 * e * f)

// console.log("Задача 4")
// let g = Number(prompt("Введите градусы по Фаренгейту: "));
// console.log(`По Цельсию: ${(5/9 *(g-32))}`)

// console.log("Задача 5")
// let h = Number(prompt("Первое число: "));
// let i = Number(prompt("Второе число: "));
// if(h % i == 0){
//     console.log("Делится")
// }
// else{
//     console.log("Не делится")
// }

// console.log("Задача 6")
// let a = Number(prompt("Первое число: "));
// let b = Number(prompt("Второе число: "));
// console.log((2*(a-b)-4*(b-a))/2)    

// console.log("Задача 7")
// let a = Number(prompt("Длина ребра: "));
// console.log(`Объём куба = ${a**3}` + `\tПлощадь поверхности = ${6*a**2}`)

// console.log("Задача 8")
// let a = Number(prompt("Введите число: "));
// if(a === 0){
//     console.log("Ноль")
// }
// else if (a < 0){
//     console.log("Отрицательное")
// }
// else if (a > 0){
//     console.log("Положительное")
// }

// console.log("Задача 9")
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10))
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10))

// console.log("Задача 10")
// let a = Number(prompt("Введите число: "));
// console.log(Math.sqrt(a))

// console.log("Задача 11")
// let a = Number(prompt("Введите число: "));
// console.log(Math.round(a))

// console.log("Задача 12")
// let a = Number(prompt("Введите число: "));
// console.log(Math.abs(a))

// console.log("Задача 13")
// let a = Number(prompt("Введите число: "));
// let b = Number(prompt("Введите степень: "));
// console.log(Math.pow(a,b))

// console.log("Задача 14")
// console.log(Math.random(0, 1))

// console.log("Задача 15")
// let a = Number(prompt("Первое число: "));
// let b = Number(prompt("Второе число: "));
// console.log(`Сумма = ${a + b} Разность = ${a - b} Произведение = ${a * b}`)

// console.log("Задача 16")
// let a = Number(prompt("Введите число: "));
// console.log(Boolean(a % 2 === 0))

// console.log("Задача 17")
// let a = Number(prompt("Введите число: "));
// if(a >= 0 && a <= 18){
//     console.log("Детство")
// }
// else if(a >= 19 && a <= 40){
//     console.log("Молодость")
// }
// else if(a >= 41 && a <= 100){
//     console.log("Зрелость")
// }

// console.log("Задача 18")
// let a = Number(prompt("Введите число: "));
// b = Math.sqrt(a)
// c = b.toFixed(2)
// console.log(c)

// console.log("Задача 19")
// let a = Number(prompt("Первое число: "));
// let b = Number(prompt("Второе число: "));
// if(a % b == 0){
//     console.log(`Делится \t Результат = ${a / b}`)
// }
// else {
//     console.log(`Делится с остатком \t Остаток = ${a % b}`)
// }

// console.log("Задача 20")
// let a = Number(prompt("Введите число: "));
// b = Math.sqrt(a);
// console.log(Math.round(b));

// console.log("Задача 21");
// let a = Number(prompt("Введите время: "));
// let b = Math.floor(a/60);
// console.log(`${b} часа ${a % 60} минут`);

// console.log("Задача 22");
// let a = Number(prompt("Введите возраст собаки: "));
// let b
// if(a > 2){
//     b = 10.5 * 2 + (a-2) * 4;
// }
// else{
//     b = a * 10.5
// }
// console.log(b);

console.log("Задача 23")
let a = Number(prompt("Число a: "));
let b = Number(prompt("Число b: "));
let c = Number(prompt("Число c: "));
let x1
let x2

if((b**2 - 4*a*c) == 0){
    console.log(`Корень = ${-b/(2*a)}`)
}
else if ((b**2 - 4*a*c) > 0){
    x1 = (-b - Math.sqrt(b**2 - 4*a*c))/(2*a)
    x2 = (-b + Math.sqrt(b**2 - 4*a*c))/(2*a)
    console.log(`Корни = ${Math.min(x1, x2)}, ${Math.max(x1,x2)}`)
}
else{
    console.log("Корней нет")
}