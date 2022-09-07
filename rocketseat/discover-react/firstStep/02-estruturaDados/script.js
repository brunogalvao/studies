// const pilotos = [ 'Senna', 'Prost', 'Schummacher', 'Hamilton' ];
// console.log(pilotos.length);

// for ( let piloto of pilotos ) {
//   console.log(piloto);
// }

// pilotos.push('Verstappen');
// console.log(pilotos);

// find
// const senna = pilotos.find(piloto => piloto === 'Senna');

// console.log(senna);

// Deletar um elemento
// pilotos.splice(1, 1);

// console.log('Deletar', pilotos);

//Matriz
// const students = [
//     ['Jose', 23, 'MG'],
//     ['Maria', 22, 'SP'],
//     ['Joao', 21, 'RJ'],
// ]

// console.log('idade', students[0][1]);

// Stack
// Passo 1 - modelagem
// class Stack {
//     constructor() {
//         this.data = []
//         this.top = -1
//     }

//     push(value) {
//         this.top++
//         this.data[this.top] = value

//         return this.data
//     }
//     pop() {
//         if ( this.top < 0 ) return undefined
//         const poppedTop = this.data[this.top]
//         delete this.data[this.top]
//         this.top--
//         return poppedTop
//     }

//     peek() {
//         return this.top >= 0 ? this.data[this.top] : undefined
//     }
// }

// Passo 2 - implementação
// const stack = new Stack();

// // adicionar dados
// stack.push('learning'); 
// stack.push('data'); 

// console.log(stack.push('structures'));

// console.log(stack.peek());

//remover
// stack.pop();
// console.log(stack.pop());

// console.log('sobrou: ', stack.peek());

// Queue
// 1 - Modelagem
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} foi adicionado a fila`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila`)
    }
}

// 2 - Ultilização
const fila = new Queue();

fila.enqueue('Joao');
fila.enqueue('Maria');
fila.enqueue('Igor');

fila.dequeue('Joao');
fila.dequeue('Maria');
fila.dequeue('Igor');