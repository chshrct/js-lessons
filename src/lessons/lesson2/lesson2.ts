// console.log("lesson 2");

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Currying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

const sum = (a: number) => (b: number) => a + b;
// console.log(sum(3)(6));

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

const makeCounter = () => {
  let count = 0;
  return () => ++count;
};
const counter = makeCounter();
const counter2 = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter2());
// console.log(counter());

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const makeCount = (start: number = 0) => ({
  _counter: start,
  increase() {
    ++this._counter;
  },
  decrease() {
    --this._counter;
  },
  reset() {
    this._counter = 0;
  },
  set(setValue: number) {
    this._counter = setValue;
  },
});

const count = makeCount(5);
// console.log(count._counter);
count.decrease();
// console.log(count._counter);

count.increase();
// console.log(count._counter);

count.reset();
// console.log(count._counter);

count.set(5);
// console.log(count._counter);

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

const superSum = (count: number) => {
  if (count === 0) return 0;
  if (count === 1) return (first: number) => first;

  let argsArr: number[] = [];
  //@ts-ignore
  return function inner(...rest: number[]) {
    argsArr = [...argsArr, ...rest];
    return argsArr.length < count
      ? inner
      : argsArr.slice(0, count).reduce((sum, el) => sum + el);
  };
};
// //@ts-ignore
// console.log(superSum(0)); //0
// //@ts-ignore
// console.log(superSum(3)(2)(5)(3)); //)10
// //@ts-ignore
// console.log(superSum(3)(2)(5, 3)); //10
// //@ts-ignore
// console.log(superSum(3)(2, 5, 3)); //10
// //@ts-ignore
// console.log(superSum(3)(2, 5)(3)); //10
// //@ts-ignore
// console.log(superSum(3)(2, 5)(3, 9)); //10

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

//@ts-ignore
const customFlat = (arr: any[]) => {
  
    let result:any[] = []

    arr.forEach(
        el=>Array.isArray(el)
        ?result = [...result,...customFlat(el)]
        :result = [...result,el]
    )
    return result

    
};

// console.log(customFlat([1, 2, [3, 4, [5, 6]]]));

// just a plug
const plug = () => {};
export default plug;
