//  Then & Catch

const api = new Promise((resolve, reject) => {
//  console.log('dentro da promise');
  setTimeout(() => {
    // resolve('Sucesso!');
    reject('Erro!');
  }, 2000 )
});

api
  .then((resposta) => {
    console.log(resposta);
    
  })
  .catch((erro) => {
    console.log(erro);
  })

  console.log('Depois da promise (.then e .catch)')
  
//  Async & Await

const apiCall = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucesso!');
    // reject('Erro!');
  }, 2000 )
});

async function run() {
  try {
    const resposta = await apiCall;
    console.log('Depois da promise (async e await)')
    console.log(resposta);
  } catch (erro) {
    console.log(erro)
  }
}

run();

// A diferença entre os dois é que ao usarmos o async ele trava o nosso código até que a nossa promise seja resolvida, no then e catch a nossa promise será executada em background e continuará a execução do nosso código.