let number = document.getElementById("number")
let score = 0;
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")

plus.addEventListener('click', () =>{
   score++
   number.innerHTML = score;
});
minus.addEventListener('click', () =>{
   score--
   number.innerHTML = score;
});
