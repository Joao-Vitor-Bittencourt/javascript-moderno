//  Uso a keyword function
//  Usando a keyword function a função tem seu próprio objeto this
function minhaFuncao() { 
  this.name = 'Mateus'
};

// Utilizando o new a gente está atribuindo um construtor à nossa função, um construtor basicamente transforma nossa função em um objeto.
console.log(new minhaFuncao());

//  Para ser nomeada tem de ser armazenada em uma variavel
//  Usando a arrow function, usa o this do contexto em que foi criado

//  Não podemos atribuir um construtor à uma arrow function.
const minhaArrowFuncao = () => {

};

//Exemplo 1

function myFunctionExample1() {
  this.name = 'João'
}

const myArrowFunction = () => {
  this.lastname = 'Bittencourt'
}

// Temos de usar o construtor para que a função tenha seu próprio this.
console.log(new myFunctionExample1());
// Aqui executamos a arrow function no nosso escopo global, que nesse caso o contexto é o node, então ao logarmos o this, lá está nossa propriedade.
myArrowFunction();
console.log(this);

//Exemplo 2

function myFunctionExample2() {
  this.name = 'João'

  const myArrowFunction = () => {
    this.lastname = 'Bittencourt'
  }

  myArrowFunction();
}

// Já aqui, como nossa arrow function está no contexto da nossa função, ela usará o objeto this da função.

console.log(new myFunctionExample2());