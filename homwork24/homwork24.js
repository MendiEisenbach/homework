

// // Basic oop


// // 1
// function Phone(brand, model)
// {
//     this.brand = brand;
//     this.model  = model ; 
//     this.ShowDetails = function()
//     {
//         console.log(`Phone: ${this.brand} ${this.model}`);
//     }
// }

// const phone1 = new Phone(`iphone`, 13)
// phone1.ShowDetails()


// // 2
// function Rectangle(width, height)
// {
//     this.width = width;
//     this.height = height; 
//     this.area = function()
//     {
//         console.log(`area: ${this.width * this.height}`);
//     }
// }

// const rectangle1 = new Rectangle(`10`, `5`)
// rectangle1.area()



// // 3
// function BankAccount(owner , balance )
// {
//     this.owner = owner;
//     this.balance = balance; 
//     this.deposit = function(amount)
//     {
//         this.balance += amount;
//     }

//     this.withdraw = function(amount)
//     {
//         if(this.balance - amount > 0)
//         {
//             this.balance -= amount;
//         }
//     }

//     this.checkBalance = function()
//     {
//         console.log(`balance: ${this.balance}`);
//     }
// }

// const mybankAccount = new BankAccount(`jonatan orich`, 5000)
// mybankAccount.deposit(1000)
// mybankAccount.checkBalance()
// mybankAccount.withdraw(2000)
// mybankAccount.checkBalance()



// // 4
// function Animal(name)
// {
//     this.name = name;
//     this.speak = function()
//     {
//        console.log(`${this.name} makes a sound`); 
//     }

// }

// function Dog(name)
// {
//     this.name = name;
//     this.bark = function()
//     {
//        console.log(`${this.name} barks`); 
//     }

// }

// const myAnimal = new Animal(`gimi`)
// const mydog = new Dog(`roky`)
// Object.setPrototypeOf(mydog, myAnimal)

// mydog.bark()
// mydog.speak()



// // 5
// function Vehicle(type)
// {
//     this.type = type;
//     this.describe = function()
//     {
//        console.log(`This is a ${this.type}`); 
//     }

// }

// function Car(brand)
// {
//     this.brand = brand;
//     this.info = function()
//     {
//        console.log(`This is a ${this.type} ${this.brand}`); 
//     }
// }

// const myVehicle = new Vehicle(`car`)
// const mycar = new Car(`BMW`)
// Object.setPrototypeOf(mycar, myVehicle)

// mycar.info()


// // 6
// function Shape()
// {
//     this.area = function()
//     {
//         return 0;
//     }
// }

// function Circle(radius)
// {
//     this.radius = radius;
//     this.area = function()
//     {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// function Square(side)
// {
//     this.side = side;
//     this.area = function()
//     {
//         return this.side * this.side;
//     }
// }


// const myShape = new Shape();
// const myCircle = new Circle(3);
// const mySquare = new Square(4);

// Object.setPrototypeOf(myCircle, myShape);
// Object.setPrototypeOf(mySquare, myShape);

// console.log(myCircle.area());
// console.log(mySquare.area());



// // 7
// class Books{
//     constructor(Author, title)
//     {
//         this.Author = Author;
//         this.title = title;
//         this.info = function()
//         {
//             console.log(`Book Title: ${this.title} By Author: ${this.Author}`);
//         }

//     }
// }

// const book1 = new Books(`J.K. Rowling`, 'Harry Potter',);
// book1.info()


// // 8
// class Person{
//     constructor(name)
//     {
//         this.name = name;
//         this.greet = function()
//         {
//             console.log(`Hello, I'm ${this.name}`);
//         }

//     }
// }

// class Student extends Person
// {
//     constructor(name, school)
//     {
//         super(name);
//         this.school = school; 
//         this.study = function()
//         {
//             console.log(`${this.name} is studying at ${this.school}`);
//         }

//     }
// }

// const noga = new Student(`noga`, `bar-ilan`)
// noga.greet()
// noga.study()



// 9
class Employee
{
#salary;

    constructor(salary)
    {
        this.#salary = salary;

        this.getSalary = function()
        {
            console.log(this.#salary);
        }
        
        this.work = function()
        {
            console.log(`Employee is working`);
        }

    }
}

class Manager extends Employee
{
    constructor(salary)
    {
        super(salary)

        this.work = function()
        {
            console.log(`Manager is managing`);
        }
    }
}

const myEmployee = new Employee(3000);
myEmployee.getSalary()
myEmployee.work()

// console.log(myEmployee.salary)

const myManager = new Manager(7000);
myManager.getSalary()
myManager.work()