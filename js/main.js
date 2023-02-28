$(document).ready(function () {
    $('#CPF').mask('000-000-000-00')
    $('#Telefone').mask('(00) 00000-0000')
    $('#CEP').mask('00000-000')
    $('form').validate({
        rules: {
            Nome: {
                required: true
            },
            Email: {
                required: true,
                email: true
            },
            Telefone: {
                required: true
            },
            CPF: {
                required: true
            },
            Endereco: {
                required: true
            },
            CEP: {
                required: true
            }
        },
        messages: {
                Nome: 'Por favor, insira seu nome.',
                Email: 'Este campo é obrigatório',
                Telefone: 'Este campo é obrigatório',
                CPF: 'Este campo é obrigatório',
                Endereco: 'Este campo é obrigatório',
                CEP: 'Este campo é obrigatório'
            }
    })
})