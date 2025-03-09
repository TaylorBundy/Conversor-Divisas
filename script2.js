//creamos lista de simbolos monedas
const simbolos= {
    "USD" : "U$D ",
    "ARS" : "$ ",
    "COP" : "$",
    "EUR" : "€ ",
    "GBP" : "£ ",
    "MXN" : "MX$ "
};

//creamos lista de simbolos para utilizar en el autorellenado de los inputs
const simbolos3 = [
    'USD',
    'ARS',
    'EUR',
    'GBP',
    'COP',
    'MXN'
];

//definimos las Api Keys
/* const ApiKeysList = {
    //fastforex = "42e1f6bd1c-cab594ea40-slw03x",
    'fastforex' : "22b4888bca-b31a00af95-sna5fn",
    'currencyapi' : "cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q",
    'apiverve' : "b5dde781-7fd0-4dde-80e2-f2939cc785b9"
}; */
const ApiKeysList = [
    //fastforex = "42e1f6bd1c-cab594ea40-slw03x",
    {name : 'fastforex', api : '22b4888bca-b31a00af95-sna5fn'},
    {name : 'currencyapi', api : 'cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q'},
    {name : 'apiverve', api : 'b5dde781-7fd0-4dde-80e2-f2939cc785b9'},
    {name : 'currencylayer', api : '71d268a97a2e404f68bf01cd68508b75'},
];

//definimos las Api Keys
const ApiKeysList2 = {
  //fastforex = "42e1f6bd1c-cab594ea40-slw03x",
  'fastforex' : "22b4888bca-b31a00af95-sna5fn",
  'currencyapi' : "cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q",
  'apiverve' : "b5dde781-7fd0-4dde-80e2-f2939cc785b9",
  'currencylayer' : '71d268a97a2e404f68bf01cd68508b75'
};

const ApiKeysList3 = {
    //fastforex = "42e1f6bd1c-cab594ea40-slw03x",
    'fastforex' : "22b4888bca-b31a00af95-sna5fn",
    'currencyapi' : "cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q",
    'apiverve' : "b5dde781-7fd0-4dde-80e2-f2939cc785b9",
    'currencylayer' : '71d268a97a2e404f68bf01cd68508b75'
  };

const ApiKeysList4 = [
    'FASTFOREX',
    'currencyapi',
    'currencylayer',
    'apiverve'
];

let largosApi = '';
let porce = '';

function agregaritem() {
    const select = document.querySelector('#lang');
    for (let i = 0; i < ApiKeysList.length; i++) {
        let options = document.createElement('option');
        options.textContent = ApiKeysList[i].name;
        //console.log(ApiKeysList[i].api);
        select.appendChild(options);
    }
}

//creamo la funcion "autocomplete" encargada de auto completar la divisa base y a convertir si existe en la lista
function autoComplete2(simbolos3, val, id) {
    //const hola = document.querySelector('#'+id);
    //const coco = simbolos3.filter(e => e.toLowerCase().includes(val.toLowerCase()));
    //if (val != coco) {
      //hola.style.color = 'red';
    //} else {
      //hola.style.color = '#8202dd';
    //}
    //return simbolos3.filter(e => e.toLowerCase().includes(val.toLowerCase()));
    
    return simbolos3.filter(({name}) => name.toLowerCase().includes(val.toLowerCase()));
    //return simbolos3.filter(e => e.includes(val));
  }

//creamos la funcion que obtiene el valor de los inputs divisa base y divisa a convertir
//para comprobar si el valor existe en la lista mediante la funcion autocomplete
//para rrelenar el campop
function getValue2(val, id){
    const inputField2 = document.querySelector('#'+id);
    //let search = document.getElementById("search");
    //largosApi = '';
    if(!val){
        result.innerHTML='';
        return
    }
    data = autoComplete2(ApiKeysList,val, id);
    var nuevo = new Array(data);
    for (const key of nuevo) {
        var cantidad = key.length;
        console.log(cantidad);
      }    
    //var porce = largosApi / 2;
    //console.log(porce);
    for (var i = 0; i < data.length; i++) {
        //if (inputField2.value.length >= porce) {
            try {
                var valorfinal = data[i];
                var parte = data.slice();
                if (val.toUpperCase() < valorfinal) {
                    divApi.style.display = 'inline-flex';
                    divApi.style.position = 'absolute';
                    divApi.style.visibility = 'visible';
                    //divApi.style.left = '50%';
                    //divApi.style.bottom = '-80%';
                    //divApi.style.width = '250px';
                    //divApi.style.backgroundColor = 'grey';
                    divApi.onmouseleave = function() {divApi.style.visibility = 'collapse';};
                    //divApi.onmouseover = function() {divApi.style.visibility = 'collapse';};
                    //if (parte.length >= 2) {
                    if (cantidad >= 2) {
                        largosApi = 14;
                        porce = largosApi / 2;
                        porce = porce + 2;
                        //console.log(parte);
                        //console.log(ApiKeysList.toString.call());
                        //console.log(data[i].api);
                        //console.log(porce);
                        //inputField2.value = data[i].api;
                        //if (inputField2.value.length >= porce) {
                            //inputField2.value = data[i].api;
                            //console.log(data[i]);
                            divApi.value = data[i].name;
                        //}
                    } else {
                        largosApi = 10;
                        porce = largosApi / 2;
                        inputField2.value = data[i].api;
                        //console.log(data[i].api);
                        
                        divApi.value = data[i].name;
                        //var valorapi = data[i].api;

                        //divApi.onclick = function(){search.value = valorapi;};
                        //divApi.onfocus = function(){console.log(valorapi);};
                    }
                }
            }
            finally {
                //
            }
        //}
    }
}

function isCherries(fruit) {
    return fruit.name === "cherries";
}

function FindKey(valor, id) {
    if (Etiqueta.textContent == 'Api Verve') {
        largosApi = 8;
      }
      if (Etiqueta.textContent == 'Fast Forex') {
        largosApi = 9;
      }
      if (Etiqueta.textContent == 'Currency API') {
        largosApi = 11;
      }
      if (Etiqueta.textContent == 'Currency Layer') {
        largosApi = 13;
      }
    const InputApi = document.querySelector('#'+id);

    const result = ApiKeysList.find(({ name }) => name === valor);
    console.log(result.keys());
    //for (let i = 0; i < result.length; i++) {
        //console.log(result);

    //}

    //const result2 = ApiKeysList.includes(({ name }) => name === valor);
    //console.log("include: ", Array.prototype.includes.call(ApiKeysList, valor));


    if (InputApi.value.length == largosApi && InputApi.value.length <= largosApi) {
        //console.log("result: ", result);
        for (let i = 0; i < ApiKeysList.length; i++) {
            //console.log(ApiKeysList[i].name);
            //InputApi.value = ApiKeysList[result].api;
        }
        //InputApi.value = ApiKeysList[valor].api;
        //console.log("result2: ", result2);
    }

    if (InputApi.value.length >= 3 && InputApi.value.length <= largosApi) {
        //console.log(InputApi.value.length);
        //console.log(ApiKeysList.find(isCherries));
        if (InputApi.value in ApiKeysList.keys()) {
            //InputApi.value = ApiKeysList[valor].api;
            //console.log(ApiKeysList2[valor]);
        }
    }


}

function holaaaa() {
    console.log('hola guacho');
}