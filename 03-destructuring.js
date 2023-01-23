const user = {
  firstName: 'Joao',
  lastName: 'Bittencourt',
  age: 19,
  instagram: '@oaoJoao_',
  skills: ['Varias', 'Algumas', 'Contando']
}

//Metodo Comum

const userFirstName = user.firstName;
const userAge = user.age;

console.log(userFirstName, userAge);

//Destructuring

const { firstName, age } = user;

console.log(firstName, age);

// É importante mencionar que ao usarmos a desestruturação o nome que colocamos dentro das chaves tem de ser exatamente o nome da propriedade do nosso objeto.

//Também podemos desestruturar um array, mas ao invés de usarmos o nome da propriedade, escolhemos um nome para as posições

const { skills } = user;

const [ primeiraPosição, segundaPosição ] = skills;

//Na desestruturação podemos renomear as propriedades

const { instagram: redeSocial } = user;
console.log(redeSocial);