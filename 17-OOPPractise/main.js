// // 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

// class Person{
//     constructor(name,age,country){
//         this.name=name;
//         this.age=age;
//         this.country=country;   
//     }
//      PersonDetails(){
//         console.log(`name:${this.name}`);
//         console.log(`age:${this.age}`);
//         console.log(`country:${this.country}`);

//      }
// }

// const person1 = new Person('Ceferli Ayna', 18, 'USA');
// const person2 = new Person('Aliyeva Medine', 20, 'USA');

// console.log(`person-1  Details`);
// person1.PersonDetails();
// console.log(`person-2  Details`);
// person2.PersonDetails();

// // 2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

// class Rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height
//     }
//     calculateArea(){
//         return this.height * this.width;
//     }
//     calculatePerimeter(){
//         return 2 * (this.height + this.width);
//     }
// }

// const rectangle = new Rectangle(5,7);

// const calculatearea = rectangle.calculateArea();
// const calculateperimetire = rectangle.calculatePerimeter();

// console.log(`Rectangle Area: ${calculatearea}`);
// console.log(`Rectangle Perimeter: ${calculateperimetire}`);


// // 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

// class Vehicle {
//     constructor(make, model, year){
//         this.make= make;
//         this.model=model;
//         this.yera=year;
//     }
//     displayDetails(){
//         console.log(`Make ${this.make}`);
//         console.log(`Model ${this.model}`);
//         console.log(`Year ${this.year}`);
//     }
// }
// class Car extends Vehicle{
//     constructor(make, model, yera,door){
//         super(make, model, year);
//         this.door=door;
//     }
//     disoplayDetails(){
//         super.displayDetails();
//         console.log(`door %{this.door}`);

//     }
// }

// const vehicle = new Vehicle("mercedes","s-class",2019);

// console.log("vehicle");
// vehicle.displayDetails();


// const car = new Car ("bmw","f-15",1999, 8);

// console.log("car detals");
// car.disoplayDetails();


// 4. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.