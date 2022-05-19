// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование

function Animal (this: any, name='Animal') {
    this.name=name
}
Animal.prototype.walk = function(){
    console.log(`${this.name} walks`);
}
Animal.prototype.eat = function(){
    console.log(`${this.name} eats`);
}
Animal.prototype.sleep = function(){
    console.log(`${this.name} sleeps`);
}

const animal = new (Animal as any)()

console.log('lesson7 func');
animal.walk()
animal.eat()
animal.sleep()

function Monkey (this: any, name='Monkey') {
    this.name=name
}
Monkey.prototype.roar = function(){
    console.log(`${this.name} roars`);
}
Monkey.prototype.climb = function(){
    console.log(`${this.name} climb`);
}
Monkey.prototype.__proto__=Animal.prototype
const monkey = new (Monkey as any)()
monkey.climb()
monkey.roar()
monkey.eat()

console.log(monkey.__proto__===Monkey.prototype);
console.log(Monkey.prototype.__proto__===Animal.prototype);


// Task 05
// Используя метод Apply реализовать свой собственный метод bind
const vasya = {
    name:'Vasya'
}

function hello(){
    //@ts-ignore
    console.log(`${this.name} says Hello`);
    
}
//@ts-ignore
hello.bind(vasya)()
//@ts-ignore
Function.prototype.customBind = function(context){
    return this.apply(context)
}
//@ts-ignore
hello.customBind(vasya)


// just a plug
export default () => {};