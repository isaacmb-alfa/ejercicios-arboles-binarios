class ArbolDeNodos{
    constructor(valor){
        this.valor = valor;
        this.left = null;
        this.right = null;
    }
}

class ArbolBinarioNiveles {
    static contarNiveles(arbol){
        if(arbol === null){
            return 0;
        }
        if(arbol.left === null && arbol.right === null){
            return 1;
        }
        return ArbolBinarioNiveles.contarNiveles(arbol.left) + ArbolBinarioNiveles.contarNiveles(arbol.right);
    }
}

const arbol1 = new ArbolDeNodos(1);
arbol1.left = new ArbolDeNodos(2);
arbol1.right = new ArbolDeNodos(3);
arbol1.left.left = new ArbolDeNodos(4);
arbol1.left.right = new ArbolDeNodos(5);
console.log(arbol1);

console.log("Número de hojas en el árbol 1:", ArbolBinarioNiveles.contarNiveles(arbol1));

const arbol2 = new ArbolDeNodos(10);
arbol2.left = new ArbolDeNodos(20);
arbol2.right = new ArbolDeNodos(30);
arbol2.left.left = new ArbolDeNodos(40);
arbol2.left.right = new ArbolDeNodos(50);
arbol2.right.left = new ArbolDeNodos(60);
arbol2.right.right = new ArbolDeNodos(70);
arbol2.left.left.left = new ArbolDeNodos(80);
console.log(arbol1);

console.log("Número de hojas en el árbol 2:", ArbolBinarioNiveles.contarNiveles(arbol2));