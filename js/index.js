// 1 - masala

// function sumArr(arg) {
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum = sum + arg[i];
//   }
//   return sum;
// }
// console.log([1, 3, 5, 10]);

// 2 - masala

// function maxElement(arg) {
//   return Math.max(...arr);
// }
// const numbers = [10, 5, 20, 8, 15];
// const maxNumber = maxElement(numbers);
// console.log(maxElement + maxNumber);

// 3 - masala

// function minElement(arg) {
//   return Math.min(...arr);
// }
// const numbers = [10, 5, 20, 8, 15];
// const minNumber = maxElement(numbers);
// console.log(minElement - minNumber);

// 4 - masala

// function manfiydanMusbatga(arr) {
//   for (var i = 0; i < arr.length; i++) {
//       if (arr[i] < 0) {
//           arr[i] = Math.abs(arr[i]);
//       }
//   }
//   return arr;
// }
// let testArray = [-3, 5, -7, 10, -2];
// let natija = manfiydanMusbatga(testArray);
// console.log(natija);

// 5 - masala

// function doubleArray(arr) {
//   return arr.map(item => item * 2);
// }
// const myArray = [1, 2, 3, 4, 5];
// const doubledArray = doubleArray(myArray);
// console.log(doubledArray);

// 6 - masala

// function oddNumbersInRange(start, end) {
//   for (let i = start; i <= end; i++) {
//       if (i % 2 === 0) {
//           console.log(i);
//       }
//   }
// }
// oddNumbersInRange(1, 10);

// 7 - masala

// function oddNumbersFromArray(arr) {
//   return arr.filter(num => num % 2 !== 0);
// }
// const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = oddNumbersFromArray(testArray);
// console.log(oddNumbers);

// 8 - masala

// function Tekshir(arr, element) {
//   return arr.includes(element);
// }
// const nums = [1, 2, 3, 4, 5];
// console.log(Tekshir(nums, 3));
// console.log(Tekshir(nums, 10));

// 9 - masala

// function teskariChiqarish(massiv) {
//   return massiv.reverse();
// }
// const testMassiv = [1, 2, 3, 4, 5];
// console.log(teskariChiqarish(testMassiv));

// 10 - masala

// function engKattaQiymatniTop(massiv) {
//   if (massiv.length === 0) {
//     return "Massiv bo'sh";
//   }
//   let engKatta = massiv[0];
//   for (let i = 1; i < massiv.length; i++) {
//     if (massiv[i] > engKatta) {
//       engKatta = massiv[i];
//     }
//   }
//   return engKatta;
// }
// let sonlar = [12, 45, 78, 23, 56, 89, 34];
// let engKattaQiymat = engKattaQiymatniTop(sonlar);
// console.log("Massivdagi eng katta qiymat: " + engKattaQiymat);

// 11 - masala

// function oshirish(arr) {
//   return arr.map(item => item + 1);
// }
// const massiv = [1, 2, 3, 4, 5];
// const natija = oshirish(massiv);
// console.log(natija);

// 12 - masala

// function findIndex(arr, element) {
//   return arr.indexOf(element);
// }
// const array = [10, 20, 30, 40, 50];
// const elementToFind = 30;
// const index = findIndex(array, elementToFind);
// console.log("Elementning indeksi: " + index);

// 13 - masala

// function element(arg) {
//   let counter = 0;
//   for (let i = 0; i < arg.length; i++) {
//     if (arr[i] === element);
//     counter = counter + 1;
//   }
//   return counter
// }
// console.log(counter);

// 14 - masala

// function musbatSonlarMassivi(massiv) {
//   let yangiMassiv = [];
//   for (let i = 0; i < massiv.length; i++) {
//     if (massiv[i] > 0) {
//       yangiMassiv.push(massiv[i]);
//     }
//   }
//   return yangiMassiv;
// }

// let massiv = [1, -2, 3, -4, 5, 0, 6];
// let musbatMassiv = musbatSonlarMassivi(massiv);
// console.log($`{musbatMassiv}`);

// 15 - masala

// function manfiySonlarMassivi(massiv) {
//   let yangiMassiv = [];
//   for (let i = 0; i < massiv.length; i++) {
//     if (massiv[i] < 0) {
//       yangiMassiv.push(massiv[i]);
//     }
//   }
//   return yangiMassiv;
// }
// let massiv = [1, -2, 3, -4, 5, 0, -6];
// let manfiyMassiv = manfiySonlarMassivi(massiv);
// console.log(` ${manfiyMassiv}`);

// 16 - masala

// function elementlarKvadrati(massiv) {
//   let kvadratlarMassivi = [];
//   for (let i = 0; i < massiv.length; i++) {
//     kvadratlarMassivi.push(massiv[i] * massiv[i]);
//   }
//   return kvadratlarMassivi;
// }
// let massiv = [1, 2, 3, 4, 5];
// let kvadratlar = elementlarKvadrati(massiv);
// console.log(`${kvadratlar}`);