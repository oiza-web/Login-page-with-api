$(document).ready(function(){
  $("#postForm").submit(function(e){
    e.preventDefault();
    
    var email= $("#email-input").val();
    var password = $("#password-input").val();
    var url = $(this).attr("action");
    
    $.post(url, { "email":email, "password":password })
      .done(function(data){
        console.log("success");
        console.log(data);
        window.location.href = "admin.html" })
      .fail(function(error) {
        console.log("Invalid login credentials");
        $( ".login-error" ).append( "<p>Invalid login credentials</div>" ).css({"color":"red","font-size":"small"});
        $(".input-box").css("border-color", "red");
      });
  });
});