class NodoBinario {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class ArbolBinario {
    static esIgual(root1, root2) {
        if (root1 === null && root2 === null) {
            return true;
        }
        if (root1 === null || root2 === null) {
            return false;
        }
        return (root1.value === root2.value) &&
            ArbolBinario.esIgual(root1.left, root2.left) &&
            ArbolBinario.esIgual(root1.right, root2.right);
    }
}

const arbol1 = new NodoBinario(1);
arbol1.left = new NodoBinario(2);
arbol1.right = new NodoBinario(3);
arbol1.left.left = new NodoBinario(4);
arbol1.right.right = new NodoBinario(5);

const arbol2 = new NodoBinario(1);
arbol2.left = new NodoBinario(2);
arbol2.right = new NodoBinario(3);
arbol2.left.left = new NodoBinario(4);
arbol2.right.right = new NodoBinario(5);

const arbol3 = new NodoBinario(1);
arbol3.left = new NodoBinario(2);
arbol3.right = new NodoBinario(3);
arbol3.left.left = new NodoBinario(4);


// comparando los arboles binarios

console.log(ArbolBinario.esIgual(arbol1, arbol2));
console.log(ArbolBinario.esIgual(arbol1, arbol3));
