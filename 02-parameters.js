
//Atribuimos um valor ao parâmetro para que ele seja usado caso o usuário não informe nenhum valor na chamada da função.

function printGreetings(message = 'Mensagem padrão') {
  console.log(message)
}

printGreetings();