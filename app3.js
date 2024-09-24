class ArbolDeNodos {
    constructor(valor){
        this.valor = valor;
        this.left = null;
        this.right = null;
    }
}
class CrearCopiaArbol{
    static copiarArbol(arbol){
        if(arbol === null){
            return null;
        }
        let newArbol = new ArbolDeNodos(arbol.valor);
        newArbol.left = CrearCopiaArbol.copiarArbol(arbol.left);
        newArbol.right = CrearCopiaArbol.copiarArbol(arbol.right);
        return newArbol;
    }
}

let arbol = new ArbolDeNodos(1);
arbol.left = new ArbolDeNodos(2)
arbol.right = new ArbolDeNodos(3);
arbol.left.left = new ArbolDeNodos(4);
arbol.right.right = new ArbolDeNodos(5);

let copiaArbol = CrearCopiaArbol.copiarArbol(arbol);

console.log(copiaArbol);
