const user = {
  firstName: 'Joao',
  lastName: 'Bittencourt',
  age: 19,
  instagram: '@oaoJoao_',
  skills: ['Varias', 'Algumas', 'Contando']
}

//Rest (rest) operator - sempre precisa ser o ultimo elemento da desestruturação.

const { firstName, skills, ...resto } = user;
const [ primary, ...outrasSkills ] = skills;

console.log(resto, outrasSkills);