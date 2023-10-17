$(document).ready(function () {

    // this prevents page reload on pressing enter
    $("form").submit(function (event) {
        event.preventDefault();
    });

    // click listener
    $('#btnSignIn').click(function () {
        if ($('input:text').val() == "patioadmin" && $('input:password').val() == "patioadmin@123") {
            window.location.replace("./admin/index.html");
        }
        else if
            ($('input:text').val() == "jjmadmin" && $('input:password').val() == "jjmadmin@123") {
            window.location.replace("./jjm-admin/index.html");
        }
        else if
            ($('input:text').val() == "caller" && $('input:password').val() == "caller@123") {
            window.location.replace("./caller/index.html");
        }
        else {
            alert('Wrong !');
        }
    });

});
