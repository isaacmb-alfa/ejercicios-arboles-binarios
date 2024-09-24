class ArbolDeNodos {
    constructor(valor){
        this.valor = valor;
        this.left = null;
        this.right = null;
    }
}
class ArbolBinarioNivel{
    static imprimirNivel(arbol, nivel){
        if(arbol === null){
            return;
        }
        if (nivel === 1) {
            console.log(arbol.valor);
        } else if (nivel > 1){
            ArbolBinarioNivel.imprimirNivel(arbol.left, nivel - 1);
            ArbolBinarioNivel.imprimirNivel(arbol.right, nivel - 1);
        }
    }
}

const arbol = new ArbolDeNodos(1);
arbol.left = new ArbolDeNodos(2);
arbol.right = new ArbolDeNodos(3);
arbol.left.left = new ArbolDeNodos(4);
arbol.left.right = new ArbolDeNodos(5);
arbol.right.left = new ArbolDeNodos(6);
arbol.right.right = new ArbolDeNodos(7);

console.log(arbol);


console.log('Nodos de nivel 1');
ArbolBinarioNivel.imprimirNivel(arbol, 1);

console.log('Nodos de nivel 2');
ArbolBinarioNivel.imprimirNivel(arbol, 2);

console.log('Nodos de nivel 3');
ArbolBinarioNivel.imprimirNivel(arbol, 3);
