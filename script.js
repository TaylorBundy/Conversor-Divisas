// const { Ini } = require("./ini")
//import { Ini } from './ini';
//const { readIniFile } = require('read-ini-file');
//const path = require('path');

//var parser = require('ini-parser')

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
  divcant = "Ingrese la Cantidad a Convertir!",
  btnConvertir = "Convertir divisas!",
  btnLimpiar = "Limpiar contenidos de los inputs!",
  erapi = "Er Api"
]

//definimos variable de select
const sel = document.getElementById("lang");
const opt = document.createElement("option");


//definimos variables de los radiobuttons
let ff1 = document.getElementById("ff1")
let ca11 = document.getElementById("ca11")
let ca21 = document.getElementById("ca21")
let av1 = document.getElementById("av1")
let er1 = document.getElementById("er1")

//definimos variables de los radiobuttons
let ff2 = document.getElementById("ff2")
let ca12 = document.getElementById("ca12")
let ca22 = document.getElementById("ca22")
let av2 = document.getElementById("av2")
let er2 = document.getElementById("er2")

//definimos variables de los radiobuttons
let ff = document.getElementById("ff")
let ca1 = document.getElementById("ca1")
let ca2 = document.getElementById("ca2")
let av = document.getElementById("av")
let er = document.getElementById("er")

//definimos variables de los input
let divBase = document.getElementById("DivBase")
let divConv = document.getElementById("DivConv")
let divCant = document.getElementById("DivCant")
let divApi = document.getElementById("DivAkey")
let divApi2 = document.getElementById("DivAkey2")
let divRes = document.getElementById("DivRes")

let btnconvertir = document.getElementById("BtnConvertir");
let btnlimpiar = document.getElementById("BtnLimpiar");

//definimos la variable etiqueta
let Etiqueta = document.getElementById("Etiqueta")

var valorActual = '';
var valorDespues = '';

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
  || divRes.value != '' || divApi.value != '' || divApi2.value != '') {
    divApi.value = '',
    divApi2.value = '',
    divBase.value = '',
    divBase.focus(),
    divConv.value = '',
    divCant.value = '',
    divRes.value = ''
  }
  //si el radio button1 no esta checked, lo pasamos a true
  if (ff.checked != true) {
    ff.checked = true;
    SetTitle();
  }
}

//definimos la funcion "SetTitle" para poner el titulo al navegaro y a la etiqueta
function SetTitle() {
  try {
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
    } else if (er.checked == true) {
    document.title = 'Conversor de Divisas - Er Api'
    Etiqueta.textContent = 'Er Api'
    //ApiKeys()
    }
    if (divRes != '') {
      divRes.value = '';
    }
  }
  finally {
    ApiKeys();
    if (divBase.value == '' || divConv.value == '' || divCant.value == '') {
      divBase.focus();
    } else if (divBase.value != '' || divConv.value != '' || divCant.value != '') {
      divCant.focus();
    }
  }
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
    divApi.value = '';
    divApi2.value = '';
  }
  finally {
    try {
      if (ff.checked == true) {
        divApi.value = ApiKeysList[0]
        divApi2.value = ApiKeysList[0]
      }
      if (ca1.checked == true) {
        divApi.value = ApiKeysList[1]
        divApi2.value = ApiKeysList[1]        
      }
      if (ca2.checked == true) {
        divApi.value = ApiKeysList[1]
        divApi2.value = ApiKeysList[1]
      }
      if (av.checked) {
        divApi.value = ApiKeysList[2]
        divApi2.value = ApiKeysList[2]        
      }
      if (er.checked) {
        divApi.value = 'No necesita ApiKey',
        divApi2.value = 'No necesita ApiKey'
      }
    }
    finally {
      //let valorActual = divApi2.value;
      //valorDespues = divApi2.value;
      //console.log("valoractual: " + valorActual);
      //console.log("valordespues: " + valorDespues);
      setTimeout(function(){
        autoResize();
      }, 500);
    }    
  }
}

const delay = (s) => {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
};

//cuando termina de cargar la pagina, seteamos el focus en el div base,
//luego llamamos a la funcion "ApiKeys" para cargar las apikeys
window.onload = function() {
  try {
    divBase.focus();
  }
  finally {
    ApiKeys();
    //setTimeout(function(){
      //valorActual = divApi2.value;
      //console.log(valorActual);
    //}, 2000);
  }
}

//window.document.readyState

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
  if (divApi2.onmouseover) {
    divApi2.title = TitulosList[4]
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
  if (er1.onmouseover || er2.onmouseover || er.onmouseover) {
    er1.title = TitulosList[10],
    er.title = TitulosList[10],
    er2.title = TitulosList[10]
  }
  if (btnconvertir.onmouseover) {
    btnconvertir.title = TitulosList[8]
  }
  if (btnlimpiar.onmouseover) {
    btnlimpiar.title = TitulosList[9]
  }
}

//definimos funcion fastforex
async function Convertir() {
  apikey = divApi2.value
  try {
    divRes.value = 'Calculando'
    await delay(2);
  }
  finally {
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
      //url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q&currencies="
      url = 'https://api.currencyapi.com/v3/latest?apikey=' + apikey + '&currencies='
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
    if (er.checked) {
      //apikey = "cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q"
      //url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q&currencies="
      url = 'https://open.er-api.com/v6/latest/' + divBase.value
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
        //const resp = await fetch(origen)
        const resp = await fetch(url)
        const data = await resp.json()
        //console.log(data)
        //const datos = await data["data"]
        const datos = await data["rates"]
        //console.log(datos)
        const datos1 = await datos[div]
        //console.log(datos1)
        //const divisas = await datos1["value"]
        const divisas = cant * datos1
        divRes.value = simbolo + divisas
        //console.log(divisas)
      }
      catch{
        print("Ha ocurrido un error")
      }
    }
  }
}

// window = new BrowserWindow({
//   webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false
//   }
// });

/* function leerArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;    
    lector.onloadend = () => leyendo(contenido);
    //return contenido
    //mostrarContenido(contenido);
  };
  lector.readAsText(archivo);
} */

/* function mostrarContenido(contenido) {
  var elemento = document.getElementById('contenido-archivo');
  elemento.innerHTML = contenido;
} */

/* document.getElementById('file-input')
  .addEventListener('change', leerArchivo, false); */

function parseINIString(data){
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
}

function parseINIString2(data){
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
  }

function parseINI(data) {
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
}

function leyendo (contents) {
  //let lineas = contents.split(/\n/);
  //let lineas2 = contents.split(/\n/);
  let lineas2 = contents.split(/[\r\n]+/);
  //console.log(contents);
  var cantidad = lineas2.length;
  //lineas.forEach(line => console.log(line))
  
  //var iniObj = parseINIString(contents);
  var iniObj2 = parseINIString2(contents);
  //var iniObj3 = parseINI(contents);
  
  //var lola = iniObj3;
  
  //console.log(lola);

  //var jjj = '[API0]';
  //if (jjj in iniObj3) {
    //console.log('si');
  //}
  for (x = 0; x < lineas2.length -1; x++){
    //x = x / 3;
    //console.log(x);
    var api = 'API' + x;
    if (api in iniObj2) {
      var apis = iniObj2[api];
      //console.log(iniObj2[api]);
      //console.log(apis);
      //if ('API' in apis) {
        //var Nitems = apis['API'];
        //var pro = new Array(Nitems);
        //console.log(apis.length);
        //opt.value = Nitems;
        //opt.text = Nitems;
        //sel.Add(opt);
        //AddItem(Nitems);
        //console.log(apis['API']);
      //}
    }
    if ('API' in apis) {
      var Nitems = apis['API'];
      var pro = new Array(Nitems);
      console.log(Nitems);
      //console.log(pro.length);
    }
    //AddItem(Nitems);
    //console.log(Nitems);
    //console.log(x);
    //console.log(pro);
  }
  //if (api in iniObj2) {
    //console.log(iniObj2[api]);
  //}
  //console.log(Nitems);
  //console.log(pro);
  //if ('API1' in iniObj2) {
    //console.log('API1');
  //}
  //console.log(iniObj2);
  //console.log(iniObj.API1);
  //AddItem(Nitems);
  console.log("cantidad: " + cantidad);
  //if (iniObj)

  // lineas2.forEach(line2 => {
  //   iniObj = parseINIString(line2);
  //   datos = iniObj;
  //   //console.log(iniObj);
  //   console.log(datos);
  //   if (api in datos) {
  //     datos1 = datos[api];
  //     console.log(datos1);
  //   }
  // });
  //console.log(datos);
  //console.log(iniObj.Hello);
  //console.log(iniObj.Section2);
  //console.log(iniObj.Section2.Param2);
  //console.log(iniObj.Section2['Hello Param3']);
}

//creamos funcion para agregar items a la lista de apis
function AddItem(items) {
  //let lineas3 = items.split(/[\r\n]+/);
  let lineas3 = items.split();
  //opt.value = "3";
  opt.value = items
  opt.text = items;
  //opt.value = items.length;
  //opt.text = "Option: Value 3";
  //opt.text = items;
  //console.log(items);
  //console.log(lineas3.length);
  //sel.add(opt, sel.options[1]);
  //sel.appendChild(opt);
  sel.add(new Option(opt));
  sel.append(opt);
}

const textarea = document.querySelector("#DivAkey2");


function autoResize() {
  //const valorActual = divApi2.value;
  //valorActual = divApi2.value;
  //console.log(valorActual);
  if (textarea.value.length > 40) {
    textarea.style.height = 'auto';
    //textarea.style.height = divApi2.scrollHeight + 'px';
    textarea.style.overflow = 'scroll';
    //console.log(textarea.value);
    // textarea.style.resize = 'none';
    //console.log(textarea.value.length);
    
  } else {
    textarea.style.overflow = 'hidden';
    textarea.style.resize = 'none';
    //console.log(textarea.value.length);
  }
}

//textarea.addEventListener('change', autoResize, false);
//document.getElementById("DivAkey2")
  //.addEventListener("change", autoResize, false);

//document.getElementById('DivAkey2')
  //.addEventListener('input', autoResize, false);

/* function creaArchivo() {
  var ini = new Ini();

  ini.parse([
    'prop = value',
    '[sect]',
    'foo = bar',
    'baz = yes',
    '[sect "label"]',
    'foo = "bar"',
    'baz = off'
  ].join('\n'));

  ini.get('prop')           // value
  ini.get('sect.foo')       // bar
  ini.get('sect:label.baz') // false

  ini.toObject()            // {prop: value, sect: { foo: bar, baz: true } ...}
  ini.toString()            // Generates back the ini file

  // It's also to modify or build an ini file programatically
  var sect = ini.section('newsect', 'mylabel');
  sect.comment('My comment');
  sect.property('foo', 'bar');
} */

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