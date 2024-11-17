import 'style.css'
  
const currencyConverter = document.getElementById('currency_converter');
const baseCurrencyInput = document.getElementById('base_currency_input');
const baseCurrency = document.getElementById('currency');
const resultContainer = document.getElementById('result');
  
currencyConverter.addEventListener('submit', (e) => {
 e.preventDefault();
  
 fetch(`http://localhost:5000/?` + new URLSearchParams({ 'base_currency_input': baseCurrencyInput.value, 'currency': baseCurrency.value }))
   .then(response => response.json())
   .then(data => {
     var result = '<div class="space-y-1 px-5 py-3 border-2 rounded-md">';
     for (let entry of data) {
       result += `<div class="flex items-baseline justify-between"><span class="font-medium">${entry.code}:</span><span>${entry.value}</span></div>`;
     }
     resultContainer.innerHTML = result;
   });
});

divBase = document.getElementById("DivBase")
divConv = document.getElementById("DivConv")
divCant = document.getElementById("DivCant")
divApi = document.getElementById("DivAkey")

function Value() {
  print(divBase)
  console.log(divBase.value)
}

//const canvas = document.querySelector("InputContainer")

//canvas.width = innerWidth
//canvas.height = innerHeight

//Inputs.width = innerWidth
//Inputs.height = innerHeight

//ff = document.getElementById("ff");
//ca1 = document.getElementById("ca1");
//ca2 = document.getElementById("ca2");
//av = document.getElementById("av");

/* function check() {
    //if (document.getElementById("ff").checked == true)
    if (ff.checked == true) {
        ca1.checked = false
        ca2.checked = false
        av.checked = false
    } else if (ca1.checked == true) {
        ff.checked = false
        ca2.checked = false
        av.checked = false
    } else if (ca2.checked == true) {
        ff.checked = false
        ca1.checked = false
        av.checked = false
    }
    
    //if (document.getElementById("ff").ch)
        //ca1.check = false
    //document.getElementById("ca1").checked = true
} */