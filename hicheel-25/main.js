// let array = [1, 2, 3, 4, 5];
// array.forEach((item) => console.log(item * 10));

// let newArray = array.map((item) => item * 2);
// console.log(newArray);

//-----1-----
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.map((item) => item * 2);
// console.log(newNumbers);

//-----2-----
// let numbers = [2, 4, 6, 8];
// let newNumbers = numbers.map((item) => item ** 2);
// console.log(newNumbers);

//-----3-----
// let names = ["bat", "saraa", "anu", "bold"];
// let newNames = names.map((item) => item.toUpperCase());
// console.log(newNames);

//-----4-----
// let numbers = [5, 10, 15, 20];
// let newNumbers = numbers.map((item) => item + 10);
// console.log(newNumbers);

//-----5-----
// let words = ["javascript", "array", "map", "coding"];
// let newWords = words.map((item) => item.length);
// console.log(newWords);

//-----6-----
// let numbers = [10, 20, 30, 40, 50];
// numbers.forEach((item) => console.log(item));

//-----7-----
// let numbers = [5, 10, 15, 20];
// let sum = 0;
// numbers.forEach((item) => (sum += item));
// console.log(sum);

//-----8-----
// const numbers = [3, 6, 9, 12, 15, 18];
// numbers.forEach((item) => {
//   if (item % 2 === 0) console.log(item);
// });

//-----9-----
// let numbers = [14, 52, 8, 91, 36, 27];
// let max = 0;
// numbers.forEach((num) => {
//   if (num > max) max = num;
// });
// console.log(max);

//--
// let number = [5, 12, 8, 130, 44];
// let too = number.find((num) => num > 100);
// console.log(too);

//-----2.1-----
// let numbers = [4, 12, 7, 25, 10, 18];
// let too = numbers.filter((item) => item > 10);
// console.log(too);

//-----2.2-----
// let numbers = [3, 8, 11, 14, 20, 25, 32];
// let too = numbers.filter((item) => item % 2 === 0);
// console.log(too);

//-----2.3-----
// let words = ["apple", "banana", "cat", "javascript", "book"];
// let ug = words.filter((word) => word.length > 5);
// console.log(ug);

//-----2.4-----
// let numbers = [5, 13, 22, 8, 35, 40];
// let too = numbers.find((item) => item > 20);
// console.log(too);

//-----2.5-----
// let names = ["bat", "saraa", "munkh", "maral", "anu"];
// let ner = names.find((item) => item 0);
// console.log(ner);

//-----2.6-----
// let numbers = [5, 12, 8, 20, 3];
// let too = numbers.every((item) => item % 2 === 0);
// console.log(too);

//-----2.7-----
// let words = ["apple", "book", "array", "code"];
// let ug = words.every((item) => words.length > 3);
// console.log(ug);

//-----2.8-----
// let numbers = [4, 8, -3, 12, 20];
// let too = numbers.some((item) => item < 0);
// console.log(too);

//-----2.9-----
// let words = ["cat", "programming", "book", "javascript"];
// let ug = words.some((item) => words.length < 10);
// console.log(ug);

//-----2.10-----
let number = [5, 18, 25, 60, 12, 45, 80];
let too = number.filter((item) => item > 15);
console.log(too);
let numbers = [18, 25, 60, 45, 80];
let toonuud = numbers.some((item) => item < 50);
console.log(toonuud);
