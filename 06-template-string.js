// Ao usarmos template strings tudo que estiver interpolado será interpretado como javascript

console.log(`Seja bem ${ Math.random() > 0.5 ? 'vinda' : 'vindo' } `);