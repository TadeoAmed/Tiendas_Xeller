// Importación de módulos
const fs = require('fs')
const util = require('util')

// Lectura de archivo de tiendas
let input = fs.readFileSync('C:/Users/Nico/Desktop/Xeller/in/input.txt','utf-8')

// Volcado a un array de cada linea del archivo de tiendas (split por retorno de carro).
//  Queda una tienda en c/posición del array
let vecInput = input.split('\n')

// Volcado a un array de cada dato de cada tienda.
//  Queda un array de array (split por punto y coma)
let aux = []
for(let i=0 ; i<vecInput.length ; i++){
    aux.push(vecInput[i].split(';'))
}

// Generación de un objeto por tienda que se pushea en un array
var tiendas = []
function insertar(objTienda){
    tiendas.push(objTienda)
}
for(let j=0 ; j<aux.length-1 ; j++){
    const tienda = {}
    let x = 0
    tienda['CodigoERP']=aux[j][x]
    tienda['Nombre']=aux[j][x+1]
    tienda['Codigo']=aux[j][x+2]
    tienda['Direccion']=aux[j][x+3]
    tienda['Activo']=Boolean(aux[j][x+4].substring(0,4))
    insertar(tienda)
}

// Generación de objeto a volcar en output.json.
//  Contiene un elemento: el array de tiendas
var objTiendas = {'Tiendas':tiendas}

// Escritura de output.json
fs.writeFileSync('C:/Users/Nico/Desktop/Xeller/out/output.json',
JSON.stringify(objTiendas,null,4))