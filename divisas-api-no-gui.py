#from flask import Flask, render_template
import requests
import os
import currencyapicom

#Limpiamos terminal antes de comenzar
os.system("cls")
#Definimos las opciones a la variable "choice"
choice = input(f'Seleccione una opción:, Presione\n F - FastForex\n C - CurrencyApi\n D - CurrencyApi\n A - ApiVerve\n S - Salir:\n ')

if choice.upper() == 'F':
    os.system("cls")
    apikey = "42e1f6bd1c-cab594ea40-slw03x"
    url = "https://api.fastforex.io/fetch-one?from="
    url1 = "&api_key=" + apikey

    base = input("Introduce divisa base: ")
    cant = int(input("Introduce cantidad: "))
    div = input("Introduce divisa a convertir: ")
    origen = url + base + "&to=" + div + url1

    try:
        resp = requests.get(origen)
        data = resp.json()
        divisas = data["result"]
    except:
        print("Ha ocurrido un error")

    if div.upper() in divisas.keys():
        result = divisas[div.upper()] * cant
        print(f"Resultado: $ {result}")

elif choice.upper() == 'C':
    os.system("cls")
    apikey = "cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q"
    base = input("Introduce divisa base: ")
    cant = int(input("Introduce cantidad: "))
    div = input("Introduce divisa a convertir: ")

    try:
        client = currencyapicom.Client(apikey)
        result1 = client.latest(base.upper(),currencies=[div.upper()])
        datos = result1["data"]
        datos1 = datos[div.upper()]
        divisas = datos1["value"]
        #print(divisas)
    except:
        print("Ha ocurrido un error")
        # print('You are a Hockey player!')

    #if div.upper() in divisas.keys():
    if div.upper() in datos.keys():
        #result = divisas[div.upper()] * cant
        result = divisas * cant
        print(f"Resultado: $ {result}")

elif choice.upper() == 'D':
    os.system("cls")
    apikey = "cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q"
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_UKoZAkSaznM6h9ynTnQdQlrunGJb6wIzHMlWs61q&currencies="
    url1 = "&base_currency="

    base = input("Introduce divisa base: ")
    cant = int(input("Introduce cantidad: "))
    div = input("Introduce divisa a convertir: ")
    origen = url + div.upper() + url1 + base.upper()

    try:
        resp = requests.get(origen)
        data = resp.json()
        datos = data["data"]
        datos1 = datos[div.upper()]
        divisas = datos1["value"]
        print(data)
        print(datos)
        print(datos1)
        print(divisas)
    except:
        print("Ha ocurrido un error")

    if div.upper() in datos.keys():
        result = divisas * cant
        print(f"Resultado: $ {result}")
elif choice.upper() == 'A':
    os.system("cls")
    apikey = "b5dde781-7fd0-4dde-80e2-f2939cc785b9"
    url = "https://api.apiverve.com/v1/currencyconverter?value="
    base = input("Introduce divisa base: ")
    #cant = decimal.Decimal(inp3.get())
    cant = int(input("Introduce cantidad: "))
    div = input("Introduce divisa a convertir: ")
    origen = url + str(cant) + '&from=' + base.upper() + '&to=' + div.upper()
    headers = {
        "x-api-key": apikey,
	    "Accept": "application/json"
    }
    try:
        resp = requests.get(origen, headers=headers)
        data = resp.json()
        datos = data["data"]
        datos1 = datos["to"]
        divisas = datos["convertedValue"]
    except:
        print("Ha ocurrido un error")
    if div.upper() in datos1:
        result = '{:.4f}'.format(divisas)
        #devolvemos el resultado obtenido
        #return result
        print(f"Resultado: $ {result}")
elif choice.upper() == 'S':
    os.system("cls")
    exit()
else:
    #limpiamos terminal al elegir opcion
    os.system("cls")
    #imprimimos la seleccion
    print('No has seleccionado nada!')