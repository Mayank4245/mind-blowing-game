alert("Rules : 1. You may try number with minimum 2 number (0-9) with one operator (+ , - , *)")
alert("Rules : 2. Press (=) to evalute the value.")
alert("Rules : 3. (0-9) random value is assign to all 10 buttons. so first identify then match the upper value in minimum chance by applying best strategy")
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandomNumber(0, 100);
document.getElementById('first_input').value = num;
let num1 , num2 , num3 , num4 , num5 , num6 , num7 , num8 , num9 , num10;

num1 = getRandomNumber(0, 9);
document.getElementById('zero').value = num1;

num2 = getRandomNumber(0, 9);
while (num2 === num1) {
  num2 = getRandomNumber(0, 9);
}
document.getElementById('one').value = num2;

num3 = getRandomNumber(0, 9);
while (num3 === num1 || num3 === num2) {
  num3 = getRandomNumber(0, 9);
}
document.getElementById('two').value = num3;

num4 = getRandomNumber(0, 9);
while (num4 === num1 || num4 === num2 || num4 === num3) {
  num4 = getRandomNumber(0, 9);
}
document.getElementById('three').value = num4;
num5 = getRandomNumber(0, 9);
while (num5 === num1 || num5 === num2 || num5 === num3 || num5 === num4) {
  num5 = getRandomNumber(0, 9);
}
document.getElementById('four').value = num5;

num6 = getRandomNumber(0, 9);
while (num6 === num1 || num6 === num2 || num6 === num3 || num6 === num4 || num6 === num5) {
  num6 = getRandomNumber(0, 9);
}
document.getElementById('five').value = num6;

num7 = getRandomNumber(0, 9);
while (num7 === num1 || num7 === num2 || num7 === num3 || num7 === num4 || num7 === num5 || num7 == num6) {
  num7 = getRandomNumber(0, 9);
}
document.getElementById('six').value = num7;

num8 = getRandomNumber(0, 9);
while (num8 === num1 || num8 === num2 || num8 === num3 || num8 === num4 || num8 === num5 || num8 == num6 || num8 == num7) {
  num8 = getRandomNumber(0, 9);
}
document.getElementById('seven').value = num8;

num9 = getRandomNumber(0, 9);
while (num9 === num1 || num9 === num2 || num9 === num3 || num9 === num4 || num9 === num5 || num9 == num6 || num9 == num7 || num9 == num8) {
  num9 = getRandomNumber(0, 9);
}
document.getElementById('eight').value = num9;

num10 = getRandomNumber(0, 9);
while (num10 === num1 || num10 === num2 || num10 === num3 || num10 === num4 || num10 === num5 || num10 == num6 || num10 == num7 || num10 == num8 || num10 == num9) {
  num10 = getRandomNumber(0, 9);
}
document.getElementById('nine').value = num10;


let string = "";
let string1 = '';
let count = 0;
let p = num;
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == 'C'){
            string = '';
            document.getElementById('sec_input').value = string;
            string1 = ''
          }else if (e.target.innerHTML == '←'){
            string = string.slice(0, -1);
            string1 = string1.slice(0, -1);
            document.getElementById('sec_input').value = string;
        }else if(e.target.innerHTML == '='){
            if (string1.length >= 3){
              if(string1[1] == '+' || string1[1] == '-' || string1[1] == '*'){
                let string2 = eval(string1);
                document.getElementById('sec_input').value = string2;
                if (p == string2){
                  alert("Congratulations....!! You Enter Correct Expression. Pls refresh the page to play this game again.")
                  string = ''
                  document.getElementById('sec_input').value = string;
                  document.querySelector("#first_input").style.backgroundColor = "rgb(51, 247, 51)";
                  document.querySelector("#third_input").style.backgroundColor = "rgb(51, 247, 51)";
                  document.querySelector("#sec_input").style.backgroundColor = "black";
                }
                string = ''
                string1 = ''
                string2 = ''
              }else if(string[2] == '+' || string1[2] == '-' || string1[2] == '*'){
                let string2 = eval(string1);
                document.getElementById('sec_input').value = string2;
                if (p == string2){
                  alert("Congratulations....!! You Enter Correct Expression. Pls refresh the page to play this game again.")
                  string = ''
                  document.getElementById('sec_input').value = string;
                  document.querySelector("#first_input").style.backgroundColor = "rgb(51, 247, 51)";
                  document.querySelector("#third_input").style.backgroundColor = "rgb(51, 247, 51)";
                  document.querySelector("#sec_input").style.backgroundColor = "black";
                }
                string = ''
                string1 = ''
                string2 = ''
              }else{
                alert("Pls Check number with + , - , * operator.")
                string = ''
                document.getElementById('sec_input').value = string;
                
              }
            }else{
              alert("Pls Check number with + , - , * operator.")
              string = ''
              document.getElementById('sec_input').value = string;
              string1 = ''
            }
            count = count + 1;
            document.getElementById('third_input').value = `Chances : ${count}`
            
            
            
        }
        else{
            string = string + e.target.innerHTML;
            string1 = string1 + e.target.value;
            document.getElementById('sec_input').value = string;

        }
    })
})
