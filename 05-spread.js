const user = {
  firstName: 'Joao',
  lastName: 'Bittencourt',
  age: 19,
  instagram: '@oaoJoao_',
  skills: ['Varias', 'Algumas', 'Contando'],
  active: false
}

//Spread (espalhar) operator

const updatedUser = {
  ...user,
  skills: [...user.skills, 'Soma'],
  active: true,
}

//usamos para copiar todas as propriedades de um objeto ou array.

console.log(user);
console.log(updatedUser);