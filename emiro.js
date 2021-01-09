const numeros = [1, 2, 3, 4, 5, 6];

const emiro = {    

    eForEach: function (array,fn) {
        for (let i = 0; i < array.length; i++){
            fn(array[i]);
        }
    },

    eFilter: function (array, fn) {
        let arrayResponse = [];
        for (let i = 0; i < array.length; i++){
            if (fn(array[i])){
                arrayResponse.push(array[i])
            }        
        }
        return arrayResponse;
    },

    eMap: function (array, fn) {
        let arrayResponse =[];
        for (let i = 0; i < array.length; i++){
            arrayResponse.push(fn(array[i]))
        }
        return arrayResponse;  
    },

    eFind: function (array,fn) {
        for (let i = 0; i < array.length; i++){
            if (fn(array[i])){
                return array[i];
            }
        } 
    },

    eFindIndex: function (array, fn) {
        for (let i = 0; i < array.length; i++){
            if(fn(array[i])){
                return i;
            }
        }
        return -1;
    },

    eContain: function (array,x,j) {
        let aux = -1;
        aux = emiro.eFindIndex(array,(element) => element === x);
        if(aux<j){
            return false;
        }
        if(aux !== -1){
            return true;
        }
        return false;
    },

    ePluck: function (array,propertyName) {
        let arrayResponse = [];
        for (let i = 0; i < array.length; i++) {
            arrayResponse.push(array[i][propertyName]);        
        }
        return arrayResponse;  
    },

    eWithout: function (params) {
        let arrayRecived = arguments[0];
        let arrayResponse = [];
        
        for (let i = 0; i < arrayRecived.length; i++) {
            
            let aux = false;
            for (let j = 1; j < arguments.length; j++) {
                if(arrayRecived[i] === arguments[j]){
                    aux = true;
                }
            }
            if(aux==false){
                arrayResponse.push(arrayRecived[i]);
            }
        }
        return arrayResponse
               
    }
};

//The forEach() method calls a function once for each element in an array, in order.
//El método forEach() ejecuta una función por cada elemneto en un vector, en orden.

let suma = 0;
function sumar(element){
    suma += element;
}

emiro.eForEach(numeros,sumar);
console.log("suma: "+suma);

// The "filter()" method creates an array filled with all array elements that pass a test (provided as a function).
// El método "filter ()" crea una matriz(vector) llena de todos los elementos de la matriz(vector) que pasan una prueba (proporcionada como función).

function mayTres(element){
    return element > 3
}

const vFilter = emiro.eFilter(numeros,mayTres);
console.log("filtro mayor a 3: "+vFilter);

// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.

// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// El método map () llama a la función proporcionada una vez para cada elemento del array, en orden.

function cuadrado(element){
    return (element*element);
}
const vMap = emiro.eMap(numeros,cuadrado);
console.log("cuadrados: "+vMap);

// The find() method returns the value of the first element in an array that pass a test (provided as a function).
// The find() method executes the function once for each element present in the array:
// If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
// Otherwise it returns undefined

// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.


const vFind = emiro.eFind(numeros,(element)=>element>3);
console.log("primer número mayor a 3: "+vFind);

// The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).

// The findIndex() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
// Otherwise it returns -1

// El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

const vFindIndex = emiro.eFindIndex(numeros,(element)=>element>4);
console.log("index primer número mayor a 4: "+vFindIndex);

// Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.

// Devuelve verdadero si el valor está presente en la lista. Utiliza "indexOf" internamente, si la lista es una matriz. Utilice "fromIndex" para comenzar su búsqueda en un índice determinado.

const vContain = emiro.eContain(numeros,2,3);
console.log("contiene al 2 despues del inidice 3?: "+vContain);

// pluck: _.pluck(list, propertyName)
// A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.

// Una versión conveniente de lo que quizás sea el caso de uso más común para map: extraer una lista de valores de propiedad.

const vObjetos = [{name:"emiro",age: "29"},{name:"luis",age: "30"},{name:"andrés",age: "31"}];
console.log(emiro.ePluck(vObjetos,"name"));

// without: _.without(array, *values)
// Returns a copy of the array with all instances of the values removed.
// Devuelve una copia de la matriz con todas las instancias de los valores eliminados.

console.log(emiro.eWithout(numeros,2,3,4,5));