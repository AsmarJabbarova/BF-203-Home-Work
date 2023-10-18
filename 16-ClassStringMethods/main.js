// // 1. Verilmiş string-dəki bütün _ (underscore-ları) -(dash) ilə əvəz edin.
// let str = "Silk_way"
// console.log(str.replaceAll("_","-"))

// // 2. Bir function yazın. parametr olaraq bir string qəbul edir və həmin string-in bütün simvollarını kiçik hərflərlə əvəz edib return edin. (Arrow function yazmalısınız)


// const toLower=(str)=>(
//     str.toLowerCase()

// )
    

// console.log(toLower("HBGv"));

// // 3. Bir function yazın. parametr olaraq bir string qəbul edir. Function-ın içərisində string-in əvvəl və sonundakı boşluq-ları silməli və geri qalan bütün simvolları bir array element-i kimi array-ə çevirib onu return etməlisiniz. Məsələn ("  hey  ") input olaraq daxil olunsa output =>['h','e','y'] olmalıdır. (Anonym function yazmalısınız)

// const toLetter = function(str){
//     return str.trim().split( '')
    

// }
// console.log(toLetter("    Aygun   "));


// // 4. Bir function yazın. ("Robin Singh from USA")) input olaraq belə bir string qəbul edərsə, output-a "robin-singh-from-usa" string-ini verməlidir. Arrow function yazmalısınız.

// const lowerCases=(str)=>(
//     str.toLowerCase().trim().replaceAll(" ","-")

// )
// console.log(lowerCases("   Robin Singh from USA"));


// // 5. Bir function yazın, input olaraq ('js string exercises') qəbul edərsə output-da "Js string exercises" string-ini qaytarmalıdır. Capitalize etməlidir. Regular function yazmalısınız.

// function capitalize(str) {

//     return str[0].toUpperCase()+str.slice(1)
// }
// console.log(capitalize( 'js string exercises'));

// // 6. Daxil edilmiş string-dəki böyük hərflərin sayını return edən bir anonym function yazın.

// const countUpperLetter=function (str1) {
//     let counter =0
//     let str=str1.trim()

//     for(let i=0;i<str.length; i++){
//        if(str[i]==str[i].toUpperCase()){
//         if(str[i]==" ") continue
//         counter++
        
//        }
       
//     }
//     return counter
    
// }
// console.log(countUpperLetter(' aHHHam')); 


// // 7. Bir function yazın, parametr olaraq bir söz və bir cümlə qəbul edir. Əgər həmin söz cümlədə tapılarsa bir object return edir. Object-də isFound və index dəyərləri olur. Əgər tapılarsa həmin söz isFound true, index isə həmin sözün indeksi olur. Əgər tapılmasa isə isFound false, index isə -1 olmalıdır.

// function objs (word,sentence) {
//     let obj={
//         isFound:false,
//         index:-1
//     }
//     word=word.toLowerCase()
//     sentence=sentence.trim().toLowerCase()
//     if(sentence.includes(word)){
//         obj.isFound=true
//         obj.index=sentence.indexOf(word)

//     }
// return obj

    
// }
// console.log(objs("soz","Soz verirem"));

// // 8. Bir Human Function Constructor yaradırsınız. Human-ın name, surname, birthYear, birthCity propert-ləri və getFullName adında bir metodu var, hansı ki fullname-ini qaytarmalıdır (name və surname-i). Bu function constructor-dan istifadə edib 4-5 human yaradın və bir people array-i yaradıb ora yığın. Daha sonra searchHuman adında bir function yazın və bu function sizdən bir search string-i və bir dənə isə haradan axtaracağı array-i qəbul edir. search string-inin dəyərini prompt-dan götürəcəksiniz. Search fullname-ə görə olmalıdır. Yəni mən yalnız name-i yazıb və ya yalnız surname-i yazıb axtarsan ona uyğun data-larımı qaytarmalıdır function. Eyni zaman-da həm name həm də surname-i yazıb axtarsam yenə tapıb qaytarmalıdır. searchByFullName function-ı yaratmalısınız və geriyə kimləri tapdısa, həmin human object-lərini bir array-ə yığıb onu return etməlisiniz.


// function Human(name, surname, birthYear, birthCity) {
//     this.name = name;
//     this.surname = surname;
//     this.birthCity = birthCity;
//     this.birthYear = birthYear;
//     this.getFullName = function () {
//       return this.name + " " + this.surname;
//     };
//   }
//   const esmer = new Human("esmer", "jabbarova", 1980, "Chicago");
//   const siya = new Human("siya", "jabbarova", 1980, "Chicago");
//   const aygun = new Human("aygun", "jabbarova", 1984, "New York");
//   const ceyhun = new Human("ceyhun", "jabbarov", 1999, "Chicago");
//   let people = [];
//   people.push(esmer,siya, aygun, ceyhun);
  
//   let searchInput = prompt("search for human: ");
  
//   function searchHuman(search, arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       let fullName = arr[i].getFullName();
//       if (
//         arr[i].name.toLowerCase().trim().includes(searchInput.toLowerCase().trim()) ||
//         arr[i].surname
//           .toLowerCase()
//           .trim()
//           .includes(searchInput.toLowerCase().trim()) ||
//         fullName.toLowerCase().trim().includes(searchInput.toLowerCase().trim())
//       ) {
//         result.push(arr[i]);
//       }
//     }
//     if (result.length) {
//       return result;
//     } else {
//       return alert(`not found ${searchInput}`);
//     }
//   }
  
//   let resultArr = searchHuman(searchInput, people);
//   console.log(resultArr);