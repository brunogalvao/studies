// ==>> Acionando os pais do elemento
// const element = document.querySelector('h1');

// element.parentNode.classList.add('test')
// element.textContent = 'Hello World';

// console.log(element.parentElement);

//parentNode
//parentElement

// const el = document.querySelector('body');

// console.log(el.firstElementChild);

// childNodes = pega todos os elementos incluindo os espaços em branco

// children = pega todos os elementos sem os espaços em branco

// lastChild / firstChild = pega o primeiro elemento até mesmo os espaços em branco

// lastElementChild / firstElementChild pega o primeiro elemento html sem os espaços em branco


// ==>> Navegando pelos elementos
// const el = document.querySelector('body script');

// console.log(el.nextSibling);
// console.log(el.nextElementSibling);
// console.log(el.previousElementSibling);

// ==>> Criar elemento no html
// const div = document.createElement('div');
// div.innerText = 'Hello World';

// const body = document.querySelector('body');
// body.prepend(div);

// apend = adiciona um elemento no final do elemento

//prepend = adiciona um elemento no inicio do elemento

// ==>> InsertBefore
// const div = document.createElement('div');
// div.innerText = 'Hello World';

// const body = document.querySelector('body');
// // const script = body.querySelector('script');
// const header = body.querySelector('header');

// body.insertBefore(div, header);
// body.insertBefore(div, header.nextSibling); //simulando um insertAfter



// ==>> Eventos

// const h1 = document.querySelector('h1');

// h1.addEventListener('click', print);
// // h1.onclick = print; // outra forma de fazer o mesmo que o addEventListener

// function print () {
//     console.log('Hello World');
// }


// Modal
const btn = document.querySelector('#openModal');

const modalWrapper = document.querySelector('.modal-wrapper');

btn.onclick = function () {
    modalWrapper
        .classList
        .remove('invisible');

}

document.addEventListener('keydown', function (event) {
    const isEscKey = event.key === 'Escape' || event.key === 'Esc';

    if ( isEscKey ) {
        modalWrapper
            .classList
            .add('invisible');
    }
})

