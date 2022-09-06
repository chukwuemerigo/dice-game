
var scores , roundscore , activeplayers, dice;

scores = [0 , 0]
roundscore = 0;
activeplayers = 1;
dice = Math.floor(Math.random()*6) + 1;

document.querySelector('.player-1').textContent = '0';
document.querySelector('.player-2').textContent = '0';
document.querySelector('.total-1').textContent = '0';
document.querySelector('.total-2').textContent = '0';


document.querySelector(".roll").addEventListener('click', function(){
  dice = Math.floor(Math.random()*6) + 1;
  var  rollDOM = document.querySelector('.dice');
  rollDOM.style.display = "block";
  rollDOM.src='dice-'+ dice + ".png"; 

  if(dice !== 1){
    roundscore += dice;
    document.querySelector('.player-'+ activeplayers).textContent = roundscore;
  }else{
    nextPlayer();
  }
});
document.querySelector("#hold").addEventListener('click', function(){
  scores[activeplayers] = scores[activeplayers] + roundscore;
  document.querySelector('.total-' + activeplayers).textContent = scores[activeplayers];
  if(scores[activeplayers] >= 20 ){
    document.querySelector('.winner-'+ activeplayers).textContent = "winner"

  }
  nextPlayer();
});


function nextPlayer(){
  activeplayers === 1 ? activeplayers=2:activeplayers = 1;
  roundscore = 0;
}
















// //document.querySelector('.perscore').textContent = dice;
// // document.querySelector('.perscore').innerHTML = dice;

// var z = document.querySelector(".perscore").textContent;
// console.log(z)




//document.querySelector('.perscore').innerHTML = c


//   y = 3
//   z = 7
//  var c = (y + z)
//  console.log(c)

//  document.querySelector('.perscore').innerHTML = c

//   var cars =[ 123,'bens', 'toyota', 'honda', 'rangerover']
//    for(var i = cars.length -1; i >= 0; i--){
//     console.log(cars[i])
//    }






















/// // cars: ['bens', 'toyota', 'honda', 'rangerover'],
// // for(var i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// var  i = 0

// while(i < car.length){
//     console.log(car[i]);
//     i++
// }
// // cars: ['bens', 'toyota', 'honda', 'rangerover'],
// // for(var i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }




// for(var i = 0; i < 10; i++){
//     console.log(i);
// }


























// var emy = {
//     name:'chiemerie',
//     school:'unn',
//     country:'nigeria',
//     cars: ['bens', 'toyota', 'honda', 'rangerover'],
//     birthYear: 1998,
//     age : function(){
//         this.age = 2022 - this.birthYear;
//     }
// };
// emy.age();
// console.log(emy);
// emy.cars.pop();



















// var emy = {
//     name:'chiemerie',
//     school:'unn',
//     country:'nigeria',
//     cars: ['bens', 'toyota', 'honda', 'rangerover']
// }
// console.log(emy.name);
// console.log(emy.cars[2]);
// var x = 'school';
// console.log(emy.school)
// emy.country= 'ghana'
// console.log(emy)
// emy['ismarried'] = true;
// console.log(emy)


// var emerie = new Object();
// emerie.name = "chika";
// emerie.school = 'abujauni';
// console.log(emerie);








// var names = [ "hon", "god", 12];
// names.push("amara");
// console.log(names);
// console.log(names[2])
// console.log(names.indexOf("hon"))













// var whatDoyouDo = function(job, firstname){
// switch(job){
//     case "teacher":
//         return firstname + "is a good teacher";
//     case "driver":
//         return firstname + "is a good driver";
//     case "doctor":
//         return firstname + "is a good doctor";

// }
// }
// console.log(whatDoyouDo('teacher',  'chiemerie'))























// function priceDifference(price){
//     return 1800 - price;
// }
// var changeinPrice1 = priceDifference(2200);
// var changeinPrice2 = priceDifference(2800);
// var changeinPrice3 = priceDifference(200);
// var changeinPrice4 = priceDifference(500);
// var changeinPrice5 = priceDifference(200);
// console.log(changeinPrice1,changeinPrice2,changeinPrice3,changeinPrice4,changeinPrice5)

// function yealyIncrease( perIncrease){
//     var increase = priceDifference(perIncrease);
//     var yearperIncrease = 1800 + increase;
//     console.log(yearperIncrease + "too big");

// }
// yealyIncrease(200)
// yealyIncrease(400)
// yealyIncrease(600)
// yealyIncrease(800)











// function calculateAge(birthday){
//     return 2018 - birthday;
// }
// var chidera = calculateAge (2000);
// var chiderar = calculateAge (1990);
// var chiderl = calculateAge (1999);
// console.log(chidera, chiderar, chiderl)


// function retirementAge(year){
//     var age = calculateAge(year);
//     var retirement = 89- age;
//     if(retirement > 0 ){
//         console.log(retirement + "is not  retired") 
//     }else{
//         console.log(retirement + "is retired") 

//     }
    
// }
// retirementAge(2000);
// retirementAge(1900);


// // code for switch and case and there can be a situation where we have more than one case
// // // var motor = "motor"
// // var carname = "benz"
// switch (carname){
//     case "benz":
//     console.log("  benx is the best car on earth");
//     break;
//
