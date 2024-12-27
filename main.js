/* Ejercico 1
class Nodo {
    constructor(dato) {
        this.dato = dato; // Valor del nodo
        this.izquierdo = null; // Referencia al hijo izquierdo
        this.derecho = null; // Referencia al hijo derecho
    }
}

// Función para verificar si dos árboles binarios son idénticos
function sonIdenticos(arbol1, arbol2) {
    // Caso base: Si ambos nodos son nulos, son idénticos
    if (arbol1 === null && arbol2 === null) {
        return true;
    }

    // Si uno de ellos es nulo y el otro no, no son idénticos
    if (arbol1 === null || arbol2 === null) {
        return false;
    }

    // Comprobar si el valor del nodo actual es igual
    // y si los subárboles izquierdo y derecho también lo son
    return (
        arbol1.dato === arbol2.dato &&
        sonIdenticos(arbol1.izquierdo, arbol2.izquierdo) &&
        sonIdenticos(arbol1.derecho, arbol2.derecho)
    );
}

// Ejemplo de uso

// Crear árbol binario A
const A = new Nodo(1);
A.izquierdo = new Nodo(2);
A.derecho = new Nodo(3);
A.izquierdo.izquierdo = new Nodo(4);
A.izquierdo.derecho = new Nodo(5);

// Crear árbol binario B (idéntico a A)
const B = new Nodo(1);
B.izquierdo = new Nodo(2);
B.derecho = new Nodo(3);
B.izquierdo.izquierdo = new Nodo(4);
B.izquierdo.derecho = new Nodo(5);

// Comparar los árboles
if (sonIdenticos(A, B)) {
    console.log("Los árboles A y B son idénticos.");
} else {
    console.log("Los árboles A y B no son idénticos.");
}

// Crear un árbol binario C diferente a A
const C = new Nodo(1);
C.izquierdo = new Nodo(2);
C.derecho = new Nodo(3);
C.izquierdo.izquierdo = new Nodo(6); // Diferencia aquí
C.izquierdo.derecho = new Nodo(5);

if (sonIdenticos(A, C)) {
    console.log("Los árboles A y C son idénticos.");
} else {
    console.log("Los árboles A y C no son idénticos.");
}*/

/*Ejercicio 2
class Nodo {
    constructor(dato) {
        this.dato = dato; // Valor del nodo
        this.izquierdo = null; // Referencia al hijo izquierdo
        this.derecho = null; // Referencia al hijo derecho
    }
}

// Función para crear una copia de un árbol binario
function copiarArbol(arbol) {
    // Caso base: si el árbol es vacío (null), no hay nada que copiar
    if (arbol === null) {
        return null;
    }

    // Crear un nuevo nodo con el mismo dato
    const nuevoNodo = new Nodo(arbol.dato);

    // Copiar recursivamente los subárboles izquierdo y derecho
    nuevoNodo.izquierdo = copiarArbol(arbol.izquierdo);
    nuevoNodo.derecho = copiarArbol(arbol.derecho);

    // Devolver la copia del árbol
    return nuevoNodo;
}

// Ejemplo de uso

// Crear árbol binario A
const A = new Nodo(1);
A.izquierdo = new Nodo(2);
A.derecho = new Nodo(3);
A.izquierdo.izquierdo = new Nodo(4);
A.izquierdo.derecho = new Nodo(5);

// Crear una copia del árbol A
const B = copiarArbol(A);

// Mostrar los valores de ambos árboles para comparar
console.log("Árbol A:", A);
console.log("Copia del Árbol A (B):", B);*/

//Ejercicio 4
class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.izquierdo = null;
        this.derecho = null;
    }
}

// Función que cuenta el número de hojas en un árbol binario
function contarHojas(arbol) {
    // Si el árbol está vacío, no hay hojas
    if (arbol === null) {
        return 0;
    }

    // Si el nodo no tiene hijos, es una hoja
    if (arbol.izquierdo === null && arbol.derecho === null) {
        return 1;
    }

    // De lo contrario, contamos las hojas de los subárboles izquierdo y derecho
    return contarHojas(arbol.izquierdo) + contarHojas(arbol.derecho);
}

// Crear un árbol binario de ejemplo
const raiz = new Nodo(1);
raiz.izquierdo = new Nodo(2);
raiz.derecho = new Nodo(3);
raiz.izquierdo.izquierdo = new Nodo(4);
raiz.izquierdo.derecho = new Nodo(5);
raiz.derecho.derecho = new Nodo(6);
raiz.izquierdo.izquierdo.izquierdo = new Nodo(7);

// Llamar a la función para contar las hojas
const numeroDeHojas = contarHojas(raiz);
console.log("Número de hojas en el árbol binario:", numeroDeHojas);







