
function checkAll() {
    // window.alert("hi");
    let user = document.getElementById("uid").value;
    let regEmail = "^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$";

    if (user === "") {
        // window.alert("user id is requied");
        document.getElementById("uidErr").innerHTML = "user id is requied ";
        document.getElementById("uidErr").style.color = "red";
        return false;
    } else if (!user.match(regEmail)) {
        document.getElementById("uidErr").innerHTML = "user id must be in proper formate";
        document.getElementById("uidErr").style.color = "red";
        return false;
    } else {
        document.getElementById("uidErr").innerHTML = "valid User Id";
        document.getElementById("uidErr").style.color = "green";
        return false;
    }
}

function checkPass() {
    let userpwd = document.getElementById("pass").value;
    let regPassword = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
    if (userpwd == "") {
        // window.alert("hi")
        // console.log("hi")
        document.getElementById("uPswd").innerHTML = "password is requied";
        document.getElementById("uPswd").style.color = "red";
        return false;
    }
    else if (!userpwd.match(regPassword)) {
        document.getElementById("uPswd").innerHTML = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
        document.getElementById("uPswd").style.color = "red";
        return false;
    } else {
        document.getElementById("uPswd").innerHTML = "valid password";
        document.getElementById("uPswd").style.color = "green";
        return false;
    }



}

function CheckSelect(){
    if(course===""){
        document.getElementById("ucourse").innerHTML = "this field required";
        document.getElementById("ucourse").style.color = "red";
         return false;
      }
}
