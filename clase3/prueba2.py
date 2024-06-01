texto = "Hola como estas?"
caracter = "o"
posicion = texto.find(caracter)
if posicion != -1:
    print(f"El caracter '{caracter}' se encontro en la posicion {posicion}")
else:
    print(f"El caracter '{caracter}' no se encontro en el texto")