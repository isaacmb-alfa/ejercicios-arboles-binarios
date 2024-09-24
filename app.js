class Nodo {
    constructor(valor){
        this.valor = valor;
        this.left = null;
        this.right = null;
    }
    agregarValor(valor){
        if(valor < this.valor){
            this.agregarValorIzquierda(valor);
        } else {
            this.agregarValorDerecha(valor);
        }
    }
    agregarValorIzquierda(valor){
        if (this.left) {
            this.left.agregarValorIzquierda(valor);
        } else {
            this.left = new Nodo(valor);
        }
    }
    agregarValorDerecha(valor){
        if (this.right) {
            this.right.agregarValorDerecha(valor);
        } else {
            this.right = new Nodo(valor);
        }
    }
}

const cabeza = new Nodo(20);

cabeza.agregarValor(19);
cabeza.agregarValor(19);
cabeza.agregarValor(20);
cabeza.agregarValor(1);

console.log(cabeza);
