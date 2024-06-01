texto = "Hola como estas?"
caracter = "e"

encontrado = False

for i in range(len(texto)):
    if texto[i] == caracter:
        print(f"El caracter '{caracter}' se encontro en la posicion {i}")
        encontrado = True
        break

if not encontrado:
    print(f"El caracter '{caracter}' no se encontro en el texto")