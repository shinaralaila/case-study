$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
    });
    $("#btn").click(function () {

        var uname = $("#exampleInputEmail1").val();
        var error0 = $("#error0");
        var error = $("#error");
        var pwd = $("#exampleInputPassword1").val();
        var a = "admin";
        var n = 12345;
        if (uname == a && pwd == n) {
            $("#form").load("main.html");
        }
        else {
            alert("Username or Password is incorrect")
        };
    });
});