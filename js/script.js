$(function(){
    $("#navb").load("navbar.html");
  });
$(function(){
    $("#nav-placeholder").load("footer.html");
  });
  $(function(){
    $("#sideDiv").load("Polaroid.html");
  });
  // form validation
 let uemail= document.getElementById("email");
 let pass=document.getElementById("psw");
 let cpass=document.getElementById("cpsw");
 let inputtxt=document.getElementById("ph");
 let error=document.getElementById("error");

 $(function formValidate()
{
  var phoneno = /^\d{10}$/;
 var phoneformat= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if((phoneno.test(inputtxt.value)))
        {
        //alert("Invalid phone number")
        inputtxt.focus();
        inputtxt.style.border="2px solid red";
        error.innerHTML="invalid";
        return false;
        }
        else if(inputtxt.value.trim()!=phoneformat)
        {
          inputtxt.focus();
        inputtxt.style.border="2px solid red";
        return false;
        }
        else if(uemail.value.trim()!=mailformat)
        {
          uemail.focus();
          uemail.style.border="2px solid red";
        return false;
        }

        
});

//email
function ValidateEmail()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
//alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}