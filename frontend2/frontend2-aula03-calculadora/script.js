const numero1 = parseFloat(prompt('Digite um número:'));
const operador = prompt('digite um operador matemático:');
const numero2 = parseFloat(prompt('Agora, digite outro número:'));

function calculadora(numero1, numero2, operador) {
    console.log({numero1, numero2, operador})
        switch (operador) {
      case '+':
        alert(numero1 + numero2);
        break;
      case '-':
        alert(numero1 - numero2);
        break;
      case '*':
        alert(numero1 * numero2);
        break;
      case '/':
        if (numero2 === 0) {
          alert("Impossível dividir por 0");
        } else {
          alert(numero1 / numero2);
        }
        break;
    }
}

calculadora(numero1, numero2, operador);