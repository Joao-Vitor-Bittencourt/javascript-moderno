// Ao usarmos template strings tudo que estiver dentro das chaves será interpretado como javascript

console.log(`Seja bem ${ Math.random() > 0.5 ? 'vinda' : 'vindo' } `);