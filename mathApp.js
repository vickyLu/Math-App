$(document).ready(function(){
	
// function add(first, second){
// return first + second


// var numA = Math.floor(Math.random()*6);
// var numB = Math.floor(Math.random()*6);
// var answer = [1, 2, 3, 4, 5, 6, 7 ,8 , 9, 10];
// console.log("numA: " + numA);
// console.log("numB: " + numB);
// if((numA + numB) === answer){
//   alert('yae you got it')
//   //add points to the correct answer
// }

var numA = 2;
var numB = 3;

var sumA = 1;
var sumB = 5;
var sumC = 8

var printBox1 = "<span class='box1'>" + numA + "+"  + numB + "</span>";

var printSumBoxes = "<span class='sum1'>" + sumA + "</span>" + 
	"<span class='sum2'>" + sumB + "</span>" +
	"<span class='sum3'>" + sumC + "</span>"; 

$('.questionBox').append(printBox1);
$('.sumBox').append(printSumBoxes);

$('.sum2').on('click', function(){

	alert("You got the answer right!");
});


$('.sum1').on('click', function(){
	alert("Opps, sorry try again");
});



//}
});