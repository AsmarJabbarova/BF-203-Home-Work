 //1. Sadəcə ölkə adlarının olduğu array-ı return edən funksiya yazın
 const datas=[
        {
        "iso2": "AF",
        "iso3": "AFG",
        "country": "Afghanistan",
        "cities": [
        "Herat",
        "Kabul",
        "Kandahar",
        "Molah",
        "Rana",
        "Shar",
        "Sharif",
        "Wazir Akbar Khan"
        ]
        },
        {
        "iso2": "AL",
        "iso3": "ALB",
        "country": "Albania",
        "cities": [
        "Elbasan",
        "Petran",
        "Pogradec",
        "Shkoder",
        "Tirana",
        "Ura Vajgurore"
        ]
        },
        {
        "iso2": "DZ",
        "iso3": "DZA",
        "country": "Algeria",
        "cities": [
        "Algiers",
        "Annaba",
        "Azazga",
        "Batna City",
        "Blida",
        "Bordj",
        "Bordj Bou Arreridj",
        "Bougara",
        "Cheraga",
        "Chlef",
        "Constantine",
        "Djelfa",
        "Draria",
        "El Tarf",
        "Hussein Dey",
        "Illizi",
        "Jijel",
        "Kouba",
        "Laghouat",
        "Oran",
        "Ouargla",
        "Oued Smar",
        "Relizane",
        "Rouiba",
        "Saida",
        "Souk Ahras",
        "Tamanghasset",
        "Tiaret",
        "Tissemsilt",
        "Tizi",
        "Tizi Ouzou",
        "Tlemcen"
        ]
        },
        {
        "iso2": "AD",
        "iso3": "AND",
        "country": "Andorra",
        "cities": [
        "Andorra la Vella",
        "Canillo",
        "Encamp",
        "Engordany",
        "Escaldes-Engordany",
        "La Massana",
        "Llorts",
        "Ordino",
        "Santa Coloma",
        "Sispony",
        "Soldeu"
        ]
        },
        {
        "iso2": "AO",
        "iso3": "AGO",
        "country": "Angola",
        "cities": [
        "Ambriz",
        "Benguela",
        "Cabinda",
        "Cacole",
        "Camabatela",
        "Cazeta",
        "Huambo",
        "Kuito",
        "Lobito",
        "Luanda",
        "Lubango",
        "Lucapa",
        "Lumeje",
        "Malanje",
        "Menongue",
        "Muxaluando",
        "Namibe",
        "Ondjiva",
        "Piri",
        "Saurimo",
        "Talatona"
        ]
        },
        {
        "iso2": "AI",
        "iso3": "AIA",
        "country": "Anguilla",
        "cities": [
        "The Valley",
        "Blowing Point Village",
        "Sandy Ground Village",
        "Sandy Hill",
        "East End Village",
        "George Hill",
        "Island Harbour",
        "North Hill Village",
        "North Side",
        "South Hill Village",
        "Stoney Ground",
        "Farrington",
        "The Quarter",
        "West End Village"
        ]
        },
    
]
console.log(datas);

// function Country(){
//     const country= datas.map(x=>x.country)
//     return country

// }
// Country()
// console.log("olkelerin siyahisi:",Country());



//3. Ən çox şəhəri olan ölkə adını return edən funksiya yazın

// let country=""
// let cities=0

// function Name() {
//     datas.forEach(x=>{
//         if(x.cities.length>cities){
//             cities=x.cities.length
//             country=x.country
//         }

//     }
// )
//     return country
// }

// Name()
// console.log("en cox seheri olan olke:",Name());









// 4. Ölkə adı ən uzun olan ölkənin şəhərlərini return edən funksiya

// let country=""
// let cities=[]
// function City() {
//     datas.forEach(x=>{
//         if(x.country.length>country){
//             country=x.country
//             cities=x.cities

//         }

//     }

//     )
//     return cities
    
// }
// City()
// console.log("en uzun  adi olan olkenin seherleri",City());


// 5.  Bütün ölkələrin şəhər saylarının olduğu objecti return edən funksiya yazın .Nümunə {"Azerbaijan":70,"Turkey":300}

// function Country() {
//     let obj={
//         country:"",
//         count:0
//     }
//     datas.forEach(x=>{
//         obj.country=x.country
//         obj.count=x.cities.length

//         console.log(obj);
//     })
    
// }
// Country()





















