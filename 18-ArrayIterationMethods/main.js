// // 1. Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.

// const numbers = [1,2,3,4,5]
// const newnumber = numbers.map(KvadratAl);
// function KvadratAl (elem) {
//     return elem*elem;
// }
// console.log(newnumber);




// // 2. Array-in müsbət elementlərinin cəmini tapan funksiya yazın. Əgər array-in bütün elementləri mənfidirsə geriyə 0 qaytarsın.
// function pozitifCem(array) {
//     let sum= 0;
    
//     array.map(function(elem) {
//       if (elem > 0) {
//         sum += elem;
//       }
//       else{
//         sum == 0
//       }
//     });
    
//     return sum ;
//   }
//   let arr1 = [1,3,5,-7]
//   console.log(pozitifCem(arr1));


// 3. Array-in median və ədədi ortasını obyekt tərkibində return edən funksiya yazın. Median- ən kiçik element ilə ən böyük elementin ədədi ortasıdır.




// 4. Hər hansı bir cümlədə istənilən  böyük hərflə olan simvolları birləşdirib qaytaran funksiya yazın.

// Məsələn

// Lorem impsum dolar sit - Lids






// // 5. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn qurban-q4n, stəkan-s4n, javascript-j8t

// function ixtisarCumle(cumle) {
//     const sozler = cumle.split(' ');
  
//     const yeniCumle = sozler.map(function(soz) {
//       if (soz.length <= 4) {
//         return soz;
//       } else {
//         return soz[0] + (soz.length - 2) + soz[soz.length - 1];
//       }
//     });
  
//     return yeniCumle.join(' ');
//   }
//   const cumle = "Derler coxxx cetindi";
//   const yeniCumle = ixtisarCumle(cumle);
//   console.log(yeniCumle);