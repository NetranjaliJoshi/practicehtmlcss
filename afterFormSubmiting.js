
function checkAll(){
   
//  var uname = document.getElementById("fname").value;
var uname = document.myform.fname.value;
var ucourse = document.myform.course.value;
var uemail = document.myform.email.value;
var upass = document.myform.pass.value;
 var regname = "^[a-zA-Z ]{5,20}$";
 var regemail = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
 var regpass = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

 var uedu = document.myform.edu;

 var ucourse = document.myform.course.value;
 if(uname===""){
   window.alert("FullName  field is required");
   document.getElementById("fname").focus();
   return false;
 }
 if(!uname.match(regname)){
    window.alert("FullName must contain only character min-5 and max-20");
    document.getElementById("fname").focus();
    return false;
 }
 if(upass==="")
 {
   window.alert("Password is required");
   document.getElementById("pass").focus();
   return false;
 }
 if(!upass.match(regpass))
 {
   window.alert("Password must contain minimum eight characters, at least one letter, one number and one special character:");
   document.getElementById("pass").focus();
   return false;
 }
 if(uemail==="")
 {
   window.alert("Email is required");
   document.getElementById("email").focus();
   return false;
 }
 if(!uemail.match(regemail))
 {
   window.alert("Email should contain at least one charecter , one symbol , and number")
   document.getElementById("email".focus);
   return false;
 }

 if(uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false && uedu[3].checked==false){
    window.alert("Please select Your Qualification");
    
    return false;
 }
 if(ucourse===""){
    window.alert("Please select your course");
    document.getElementById("course").focus();
    return false;
  }
}