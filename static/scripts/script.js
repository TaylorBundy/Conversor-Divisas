/* import 'style.css'

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
}); */

//creamos lista de simbolos monedas
const simbolos= {
    "USD" : "U$D ",
    "ARS" : "$ ",
    "EUR" : "€ ",
    "GBP" : "£ ",
    "MXN" : "MX$ "
}

//definimos las Api Keys
var ApiKeysList = [
  fastforex = "42e1f6bd1c-cab594ea40-slw03x",
  currencyapi = "cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q",
  apiverve = "b5dde781-7fd0-4dde-80e2-f2939cc785b9"
]

//definimos los titulos
var TitulosList = [
  fastfore = "Fast Forex",
  currencyapi = "Currency Api",
  currencyapi2 = "Currency Api-2",
  apiverve = "Api Verve",
  aapikey = "Ingrese la API-KEY del servicio a utilizar!",
  divbase = "Ingrese la Divisa Base que desea Convertir!",
  divconv = "Ingrese la Divisa a Convertir!",
  divcant = "Ingrese la Cantidad a Convertir!"
]

//definimos variables de los radiobuttons
let ff1 = document.getElementById("ff1")
let ca11 = document.getElementById("ca11")
let ca21 = document.getElementById("ca21")
let av1 = document.getElementById("av1")

//definimos variables de los radiobuttons
let ff2 = document.getElementById("ff2")
let ca12 = document.getElementById("ca12")
let ca22 = document.getElementById("ca22")
let av2 = document.getElementById("av2")

//definimos variables de los radiobuttons
let ff = document.getElementById("ff")
let ca1 = document.getElementById("ca1")
let ca2 = document.getElementById("ca2")
let av = document.getElementById("av")

//definimos variables de los input
let divBase = document.getElementById("DivBase")
let divConv = document.getElementById("DivConv")
let divCant = document.getElementById("DivCant")
let divApi = document.getElementById("DivAkey")
let divRes = document.getElementById("DivRes")

const divApi2 = document.querySelector("#DivAkey")

let Etiqueta = document.getElementById("Etiqueta")

//definimos la funcion valores, que obtiene el valor de cada input
function Valores() {
  divBase = divBase.value
  divBase = divBase.toUpperCase()
  divConv = divConv.value
  divConv = divConv.toUpperCase()
  //console.log("divBase: ", divBase.value)
  console.log("divBase: ", divBase);
  //console.log("divConv: ", divConv.value)
  console.log("divConv: ", divConv);
  console.log("divCant: ", divCant.value);
}

//definimos la funcion para pasar el focus al proximo input al llegar a 3 caracteres
function SetFocus() {
  if (divBase.value.length === 3) {
    divConv.focus()
  }
  if (divConv.value.length === 3) {
    divCant.focus()
  }
}

//definimos la funcion para limpiar los inputs,
//pasar el focus al input base
//set checked radiobutton1
function Limpiar() {
  if (divBase.value != '' || divConv.value != '' || divCant.value != ''
  || divRes.value != '' || divApi.value != '') {
    divApi.value = ''
    divBase.value = ''
    divBase.focus()
    divConv.value = ''
    divCant.value = ''
    divRes.value = ''
  }
  //si el radio button1 no esta checked, lo pasamos a true
  if (ff.checked != true) {
    ff.checked = true;
    SetTitle();
  }
}

function SetTitle() {
  if (ff.checked == true) {
    document.title = 'Conversor de Divisas - Fast Forex';
    Etiqueta.textContent = 'Fast Forex';
    //ApiKeys()
  } else if (ca1.checked == true) {
    document.title = 'Conversor de Divisas - Currency API'
    Etiqueta.textContent = 'Currency API'
  } else if (ca2.checked == true) {
    document.title = 'Conversor de Divisas - Currency API-2'
    Etiqueta.textContent = 'Currency API-2'
  } else if (av.checked == true) {
    document.title = 'Conversor de Divisas - Api Verve'
    Etiqueta.textContent = 'Api Verve'
    //ApiKeys()
  }
  ApiKeys()
  divBase.focus()
}

//definimos la funcion para pasar los datos de los inputs a mayuscula
function Mayus() {
  s1 = divBase.value
  s2 = divConv.value
  if (s1 != s1.toUpperCase()) {
    s1 = s1.replace(/[a-z]/g, char => char.toUpperCase());
    divBase.value = s1;
  }
  if (s2 != s2.toUpperCase()) {
    s2 = s2.replace(/[a-z]/g, char => char.toUpperCase());
    divConv.value = s2;
  }
}

//definimos funcion para obtener apikeys
function ApiKeys() {
  try {
    divApi.value = ''
  }
  finally {
    if (ff.checked == true) {
      divApi.value = ApiKeysList[0]
    }
    if (ca1.checked == true) {
      divApi.value = ApiKeysList[1]
    }
    if (ca2.checked == true) {
      divApi.value = ApiKeysList[1]
    }
    if (av.checked) {
      divApi.value = ApiKeysList[2]
    }
  }
}

window.onload = function() {
  try {
    divBase.focus()
  }
  finally {
    ApiKeys()
  }
}

//definimos la funcion para poner titulos
function Titulos() {
  if (divBase.onmouseover) {
    divBase.title = TitulosList[5]
  }
  if (divConv.onmouseover) {
    divConv.title = TitulosList[6]
  }
  if (divCant.onmouseover) {
    divCant.title = TitulosList[7]
  }
  if (divApi.onmouseover) {
    divApi.title = TitulosList[4]
  }
  if (ff1.onmouseover || ff2.onmouseover || ff.onmouseover) {
    ff1.title = TitulosList[0],
    ff.title = TitulosList[0],
    ff2.title = TitulosList[0]
  }
  if (ca1.onmouseover || ca12.onmouseover || ca11.onmouseover) {
    ca1.title = TitulosList[1],
    ca11.title = TitulosList[1],
    ca12.title = TitulosList[1]
  }
  if (ca2.onmouseover || ca21.onmouseover || ca22.onmouseover) {
    ca2.title = TitulosList[2],
    ca21.title = TitulosList[2],
    ca22.title = TitulosList[2]
  }
  if (av1.onmouseover || av2.onmouseover || av.onmouseover) {
    av1.title = TitulosList[3],
    av.title = TitulosList[3],
    av2.title = TitulosList[3]
  }
}

//definimos funcion fastforex
async function FastForexFetch() {
  apikey = divApi.value
  if (ff.checked) {
    url = "https://api.fastforex.io/fetch-one?from="
    url1 = "&api_key=" + apikey

    base = divBase.value
    cant = divCant.value
    div = divConv.value
    origen = url + base + "&to=" + div + url1

    try{
        resp = await fetch(origen)
        console.log(resp.json())
        console.log(base)
        //data = resp.json()
        //divisas = data["result"]
    }
    catch{
      print("Ha ocurrido un error")
    }
  }
  if (ca1.checked) {
    //apikey = "cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q"
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q&currencies="
    url1 = "&base_currency="
    base = divBase.value
    cant = divCant.value
    div = divConv.value
    origen = url + div + url1 + base
    if (div in simbolos) {
      simbolo = simbolos[div]
      //console.log(simbolo)
    }
    try{
      const resp = await fetch(origen)
      const data = await resp.json()
      const datos = await data["data"]
      const datos1 = await datos[div]
      const divisas = await datos1["value"]
      divRes.value = simbolo + divisas
      //console.log(divisas)      
    }
    catch{
      print("Ha ocurrido un error")
    }
  }
  if (av.checked) {
    url = "https://api.apiverve.com/v1/currencyconverter?value="
    base = divBase.value
    cant = divCant.value
    div = divConv.value
    origen = url + cant + '&from=' + base + '&to=' + div
    const options = {
      headers:{
        "x-api-key": apikey,
	      "Accept": "application/json"
      }
    }
    if (div in simbolos) {
      simbolo = simbolos[div]
      //console.log(simbolo)
    }
    try {
      const resp = await fetch(origen, options)
      const data = await resp.json()
      const datos = await data["data"]
      const divisas = await datos["convertedValue"]
      divRes.value = simbolo + divisas
      //console.log(divisas)
    }
    catch {
      print("Ha ocurrido un error")
    }
  }    
}

// function prueba(fun) {
//   var funciones = {};
//   funciones.ale1 = function() {
//     alert('1');
//   };

//   funciones.ale2 = function() {
//     alert('2');
//   };

//   //llamada usando reflexion donde fun es el string del nombre del metodo
//   return funciones[fun]();
// }

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