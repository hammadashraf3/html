let amount = document.getElementById("amount");
let rupees = document.getElementById("rupees");
// let btn = document.getElementById("btn")

function Convert(event) {
  event.preventDefault();
  if (amount.value == "") {
    alert("Enter Amount");
    return;
  }
  let pkr = 76.92;
  let Qtr = parseFloat(amount.value);
  let result = Qtr * pkr;
  rupees.innerText = result;
}

  
  
function Usd(event){
  event.preventDefault();
  if (amount.value == "") {
    alert("Enter Amount");
    return;
  }
  let pkr = 279.99;
  let usd = parseFloat(amount.value);
  let final = usd * pkr;
  rupees.innerText = final;
}  
   
  

