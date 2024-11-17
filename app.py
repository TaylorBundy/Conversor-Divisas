from flask import Flask, render_template, request, url_for
import requests
import json
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
#from boltiot import Bolt
import cgi
from requests_html import HTMLSession
from pprint import pprint

#import os
#import currencyapicom
#from jinja2 import Template
session = HTMLSession()

keys = ['DivBase',
        'DivConv',        
        'DivCant']

""" def get_input_value_by_name(content, name):
    soup = BeautifulSoup(content, 'lxml')
    value = soup.find('input', {'name': name}).get('value', None)

    return value """

def get_all_forms(url):
    # Returns all form tags found on a web page's `url` 
    # GET request
    res = session.get(url)
    # for javascript driven website
    # res.html.render()
    soup = BeautifulSoup(res.content, "html.parser")
    print(soup.find_all("form"))
    return soup.find_all("form")

def get_form_details(form):
    """Returns the HTML details of a form,
    including action, method and list of form controls (inputs, etc)"""
    details = {}
    # get the form action (requested URL)
    action = form.attrs.get("action")
    if action:
        action = action.lower()
    # get the form method (POST, GET, DELETE, etc)
    # if not specified, GET is the default in HTML
    method = form.attrs.get("method", "get").lower()
    # get all form inputs
    inputs = []
    for input_tag in form.find_all("input"):
        # get type of input form control
        input_type = input_tag.attrs.get("type", "text")
        # get name attribute
        input_name = input_tag.attrs.get("name")
        # get the default value of that input tag
        input_value =input_tag.attrs.get("value", "")
        # add everything to that list
        inputs.append({"type": input_type, "name": input_name, "value": input_value})
    for select in form.find_all("select"):
        # get the name attribute
        select_name = select.attrs.get("name")
        # set the type as select
        select_type = "select"
        select_options = []
        # the default select value
        select_default_value = ""
        # iterate over options and get the value of each
        for select_option in select.find_all("option"):
            # get the option value used to submit the form
            option_value = select_option.attrs.get("value")
            if option_value:
                select_options.append(option_value)
                if select_option.attrs.get("selected"):
                    # if 'selected' attribute is set, set this option as default    
                    select_default_value = option_value
        if not select_default_value and select_options:
            # if the default is not set, and there are options, take the first option as default
            select_default_value = select_options[0]
        # add the select to the inputs list
        inputs.append({"type": select_type, "name": select_name, "values": select_options, "value": select_default_value})
    for textarea in form.find_all("textarea"):
        # get the name attribute
        textarea_name = textarea.attrs.get("name")
        # set the type as textarea
        textarea_type = "textarea"
        # get the textarea value
        textarea_value = textarea.attrs.get("value", "")
        # add the textarea to the inputs list
        inputs.append({"type": textarea_type, "name": textarea_name, "value": textarea_value})
        
    # put everything to the resulting dictionary
    details["action"] = action
    details["method"] = method
    details["inputs"] = inputs
    return details

app = Flask(__name__)

""" @app.route('/')
def my_form():
    #hola = request.form['divBase']
    #print(hola)
    return render_template('index.html') """

@app.route('/',methods = ['GET'])
def show_index():
    return render_template('index.html')

"""
@app.route('/', methods=['POST'])
def my_form_post():
    text = request.form['divCant']
    processed_text = text.upper()
    print(processed_text)
    return processed_text """

""" @app.route('/data.html', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # getting input with name = fname in HTML form
        hola = request.args.get('divBase')
        #first_name = request.form.get('divBase')
        divConv = request.form.get('divConv')
        
        first_name = request.form.get("divBase")
        data = request.form
        # getting input with name = lname in HTML form 
        #last_name = request.form.get("divConv") 
        #last_name = request.form['divConv']
        print(f"first_name: {first_name}")
        #print(first_name1)
        #print(f"hola: {hola}")
        #print(f"request:  {request.path}")
        #return "Your name is "+first_name + last_name
        #return (request.form['divBase'])
        #return f'{hola}, your username is {divConv}, hola {first_name}'
        return render_template('data.html', data=data) """

#@app.post('/')
@app.route('/', methods=['GET', 'POST'])
def index():
     if request.method == 'POST':
        url = 'http://localhost:5000'
        nombre = requests.get(url).text
        driver = webdriver.Chrome()
        form1 = cgi.FieldStorage()
        #datos = form1.getvalue('divBase')
        #print(datos)
        forms = get_all_forms(url)
        for i, form in enumerate(forms, start=1):
            form_details = get_form_details(form)
            print("="*50, f"form #{i}", "="*50)
            print(form_details)
        #print(forms)
        #rrr = requests.post(url)
        #print(rrr)
        #response = requests.get(url)
        #soup = BeautifulSoup(nombre.text, 'html.parser')
        #soup = BeautifulSoup(nombre.text, 'lxml')
        soup = BeautifulSoup(nombre, 'lxml')
        #soup = BeautifulSoup(nombre.content, 'html.parser')
        driver.get(url)
        text_input = driver.find_element(By.ID, 'DivBase')
        #text_input.send_keys('hola')
        #data = text_input.get_attribute('value')
        #pepe = request.form['DivBase']
        #print(text_input)
        coso = soup.find(id = 'DivBase')
        print(f"coso: {coso}")
        print(f"inputs: {text_input}")
        #print(f"data: {data}")
        
        #name = request.form.get('DivBase')
        """ for x in keys:
            #resultados = soup.find(id = x)
            #print(resultados.get('value'))
            #print(resultados)
            #lala = soup.get_text
            
            
            try:
                #value = soup.find(id = x)
                #value = soup.find('input', {'id': x}).get('value', 0)
                #inputs=soup.find('input', {'id': x})
                #nnn = request.form.get(x)
                #print(f"nnn: {nnn}")
                #print(nnn)
                text_input = driver.find_element_by_id(x)
                #print(text_input)
                print(f"inputs: {text_input}")
                #value = soup.find('input', {'id': x}).get('value')
            except:
                #value = soup.find('input', {'id': 'DivBase'}).get('value')
                value = "mmm" """
            
            
                
        #print(f"value: {value}")
        #print(f"inputs: {inputs}")
        
        driver.quit()
        #print(f"nnn: {nnn}")
            
        """ DivBase = soup.find(id = 'DivBase')
        DivConv = soup.find(id = 'DivConv')
        DivCant = soup.find(id = 'DivCant')
        print (f"DivBase: {DivBase.get('value')}")
        print (f"DivConv: {DivConv.get('value')}")
        print (f"DivCant: {DivCant.get('value')}") """
        #nombre = requests.get('http://localhost:5000')
        
        #data = nombre.json()
        #print(data)
        #data = request.get_json()
        #print(nombre.text)
        #print(data)
        #name = "Martin"
        #username = request.form.get('username')
        #nombre = "125"
        #divBase = request.form.get("divBase")
        #divConv = request.form.get("divConv")
        #divCant = request.form.get("divCant")
        #nombre = request.form['divCant']
        #nombre = request.form.get("divBase")   
        #hola = request.args.get('divBase')     
        #print(nombre)
        #mytext = request.form["api"]
        #print(mytext)
        #hola = request.form["api"]
        #print(hola)
        #return "Hola"
        #return f'{name}, your username is {username}'
        # return f'your divbase is {DivBase}, divconv is {DivConv}, divcant is {DivCant}'
     return render_template("index.html")
     #return 'hola'
    #return render_template("index.html")
    #print(mytext)

# Creating a route that has both GET and POST request methods
""" @app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        name = request.form.get('name')
        username = request.form.get('username')
        
        return f'{name}, your username is {username}'
    return render_template('index.html') """

""" @app.route('/', methods=['GET', 'POST'])
def form():
    hola = request.form["api"]
    print(hola)
    return render_template('index.html')

@app.route('/hello', methods=['GET', 'POST'])
def hello():
    hola = request.form["api"]
    print(hola)
    return render_template('index.html', say=request.form['api'], to=request.form['to']) """

if __name__ == "__main__":
    app.run(debug=True)


""" 
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
    print('No has seleccionado nada!') """