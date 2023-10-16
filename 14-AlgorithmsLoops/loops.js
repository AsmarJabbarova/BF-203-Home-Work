// 1. Son rəqəmi 7 olan bütün iki rəqəmli ədədləri çapa verən proqram tərtib edin.
// for (let i = 10; i <= 99; i++) {
//     if (i % 10 == 7) {
//         console.log(i);
//     }
// }


// 2. Rəqəmləri eyni olan bütün iki rəqəmli ədələrin çapa verən proqram tərtib edin.
// for (let i = 10; i <= 99; i++) {
//         if (i % 11==0) {
//            console.log(i);
//         }
//      }


// 3. Verilmiş ədədi rəqəmlərinə ayıran proqram tərtib edin.
//  let n = Number(prompt("please,enter number:"));
//  let digits = [];
//  a = Math.abs(a);
//  while (a>0){
//      let digit = a%10;
//      digits.push(digit);
//      a = Math.floor(a/10);
//  }
//  digits.reverse();
//  console.log(digits);




// 4. Verilmiş ədədin rəqəmlərindən ən böyük olanı təyin edən proqram tərtib edin.  
//  let n = Number(prompt("enter number:"))
//  n=Math.abs(n);
//  let max = 0;
//  while(n>0){
//      let digit = n%10;

//      if(max<digit){
//          max= digit;
//      }
//      n=Math.floor(n/10);
//  }
//  console.log(max);



// 5. Verilmiş ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin. 

//  let n= Number(prompt("please, enter number:"));
//  let digits=[];
//  let sum=0;
//  let product=1;
//  let numericalaverage=1;
//  while(n>0){
//      let digit = n%10;
//      digits.push(digit);
//      n= Math.floor(n/10);
//      sum+=digit;
//      product*=digit;
//      numericalaverage=sum/digits.length;
//  }
//  alert(sum+" "+product+" "+numericalaverage);


// 6. Verilmiş ədədin bütün bölənlərini tapan proqram tərtib edin.
//  let n=  Number(prompt("enter number:"))
//  let divisors = []
//   for (let i=1;i<=n;i++){
//      if (n%i==0){

//           divisors.push(i)
//      }
//   }
//   alert(divisors)

// 7. Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.
//  let n= Number(prompt("Enter number:"))
//   let count =0;
//   for (let i=1;i<=n;i++){
//       if (n%i==0){
//           count++
//       }
//   }
//   alert(count);



// 8. Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.
// let arr=[3,8,2,5,4,10,7,6]

// for (let i = 0; i < arr.length; i++) {
// if(arr[i]%2==1){
    // console.log(i);
// }    
// }



// 9. Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.
// let arr=[3,8,2,5,4,10,7,6]
//  for (let i = 0; i < arr.length; i++) {
//  if(i%2==1){
//    console.log(arr[i])
// }    
//  }


// 10. Verilmiş array-in max elementini çapa verən proqram tərtib edin.
// let arrayList =[3,8,2,5,4,10,7,6] ;
// let max = arrayList[0];
// for (let i = 1; i < arrayList.length; ++i) { 
//   if (arrayList[i] > max) {
//    arrayList[i] > max
// console.log(max);
//   }
// }


// 11. Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
//  let max = arr[0];
//  for (let i=0;i<arr.length;i++){
//      if (arr[i]%2==0){
//          if (max<arr[i]){
//              max=arr[i];
//          }
//      }
//  }
//  console.log(max);




// 12. Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.
// let arrayList = [3,8,2,5,4,10,7,6];
// let min = arrayList[0];
// for (let i = 0; i<arrayList.length; i++) {
//   if (arrayList[i] < min) {
//    arrayList[i] = min
//    console.log(i);
//   }

// }

// 13. Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin

//  let arr=[3,8,2,5,4,10,7,6]
//  let max = arr[0]
//  let max_index=0
//  let min = arr[0]
//  let min_index=0

// for(let i=0;i<arr.length;i++){
//      if (min>arr[i]){
//          min=arr[i]
//          min_index=i
//      }
//      if(max<arr[i]){
//          max=arr[i]
//          max_index=i
//      }
//  }
//  let a = arr[max_index]
//  arr[max_index]=arr[min_index]
//  arr[min_index]=a
//  alert(arr)



