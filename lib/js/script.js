$(document).ready(() => {

    $(this).scroll(() => {
        if ($(this).scrollTop() > 500) {
            // $("#upsite").toggle();
            $("#upsite").css("display", "block");
        } else {
            $("#upsite").css("display", "none");
        }
    });
    $("#upsite").click(() => {
        $(this).scrollTop(0);
    });

    // Validação form
    $("#formcontato").validate({
        rules: {
            nome: {
                required: true,
                minlength: 10,
                maxlength: 100
            },
            telefone: { required: true },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nome: {
                required: "Esse campo é obrigatório!",
                minlength: "Por favor, informe o seu <strong>nome completo</strong>!",
                maxlength: "Maximo de <strong>100</strong> carateres"
            },
            telefone: {
                required: "Esse campo é obrigatório!",
            },
            email: {
                required: "Esse campo é obrigatório!",
                email: "Esse não parece ser um e-mail <strong>valido</strong>"
            }
        },
        submitHandler: (form) => {
            $("#formMessageOk").show();
        },
        invalidHandler: (evento, validador) => {
            let errors = validador.numberOfInvalids();

            // $(validador.currentElements).addClass("alert alert-danger");
            // $("label.error").addClass("alert alert-danger");
            // console.log(evento)

        }
    });


    $("input#telefone").mask("(00) 0 0000-0000", {
        placeholder: "(41) 9  9999-0098"
    });
})