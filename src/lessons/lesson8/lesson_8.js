// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]
console.log('task1', 'f')
// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4

Number.prototype.plus = function (arg) {
	return this + arg
}

Number.prototype.minus = function (arg) {
	return this - arg
}

console.log('task2', (2).plus(3).minus(1))

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'

const strFunc = (a, b, c, d) => b + a + c + a + d
console.log('task3', strFunc('*', '1', 'b', '1c'));

// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

function sumThreeRecursive(tree) {
	if (!Array.isArray(tree.next)) return tree.valueNode
	return tree.next.reduce((acc, node) => acc + sumThreeRecursive(node), tree.valueNode)
}

function sumThreeIterative(three) {
	const que = []
	let sum = 0
	que.push(three)
	while (que.length > 0) {
		let tempNode = que.pop()
		sum = sum + tempNode.valueNode
		if (Array.isArray(tempNode.next)) {
			tempNode.next.forEach(node => que.push(node))
		}
	}
	return sum
}

const tree = {
	valueNode: 3,
	next: [{
		valueNode: 1,
		next: null
	},
	{
		valueNode: 3,
		next: null
	},
	{
		valueNode: 2,
		next: null
	},
	{
		valueNode: 2,
		next: [
			{
				valueNode: 1,
				next: null
			},
			{
				valueNode: 5,
				next: null
			}
		]
	}]
};
console.log('task 4', sumThreeRecursive(tree));
console.log('task 4', sumThreeIterative(tree));


// Task 5
// исправить код, что бы работал правильно

for (let i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log('task 5', i);
	}, 100);
}

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

function Book(name, author) {
	this.name = name;
	this.author = author;
	return this;
}

// function Foo(Book, 'Учебник javascript', 'Петр Сергеев')
//
// var book = Foo(Book, 'js', 'petr');
// console.log(book.name);

function Foo(func, name, author) {
	return new func(name, author)
}
var book = Foo(Book, 'js', 'petr');
console.log('task 6', book.name, book.author);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

function sum(...args) {
	if (args.length === 1) {
		return function (b) {
			return args[0] + b
		}
	} else {
		return args[0] + args[1]
	}
}
console.log('task 7', sum(2, 3));
console.log('task 7', sum(2)(3));

// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8

function sumCar(a) {
	let sum = a
	return function inner(b) {
		if (b) {
			sum = sum + b
			return inner
		}
		else {
			return sum
		}
	}
}
console.log('task 8', sumCar(1)(2)(3)());
console.log('task 8', sumCar(0)(3)(1)(5)());

// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3

function one(arg) {
	if (arg) {
		return 1 + arg
	} else {
		return 1
	}
}
function two(arg) {
	if (arg) {
		return 2 + arg
	} else {
		return 2
	}
}
function seven(arg) {
	if (arg) {
		return 7 + arg
	} else {
		return 7
	}
}
function minus(arg) {
	return -arg
}
function plus(arg) {
	return arg
}
function five(arg) {
	if (arg) {
		return 5 + arg
	} else {
		return 5
	}
}

console.log('task 9', seven(plus(one())));
console.log('task 9', five(minus(two())));

// Task 10
// Реализовать функцию сортировки массива пузырьком

const arr = [5, 21, 36, 23, 27, 86, 58, 53]

function bubbleSort(arr) {
	for (let j = 0; j < arr.length; j++) {
		for (let i = 0; i < arr.length - 1 - j; i++) {
			if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
		}
	}

}

bubbleSort(arr)
console.log('task 10', arr);


// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.

function checkClosedBrackets(string) {
	let tempString = string
	const bracketPairs = ['()', '{}', '[]']
	let isPairFound = 1

	while (isPairFound > 0) {
		isPairFound = 0
		for (let i = 0; i < tempString.length - 1; i++) {
			if (bracketPairs.includes(tempString[i] + tempString[i + 1])) {
				tempString = tempString.slice(0, i) + tempString.slice(i + 2)
				isPairFound++
			}
		}
	}
	return tempString.length === 0 ? 'closed' : 'not closed'
}

function checkClosedBracketsStack(string) {
	const stack = []
	const openBr = ['(', '{', '[']
	const closingBr = [')', '}', ']']

	for (let i = 0; i < string.length; i++) {
		if (openBr.includes(string[i])) { stack.push(string[i]) } else {
			if (stack[stack.length - 1] === openBr[closingBr.indexOf(string[i])]) {
				stack.pop()
			}else{
				return false
			}
		}
	}
	return true
}
let str = "(({{}}{[()]}[[]]{))"
console.log('task11', checkClosedBracketsStack(str));

// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.
let testArr = [1,2,3,4,5,6,7,8,9,0,0,9,8,7,6,5,4,3,2,1,1,3,23,425]

function uniqueItems(arr){
	const obj = arr.reduce((acc,el)=>({...acc,[el]:0}),{})
	const newArr=[]
	for(let key in obj){
		newArr.push(key)
	}
	return newArr
}
console.log('task 12',uniqueItems(testArr));


// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

function doubledArr (arr){
	const newArr = []
	arr.forEach(el=>{
		if(Number.isFinite(el)) newArr.push(el*2)
	})
	return newArr
}
console.log('task 13',doubledArr([1, 2, null, 7, 8, null, 3]));

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
};

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

// Task 21
// Что выведет консоль?

// Promise
// 	.resolve()
// 	.then(() => console.log(1))
// 	.then(() => console.log(2))
// 	.then(() => console.log(3));

// Promise
// 	.resolve()
// 	.then(() => console.log(4))
// 	.then(() => console.log(5))
// 	.then(() => console.log(6));