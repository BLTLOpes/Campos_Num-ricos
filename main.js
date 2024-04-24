const form = document.getElementById('form-campos');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');


form.addEventListener('submit', function(e) {
    e.preventDefault();

validaNumeros();
})


    function validaNumeros(){

    const nA = campoA.value;
    const nB = campoB.value; 
    const containerMensagem = document.querySelector('.mensagem');
    const mensagemPositiva = `Muito Bom! Campo B: <b>${campoB.value}</b> é maior que Campo A: <b>${campoA.value}</b>`;
    const mensagemNegativa = `O <b>campo B</b> tem que se maior que o <b>campo A</b>`;
    const mensagemDeNumerosIguais = `<b>Números Inválidos</b>`
    
    if(nB > nA) { 

        containerMensagem.innerHTML = mensagemPositiva;
        containerMensagem.style.display = 'block'
        containerMensagem.style.backgroundColor = 'green';
        campoA.value = '';
        campoB.value = '';

    } else {

        containerMensagem.innerHTML = mensagemNegativa;
        containerMensagem.style.display = 'block';
        containerMensagem.style.backgroundColor = 'red';
        campoA.value = '';
        campoB.value = '';

    } if(nB == nA) {
        containerMensagem.innerHTML = mensagemDeNumerosIguais;
        containerMensagem.display = "block"
    }
}
