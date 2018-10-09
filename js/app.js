let form = document.querySelector("#form1");
let email = document.querySelector("#email1");
let inputs = document.getElementsByTagName("inputs");

console.log(inputs);

form.addEventListener("submit", function (e) {
    e.preventDefault()

    $.ajax({
        url: "reg.php",
        type: "GET", // Post not working on localhost
        data: $("#form1").serialize(),
        contentType: false,       
        cache: false,             
        processData:false,     
        crossDomain: true,
        success: function(res){
            form.reset();

            $(".alert-success").show();
            setTimeout(function () {
                $(".alert").hide();
            }, 5000);
        },
        error: function (res) {
            $(".alert-danger").show();
            setTimeout(function () {
                $(".alert").hide();
            }, 5000);
        }
      });
});