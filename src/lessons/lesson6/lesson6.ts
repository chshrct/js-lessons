console.log("Lesson 6");

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

class Student {
  constructor(
    public name: string,
    public surname: string,
    public group: number,
    public performance: number[]
  ) {}
  getAveragePerformance() {
    return (
      this.performance.reduce((acc, el) => acc + el) / this.performance.length
    );
  }
  getSurnameAndGroup() {
    return `${this.surname} ${this.group}`;
  }
}

const studentGroup = [
  new Student("Egor", "Kukusha", 233, [1, 2, 3, 3, 5]),
  new Student("Artem", "Topol", 234, [4, 3, 3, 3, 5]),
  new Student("Jora", "Bereza", 233, [2, 5, 5, 3, 5]),
  new Student("Vadim", "Asip", 234, [1, 2, 3, 4, 5]),
  new Student("Andrey", "ASDdsdsd", 236, [4, 5, 5, 5, 4]),
  new Student("Vika", "Asdasdasdasd", 233, [1, 2, 3, 3, 2]),
  new Student("Anna", "Adasdasdasd", 235, [1, 2, 4, 3, 4]),
  new Student("Nastya", "Asdasdasdads", 235, [1, 4, 3, 5, 4]),
  new Student("Semen", "Addddsdssds", 236, [5, 4, 3, 3, 2]),
  new Student("Alexandr", "Adsdffffdss", 233, [1, 2, 5, 3, 5]),
];
console.log(
  studentGroup.sort(
    (a, b) => a.getAveragePerformance() - b.getAveragePerformance()
  )
);
studentGroup.forEach((el) => {
  if (el.performance.every((el) => el >= 4))
    console.log(el.getSurnameAndGroup());
});

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

class Time {
  constructor(private date: Date) {}

  public set time(time: string) {
    let arrTime = time.split(":");
    this.date.setHours(+arrTime[0]);
    this.date.setMinutes(+arrTime[1]);
    this.date.setSeconds(+arrTime[2]);
  }
  public get time() {
    return this.date.toLocaleTimeString();
  }

  public set hours(h: number) {
    if (h >= 0 && h <= 23) this.date.setHours(h);
  }
  public set minutes(m: number) {
    if (m >= 0 && m <= 59) this.date.setMinutes(m);
  }
  public set seconds(s: number) {
    if (s >= 0 && s <= 59) this.date.setSeconds(s);
  }
}

let z = new Time(new Date());
console.log(z.time);
z.time = "23:12:01";
console.log(z.time);
z.hours = 13;
z.minutes = 26;
z.seconds = 12;
console.log(z.time);

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

class Customers {
  constructor(
    private nameV: string,
    private surnameV: string,
    private locationV: string,
    private cardV: string
  ) {}

  public get name(): string {
    return this.nameV;
  }
  
  public set name(n : string) {
    this.nameV = n;
  }
  
  public get surname(): string {
    return this.surnameV;
  }
  
  public set surname(s : string) {
    this.surnameV = s;
  }
  
  public get location(): string {
    return this.locationV;
  }
  
  public set location(l : string) {
    this.locationV = l;
  }
  
  public get card(): string {
    return this.cardV;
  }
  
  public set card(c : string) {
    this.cardV = c;
  }
  
  public get cardInfo(){
    return `name:${this.name} surname:${this.surname} location: ${this.location} cardNumber: ${this.card}`
  }
}

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.


class Car{
  constructor(
    protected brand:string,
    protected engine:number,
    protected power:number,
  ){}
    public get car(){
      return `brand is ${this.brand}, engine has ${this.engine} steams, horse power is ${this.power}`
    }
}

class Track extends Car{
  constructor(protected brand:string,
    protected engine:number,
    protected power:number,
    protected weightLiftPower:number){
    super(brand,engine,power)
  }
  public set newBrand(nB:string){
    this.brand=nB
  }
  public get weight(){
    return this.weightLiftPower
  }
  public set weight(w:number){
    this.weightLiftPower=w
  }
}

const heavy = new Track('MotorTrack',6,100500,99999)
console.log(heavy.car);
heavy.weight = 1
console.log(heavy.weight);




// just a plug
export default () => {};
