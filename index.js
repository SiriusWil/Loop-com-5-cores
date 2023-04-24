let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

function imprimirNumeros() {
  let numero = parseInt(document.getElementById('numero').value)
  let cores = ['success', 'warning', 'info', 'danger', 'primary', 'secondary'] // cores adicionais
  let corIndex = 0 // índice da cor atual
  if (numero < 10) {
    for (let i = 20; i >= numero; i--) {
      let corAtual = cores[corIndex % cores.length] // seleciona a próxima cor
      div.innerHTML += `<p class="alert alert-${corAtual}">${i}</p>`
      corIndex++
    }
  } else {
    alert('Erro... digite um numero menor que 10!')
  }
}

btn.addEventListener('click', imprimirNumeros)

