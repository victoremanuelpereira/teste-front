function enviar() {

    let cliente = document.getElementById('name');
    let texto = cliente.innerHTML;
    let resultado = texto.replace('#cliente_razao#', 'Victor Emanuel Pereira Arantes');

    cliente.innerHTML = resultado;

    alert('Documento Enviado')
}
