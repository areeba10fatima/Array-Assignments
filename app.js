// Q:1 Create an array fruites that contain the following string elements:"apple","banana","mango","orange".
// let fruitsNames:string[]=["apple","banana","mango","orange"];
// console.log(fruitsNames);
// Q:2 Declare an array named numbers that cancontain only numbers elements and initialize it with the value 10,20,30,and 40
// let numbers:number[]=[10,20,30,40];
// console.log(numbers);
// Q:3 Access the third elements of the fruits array and assign it to a variable named thirdFruit
// let fruitsName:string[]=["apple","banana","mango","orange"];
// let thirdFruit = fruitsName[2];
// console.log (thirdFruit);
// Q:4 change the second elements of the number array to 25
// let changeNumber:number[]=[10,20,30,40];
// changeNumber [1] = 25;
// console.log(changeNumber);
// Q:5 Add elements "grapes" to the end of the fruits array using the method
// let addingFruits:string[]=["apple","banana","mango","orange"];
// addingFruits.push("grapes");
// console.log(addingFruits);
// Q:6 Remove the last element from the fruits array using the method and assign it to a variable named lastFruit
// let lastFruits:string[]=["apple","banana","mango","orange"];
// lastFruits.pop();
// console.log(lastFruits);
; // Q:7 remove the first element from the fruits array using a method and assign it to a variable named firstFruit
// let firstFruit:string[]=["apple","banana","mango","orange"];
// firstFruit.shift();
// console.log(firstFruit);
// Q:8 Add the elements "kiwi" to the begining of the fruits array using the method
// let fruits:string[]=["apple","banana","mango","orange"];
// fruits.unshift("kiwi");
// console.log(fruits);
// Q:9  remove 2 elements from the fruits array starting from index 1 using method
// let fruit:string[]=["apple","banana","mango","orange","kiwi","graps"];
// fruit.splice(1,2);
// console.log(fruit);
//Q:10 insert the elements "pineapple" and "pear" at index 2 of the fruits array using method
// let fruitss :string[]=["apple","banana","mango","orange","kiwi","graps"];
// fruitss.splice(2,0, "pineapple","pear");
// console.log(fruitss);
//Q:11 create a new array named citrusFruits that contains the first two elements of the fruits array using the method
// let frui :string[]=["apple","banana","mango","orange","kiwi","graps"];
// let citrusFruits:string[]= frui.slice(0,2);
// console.log(citrusFruits);
//Q:12 create a new array named lastTwoFruits that contains the last two elements of the fruits array using method
var frt = ["apple", "banana", "mango", "orange", "kiwi", "graps"];
var lastTwoFruits = frt.slice(-2);
console.log(lastTwoFruits);
