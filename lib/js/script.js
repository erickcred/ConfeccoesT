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
    })

})