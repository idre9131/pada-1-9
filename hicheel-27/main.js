// let user = {
//   firstName: "Idrebat",
//   lastName: "Altangerel",
//   age: 15,
//   isStudent: true,
//   hobby: "playing",
// };
// console.log(user.age);

//-----1-----
// let user = {
//   name: "idre",
//   age: 15,
// };
// console.log(user.name);

//-----2-----
// let user = {
//   name: "idre",
//   age: 15,
// };
// user.age = 17;
// console.log(user.age);

//-----3-----
// let user = {
//   name: "idre",
//   age: 15,
// };
// user.city = "ub";
// console.log(user.city);

//-----4-----
// const user = {
//   name: "idre",
//   age: 15,
//   city: "ub",
// };
// delete user.age;
// console.log(user.age);

//-----5-----
// let user = {
//   name: "idre",
//   age: 15,
// };
// console.log("name" in user);

//-----6-----
// let car = {
//   brand: "toyota",
//   year: 2015,
// };
// car.year = 2020;
// console.log(car.year);

//-----7-----
// let student = {
//   name: "nomin",
//   age: 15,
// };
// student.grade = 10;
// console.log("grade" in student);

//-----8-----
// let phone = {
//   brand: "samsung",
//   price: 30000000,
//   color: "black",
// };
// phone.price = 2500000;
// delete phone.color;
// console.log(phone.color);

//-----9-----
// let book = {
//   title: "1984",
//   price: 35000,
// };
// book.author = "george orwell";
// console.log(book.author);

//-----2.1-----
// const user1 = {
//   name: "Bat",
//   age: 25,
//   address: {
//     city: "Ulaanbaatar",
//     district: "Bayanzurkh",
//   },
// };
// console.log(user1.address.city);

//-----2.2-----
// const student1 = {
//   name: "Saraa",
//   scores: {
//     math: 80,
//     english: 90,
//   },
// };
// student1.scores.math = 95;
// console.log(student1.scores.math);

//-----2.3-----
// const car1 = {
//   brand: "Toyota",
//   engine: {
//     size: 2.5,
//     power: 180,
//   },
// };
// car1.engine.type = "hybird";
// console.log(car1.engine.type);

//-----2.4-----
// const users1 = [
//   { name: "Bat", age: 20 },
//   { name: "Saraa", age: 22 },
//   { name: "Anu", age: 19 },
// ];
// console.log(users1[0].name);

//-----2.5-----
// const users2 = [
//   { name: "Bold", age: 24 },
//   { name: "Nomin", age: 21 },
//   { name: "Temuulen", age: 23 },
// ];
// users2[1].age = 25;
// console.log(users2[1].age);

//-----2.6-----
// const products = [
//   { name: "Mouse", price: 50000 },
//   { name: "Keyboard", price: 120000 },
//   { name: "Monitor", price: 500000 },
// ];
// products.forEach((product) => {
//   console.log(product.name);
// });

//-----2.7-----
// const students2 = [
//   { name: "Bat", age: 17 },
//   { name: "Saraa", age: 20 },
//   { name: "Anu", age: 16 },
//   { name: "Bold", age: 22 },
// ];
// const adults = students2.filter((student) => student.age > 18);
// console.log(adults);

let students = [
  { name: "Alice", age: 20, grades: [70, 80, 90] },

  { name: "Bob", age: 22, grades: [60, 65, 70] },

  { name: "Charlie", age: 23, grades: [80, 85, 90] },

  { name: "Dave", age: 21, grades: [50, 60, 55] },
];
console.log(students[2]);
console.log(students[0]);
