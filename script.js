// const { Ini } = require("./ini")
//import { Ini } from './ini';
//const { readIniFile } = require('read-ini-file');
//const path = require('path');

//var parser = require('ini-parser')

//creamos lista de simbolos monedas
/* const simbolos= {
  "USD" : "U$D ",
  "ARS" : "$ ",
  "EUR" : "€ ",
  "GBP" : "£ ",
  "MXN" : "MX$ "
}; */

const simbolos2 = [
  USD = "U$D ",
  ARS = "$ ",
  COP = "$ ",
  EUR = "€ ",
  GBP = "£ ",
  MXN = "MX$ "
];

/* const simbolos3 = [
  'USD',
  'ARS',
  'EUR',
  'GBP',
  'MXN'
]; */

const simbolos4 = {
  "USD" : "USD",
  "ARS" : "ARS",
  "EUR" : "EUR",
  "GBP" : "GBP",
  "COP" : "COP",
  "MXN" : "MXN"
};

/* //definimos las Api Keys
var ApiKeysList = [
  //fastforex = "42e1f6bd1c-cab594ea40-slw03x",
  fastforex = "22b4888bca-b31a00af95-sna5fn",
  currencyapi = "cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q",
  apiverve = "b5dde781-7fd0-4dde-80e2-f2939cc785b9"
]; */

//definimos los titulos
var TitulosList = [
  fastfore = "Fast Forex",
  currencyapi = "Currency Api",
  currencyapi2 = "Currency Layer",
  apiverve = "Api Verve",
  aapikey = "Ingrese la API-KEY del servicio a utilizar!",
  divbase = "Ingrese la Divisa Base que desea Convertir!",
  divconv = "Ingrese la Divisa a Convertir!",
  divcant = "Ingrese la Cantidad a Convertir!",
  btnConvertir = "Convertir divisas!",
  btnLimpiar = "Limpiar contenidos de los inputs!",
  erapi = "Er Api",
  btnInvertir = "Invertir divisas!"
];

//definimos variable de select
const sel = document.getElementById("lang");
const opt = document.createElement("option");


//definimos variables de los radiobuttons
let ff1 = document.getElementById("ff1");
let ca11 = document.getElementById("ca11");
let ca21 = document.getElementById("ca21");
let av1 = document.getElementById("av1");
let er1 = document.getElementById("er1");
let cr1 = document.getElementById("cr1");

//definimos variables de los radiobuttons
let ff2 = document.getElementById("ff2");
let ca12 = document.getElementById("ca12");
let ca22 = document.getElementById("ca22");
let av2 = document.getElementById("av2");
let er2 = document.getElementById("er2");
let cr2 = document.getElementById("cr2");

//definimos variables de los radiobuttons
let ff = document.getElementById("ff");
let ca1 = document.getElementById("ca1");
let ca2 = document.getElementById("ca2");
let av = document.getElementById("av");
let er = document.getElementById("er");
let cr = document.getElementById("cr");

//definimos variables de los input
let divBase = document.getElementById("DivBase");
let divConv = document.getElementById("DivConv");
let divCant = document.getElementById("DivCant");
let divApi = document.getElementById("DivAkey");
let divApi2 = document.getElementById("DivAkey2");
let divRes = document.getElementById("DivRes");

let btnconvertir = document.getElementById("BtnConvertir");
let btnlimpiar = document.getElementById("BtnLimpiar");
let btninvertir = document.getElementById("BtnInvertir");

const textarea = document.querySelector("#DivAkey2");
const result = document.querySelector('#DivAkey');

let apikey = '';
let url = '';
let url1 = '';
let url2 = '';
let base = '';
let cant = '';
let conv = '';
let div = '';
let origen = '';
let simbolo = '';
let divisas = '';
let resp = '';
let data = '';
let datos = '';
let datos1 = '';
let resultado = '';


//definimos la variable etiqueta
let Etiqueta = document.getElementById("Etiqueta");

//definimos la variable para settimeout
let tSegundos = '';
let largo = '';

//definimos la variable de la url local
const urllocal = 'file:///C:/HTML/Proyectos/Conversor%20Divisas/index.html';

//definimos constante plataforma
const plataforma = navigator.userAgent;

//definimos la variable cookie
//document.cookie = divApi2.value;
//let galleta = document.cookie;
var data2 = new Date();
data2.setTime(data2.getTime() + 365 * 24 * 60 * 60 * 1000);
var expira = data2.toUTCString();
let nombre_cookie = '';
let valorCookie = '';

var valorActual = '';
var valorDespues = '';

//cuando termina de cargar la pagina, seteamos el focus en el div base,
//luego llamamos a la funcion "ApiKeys" para cargar las apikeys
window.onload = function() {
  try {
    divBase.focus();
    agregaritem();
  }
  finally {
    try {
      //ApiKeys();
    }
    finally {
      setTimeout(function() {
        nombre_cookie = Etiqueta.textContent;
        var urlactual = location.href;
        if (urllocal == urlactual) {
          comprobarCookieLocal(nombre_cookie);
          //var puto = comprobarCookieLocal(nombre_cookie);
          //console.log(puto);
        } else {
          comprobarCookie(nombre_cookie);
        }
      }, 500);
    }
  }
};

//definimos la funcion valores, que obtiene el valor de cada input
function Valores() {
  divBase = divBase.value;
  divBase = divBase.toUpperCase();
  divConv = divConv.value;
  divConv = divConv.toUpperCase();
  //console.log("divBase: ", divBase.value)
  console.log("divBase: ", divBase);
  //console.log("divConv: ", divConv.value)
  console.log("divConv: ", divConv);
  console.log("divCant: ", divCant.value);
}

//definimos la funcion para pasar el focus al proximo input al llegar a 3 caracteres
function SetFocus(id) {
  const inputField2 = document.querySelector('#'+id);
  setTimeout(function(){
    if (inputField2.value.length === 3 && divConv.value.length === 0) {
      if (inputField2.value.toUpperCase() in simbolos4) {
        divConv.disabled = false;
        divConv.style.background = '#d7e4f2';
        divConv.style.border = '1px solid blue';
        divConv.placeholder = '';
        divConv.onmouseover = function() {divConv.style.background = 'black';};
        divConv.onmouseout = function() {divConv.style.background = '#d7e4f2';};
        divConv.focus();
      } else {
        divConv.disabled = true;
        divConv.style.background = 'darkgrey';
        divConv.style.border = '1px solid darkgrey';
        divConv.placeholder = 'Divisa Base Invalida!';
        inputField2.focus();
      }
    }
    if (divConv.value.length === 3 && divBase.value.length === 3) {
      if (divConv.value.toUpperCase() in simbolos4) {
        divCant.disabled = false;
        divCant.style.background = '#d7e4f2';
        divCant.style.border = '1px solid blue';
        divCant.onmouseover = function() {divCant.style.background = 'black';};
        divCant.onmouseout = function() {divCant.style.background = '#d7e4f2';};
        divCant.placeholder = '';
        divCant.focus();
      } else {
        divCant.disabled = true;
        divCant.style.background = 'darkgrey';
        divCant.style.border = '1px solid darkgrey';
        divCant.placeholder = 'Divisa a Convertir Invalida!';
        inputField2.focus();
      }
    }
  }, 100);
}

function tiempo() {
  if (Etiqueta.textContent == 'Api Verve') {
    largo = 36;
  }
  if (Etiqueta.textContent == 'Fast Forex') {
    largo = 28;
  }
  if (Etiqueta.textContent == 'Currency API') {
    largo = 49;
  }
  if (Etiqueta.textContent == 'Er Api') {
    largo = 18;
  }

  if (plataforma.includes('Win')) {
    if (divApi2.value.length === largo) {
      tSegundos = 1000;
    } else {
      tSegundos = 5000;
    }
  } else if (plataforma.includes('Android')) {
    if (divApi2.value.length === largo) {
      tSegundos = 1000;
    } else {
      tSegundos = 15000;
    }
  }
  if (divApi2.value.length == largo) {
    setTimeout(function(){
      if (divApi2.value != '') {
        divBase.focus();
      }
    }, tSegundos);
  }
}

//definimos la funcion para limpiar los inputs,
//pasar el focus al input base
//set checked radiobutton1
function Limpiar() {
  if (divBase.value != '' ||
  divConv.value != '' ||
  divCant.value != '' ||
  divRes.value != '' ||
  divApi.value != '' ||
  divApi2.value != '') {
    divApi.value = '';
    divApi2.value = '';
    divBase.value = '';
    divBase.focus();
    divConv.value = '';
    divCant.value = '';
    divRes.value = '';
  }
  //si el radio button1 no esta checked, lo pasamos a true
  if (ff.checked != true) {
    ff.checked = true;
    SetTitle();
  } else {
    SetTitle();
  }
}

//definimos la funcion para invertir los valores de las divisas
function Invertir() {
  if (divBase.value != '' || divConv.value != '') {
    var valor1 = divBase.value;
    var valor2 = divConv.value;
    try {
      if (valor1 != valor2) {
        divBase.value = valor2;
        divConv.value = valor1;
      }
    }
    finally {
      divCant.focus();
      divRes.value = '';
    }
  }
}

//definimos la funcion "SetTitle" para poner el titulo al navegaro y a la etiqueta
function SetTitle() {
  try {
    if (ff.checked == true) {
      document.title = 'Conversor de Divisas - Fast Forex';
      Etiqueta.textContent = 'Fast Forex';
    } else if (ca1.checked == true) {
      document.title = 'Conversor de Divisas - Currency API';
      Etiqueta.textContent = 'Currency API';
    } else if (ca2.checked == true) {
      document.title = 'Conversor de Divisas - Currency API-2';
      Etiqueta.textContent = 'Currency API-2';
    } else if (av.checked == true) {
      document.title = 'Conversor de Divisas - Api Verve';
      Etiqueta.textContent = 'Api Verve';
    } else if (er.checked == true) {
      document.title = 'Conversor de Divisas - Er Api';
      Etiqueta.textContent = 'Er Api';
      divApi2.value = 'No necesita ApiKey';
    } else if (cr.checked == true) {
      document.title = 'Conversor de Divisas - Currency Layer';
      Etiqueta.textContent = 'Currency Layer';
      //divApi2.value = 'No necesita ApiKey';
    }
    if (divRes != '') {
      divRes.value = '';
    }
  }
  finally {
    ApiKeys();
    if (divBase.value == '' && divConv.value == '' && divCant.value == '') {
      divBase.focus();
    } else if (divBase.value != '' && divConv.value == '') {
      divConv.focus();
    } else if (divBase.value != '' && divConv != '') {
      divCant.focus();
    }
  }
}

//definimos la funcion para pasar los datos de los inputs a mayuscula
function Mayus() {
  s1 = divBase.value;
  s2 = divConv.value;
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
    divApi.value = '';
    divApi2.value = '';
  }
  finally {
    try {
      if (ff.checked == true) {
        //divApi.value = ApiKeysList[0]
        //divApi2.value = ApiKeysList[0]
      }
      if (ca1.checked == true) {
        //divApi.value = ApiKeysList[1]
        //divApi2.value = ApiKeysList[1]
      }
      if (ca2.checked == true) {
        //divApi.value = ApiKeysList[1]
        //divApi2.value = ApiKeysList[1]
      }
      if (av.checked) {
        //divApi.value = ApiKeysList[2]
        //divApi2.value = ApiKeysList[2]
      }
      if (er.checked) {
        //divApi.value = 'No necesita ApiKey',
        divApi2.value = 'No necesita ApiKey';
      }
    }
    finally {
      nombre_cookie = Etiqueta.textContent;
      if (divApi2.value == '') {
        valorCookie = '';
      } else {
        valorCookie = divApi2.value;
      }
      setTimeout(function(){
        var urlactual = location.href;
        if (urlactual == urllocal) {
          comprobarCookieLocal(nombre_cookie);
        } else {
          comprobarCookie(nombre_cookie);
        }
        autoResize();
      }, 100);
    }
  }
}

const delay = (s) => {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
};



function crearCookie(nombre, valorCookie, dias) {
  if (dias) {
    var expira = data2.toUTCString();
  }
  //var nuevaCookie = nombre + "=" + valorCookie + ";expires=" + expira
  var nuevaCookie = nombre + "=" + valorCookie + ";" + "expires" + "=" + expira;
  //document.cookie = nuevaCookie;
  //document.cookie = nombre + "=" + valorCookie + ";" + "expires" + "=" + expira
  var urlactual = location.href;
  //if (window.localStorage) {
  if (urlactual == urllocal) {
    try {
      localStorage.setItem(nombre, valorCookie);
    }
    finally {
      //console.log(localStorage.getItem(nombre));
    }
  } else {
    document.cookie = nombre + "=" + valorCookie + ";" + "expires" + "=" + expira;
  }
}

function obtenerCookie(clave) {
  //if (window.localStorage) {
    //var ca = localStorage.getItem(clave);
    //var name = clave;
  //} else {
    var name = clave + "=";
    var ca = document.cookie.split(';');
  //}
  //console.log(name)
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

//creamos funcion para comprobar si existe la cookie
function comprobarCookie(clave) {
  var clave = obtenerCookie(clave);
  if (clave != "") {
      // La cookie existe.
      //console.log(clave)
      if (clave != null) {
        divApi2.value = clave;
      } else {
        divApi2.focus();
      }
      //console.log(clave);
  } else {
      // La cookie no existe.
      divApi2.focus();
  }
}

//creamos funcion para comprobar si existe la cookie en localstorage
function comprobarCookieLocal(clave) {
  if (divApi2.value != 'No necesita ApiKey') {
    var clave = localStorage.getItem(clave);
    if (clave != "") {
      // La cookie existe.
      //console.log(clave)
      if (clave != null) {
        divApi2.value = clave;
      } else {
        divApi2.focus();
      }
    } else {
      divApi2.focus();
      return "";
    }
  }
}

//window.document.readyState

//definimos la funcion para poner titulos
function Titulos() {
  if (divBase.onmouseover) {
    divBase.title = TitulosList[5];
  }
  if (divConv.onmouseover) {
    divConv.title = TitulosList[6];
  }
  if (divCant.onmouseover) {
    divCant.title = TitulosList[7];
  }
  if (divApi.onmouseover) {
    divApi.title = TitulosList[4];
  }
  if (divApi2.onmouseover) {
    divApi2.title = TitulosList[4];
  }
  if (ff1.onmouseover || ff2.onmouseover || ff.onmouseover) {
    ff1.title = TitulosList[0];
    ff.title = TitulosList[0];
    ff2.title = TitulosList[0];
  }
  if (ca1.onmouseover || ca12.onmouseover || ca11.onmouseover) {
    ca1.title = TitulosList[1];
    ca11.title = TitulosList[1];
    ca12.title = TitulosList[1];
  }
  if (cr2.onmouseover || cr1.onmouseover || cr.onmouseover) {
    cr2.title = TitulosList[2];
    cr1.title = TitulosList[2];
    cr.title = TitulosList[2];
  }
  if (av1.onmouseover || av2.onmouseover || av.onmouseover) {
    av1.title = TitulosList[3];
    av.title = TitulosList[3];
    av2.title = TitulosList[3];
  }
  if (er1.onmouseover || er2.onmouseover || er.onmouseover) {
    er1.title = TitulosList[10];
    er.title = TitulosList[10];
    er2.title = TitulosList[10];
  }
  if (btnconvertir.onmouseover) {
    btnconvertir.title = TitulosList[8];
  }
  if (btnlimpiar.onmouseover) {
    btnlimpiar.title = TitulosList[9];
  }
  if (btninvertir.onmouseover) {
    btninvertir.title = TitulosList[11];
  }
}

//definimos funcion fastforex
async function Convertir() {
  apikey = divApi2.value;
  try {
    divRes.value = 'Calculando';
    await delay(2);
  }
  finally {
    if (ff.checked) {
      url = "https://api.fastforex.io/fetch-one?from=";
      url1 = "&api_key=" + apikey;
      url2 = "https://api.fastforex.io/currencies?api_key=";

      base = divBase.value;
      cant = divCant.value;
      div = divConv.value;
      origen = url + base + "&to=" + div + url1;
      if (div in simbolos) {
        simbolo = simbolos[div];
        //console.log(simbolo)
      }
      try{
          resp = await fetch(origen);
          const resp2 = await fetch(url2 + apikey);
          //console.log(resp.json())
          //console.log(base)
          data = await resp.json();
          //const data2 = await resp2.json()
          //const curren = await data2["currencies"]
          divisas = await data["result"];
          resultado = divisas[div] * cant;
          //console.log(data2)
          //console.log(divisas[div])
          //console.log(resultado)
          divRes.value = simbolo + resultado.toFixed(4);
          holaaaa();
      }
      catch{
        print("Ha ocurrido un error");
      }
    }
    if (ca1.checked) {
      //apikey = "cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q"
      //url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q&currencies="
      url = 'https://api.currencyapi.com/v3/latest?apikey=' + apikey + '&currencies=';
      url1 = "&base_currency=";
      base = divBase.value;
      cant = divCant.value;
      div = divConv.value;
      origen = url + div + url1 + base;
      if (div in simbolos) {
        simbolo = simbolos[div];
        //console.log(simbolo)
      }
      try{
        resp = await fetch(origen);
        data = await resp.json();
        datos = await data["data"];
        datos1 = await datos[div];
        divisas = await datos1["value"];
        divRes.value = simbolo + divisas.toFixed(4);
        //console.log(divisas)
      }
      catch{
        print("Ha ocurrido un error");
      }
    }
    if (cr.checked) {
      url = 'https://api.currencylayer.com/convert?access_key=' + apikey;
      base = divBase.value;
      cant = divCant.value;
      div = divConv.value;
      origen = url + '&from=' + base + '&to=' + div + '&amount=' + cant;
      if (div in simbolos) {
        simbolo = simbolos[div];
        //console.log(simbolo)
      }
      try{
        resp = await fetch(origen);
        //console.log(await resp);
        data = await resp.json();
        datos = await data["result"];
        //console.log(datos);
        divisas = await datos;
        //console.log(divisas);
        //const datos1 = await datos[div];
        //const divisas = await datos1["value"];
        divRes.value = simbolo + divisas.toFixed(5);
        //console.log(divisas)
      }
      catch{
        console.log("Ha ocurrido un error");
      }
    }
    if (av.checked) {
      url = "https://api.apiverve.com/v1/currencyconverter?value=";
      base = divBase.value;
      cant = divCant.value;
      div = divConv.value;
      origen = url + cant + '&from=' + base + '&to=' + div;
      const options = {
        headers:{
          "x-api-key": apikey,
          "Accept": "application/json"
        }
      };
      if (div in simbolos) {
        simbolo = simbolos[div];
        //console.log(simbolo)
      }
      try {
        resp = await fetch(origen, options);
        data = await resp.json();
        datos = await data["data"];
        divisas = await datos["convertedValue"];
        divRes.value = simbolo + divisas.toFixed(4);
        //console.log(divisas)
      }
      catch {
        print("Ha ocurrido un error");
      }
    }
    if (er.checked) {
      //apikey = "cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q"
      //url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q&currencies="
      url = 'https://open.er-api.com/v6/latest/' + divBase.value;
      url1 = "&base_currency=";
      base = divBase.value;
      cant = divCant.value;
      div = divConv.value;
      origen = url + div + url1 + base;
      if (div in simbolos) {
        simbolo = simbolos[div];
        //console.log(simbolo)
      }
      try{
        //const resp = await fetch(origen)
        resp = await fetch(url);
        data = await resp.json();
        //console.log(data)
        //const datos = await data["data"]
        datos = await data["rates"];
        //console.log(datos)
        datos1 = await datos[div];
        //console.log(datos1)
        //const divisas = await datos1["value"]
        divisas = cant * datos1;
        divRes.value = simbolo + divisas.toFixed(4);
        //console.log(divisas)
      }
      catch{
        print("Ha ocurrido un error");
      }
    }
    if (Etiqueta.textContent != '' || divApi2.value != '') {
      try {
        nombre_cookie = Etiqueta.textContent;
        valorCookie = divApi2.value;
      }
      finally {
        crearCookie(nombre_cookie, valorCookie, expira);
      }
    }
  }
}

//creamos la funcion para ocular el teclado del mobil cuando ejecutamos la funcion para convertir
function hideKeyboard() {
  document.activeElement.blur();
}

//creamo la funcion que redimenciona y ajusta el "textarea" cuando se ejecuta desde un mobil
function autoResize() {
  if (textarea.value.length > 40) {
    textarea.style.height = 'auto';
    if (screen.width >= 400) {
      textarea.style.overflow = 'hidden';
    } else {
      textarea.style.overflow = 'scroll';
    }
  } else {
    textarea.style.overflow = 'hidden';
    textarea.style.resize = 'none';
  }
}

//creamo la funcion "autocomplete" encargada de auto completar la divisa base y a convertir si existe en la lista
function autoComplete(simbolos3, val, id) {
  const hola = document.querySelector('#'+id);
  const coco = simbolos3.filter(e => e.toLowerCase().includes(val.toLowerCase()));
  if (val != coco) {
    hola.style.color = 'red';
  } else {
    hola.style.color = '#8202dd';
  }
  return simbolos3.filter(e => e.toLowerCase().includes(val.toLowerCase()));
  //return simbolos3.filter(e => e.includes(val));
}

//creamos la funcion que obtiene el valor de los inputs divisa base y divisa a convertir
//para comprobar si el valor existe en la lista mediante la funcion autocomplete
//para rrelenar el campop
function getValue(val, id){
  const inputField2 = document.querySelector('#'+id);
  if(!val){
    result.innerHTML='';
    return
  }
  var data = autoComplete(simbolos3,val, id);
  for (var i = 0; i < data.length; i++) {
    if (inputField2.value.length === 3) {
      try {
        var valorfinal = data[i];
        if (val.toUpperCase() === valorfinal) {
          inputField2.value = data[i];
          inputField2.style.color = '#8202dd';
        } //else {
          //inputField2.style.color = 'red';
        //}
      }
      finally {
        //
      }
    }
  }
}

//creamos funcion para comprobar la divisa
/* function CompDivisa() {
  base = divBase.value;
  conv = divConv.value;
  if (simbolos2.includes(base)) {
    divBase.value = simbolos2[base];
  }
} */

/* function parseINIString(data){
  var regex = {
      section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
      param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/,
      comment: /^\s*;.*$/
  };
  var value = {};
  var lines = data.split(/[\r\n]+/);
  var section = null;
  lines.forEach(function(line){
      if(regex.comment.test(line)){
          return;
      }else if(regex.param.test(line)){
          var match = line.match(regex.param);
          if(section){
              value[section][match[1]] = match[2];
          }else{
              value[match[1]] = match[2];
          }
      }else if(regex.section.test(line)){
          var match = line.match(regex.section);
          value[match[1]] = {};
          section = match[1];
      }else if(line.length == 0 && section){
          section = null;
      };
  });
  //console.log(value);
  return value;
} */

/* function parseINIString2(data){
  var regex = {
      section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
      param: /^\s*([\w\.\-\_]+)\s*=\s*(.*?)\s*$/,
      comment: /^\s*;.*$/
  };
  var value = {};
  var lines = data.split(/\r\n|\r|\n/);
  var section = null;

  for(x=0;x<lines.length;x++)
  {

      if(regex.comment.test(lines[x])){
          return;
      }else if(regex.param.test(lines[x])){
          var match = lines[x].match(regex.param);
          if(section){
              value[section][match[1]] = match[2];
          }else{
              value[match[1]] = match[2];
          }
      }else if(regex.section.test(lines[x])){
          var match = lines[x].match(regex.section);
          value[match[1]] = {};
          section = match[1];
      }else if(lines.length == 0 && section){//changed line to lines to fix bug.
          section = null;
      };

  }

  return value;
  } */

/* function parseINI(data) {
  let rgx = {
    section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
    param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/,
    comment: /^\s*;.*$/
  };
  let result = {};
  //let lines = data.split(/[\r\n]+/);
  let lines = data.split(/\r\n|\r|\n/);
  let section = result;
  lines.forEach(function (line) {
    //comments
    if (rgx.comment.test(line)) return;
    //params
    if (rgx.param.test(line)) {
      let match = line.match(rgx.param);
      section[match[1]] = match[2];
      return;
    }
    //sections
    if (rgx.section.test(line)) {
      section = result
      let match = line.match(rgx.section);
      for (let subSection of match[1].split(".")) {
        !section[subSection] && (section[subSection] = {});
        section = section[subSection];
      }
      return;
    }
  });
  return result;
} */

/* function leyendo (contents) {
  let lineas2 = contents.split(/[\r\n]+/);
  var cantidad = lineas2.length;
  var iniObj2 = parseINIString2(contents);
  for (x = 0; x < lineas2.length -1; x++){
    var api = 'API' + x;
    if (api in iniObj2) {
      var apis = iniObj2[api];
    }
    if ('API' in apis) {
      var Nitems = apis['API'];
      var pro = new Array(Nitems);
      console.log(Nitems);
    }
  }
  console.log("cantidad: " + cantidad);
} */

//creamos funcion para agregar items a la lista de apis
/* function AddItem(items) {
  let lineas3 = items.split();
  opt.value = items
  opt.text = items;
  sel.add(new Option(opt));
  sel.append(opt);
} */