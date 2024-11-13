/*Trazido do html para o corpo do js*/
$(document).ready(function(){
    /*ID carousel foi inserdo corretamente com -images*/
    $('#carousel-images').slick({
            autoplay: true,
            arrows: false
    })
})

/*Foram corridas as escritas de .mascara to .mask*/
$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
})

/*Foram corrgidas as escritas de requerido para required*/
$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
    },
/*Inserndo mensagens referentes aos campos do formulário*/
    messages:{
        nome: 'Please, insert your full name',
        email: 'Please, insert a valid email address',
        telefone: 'Please, insert your phone number',
        endereco: 'Please, insert your address',
        cep: 'Please, insert a valid zip code',
        cpf: 'Please, insert your CPF',
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })