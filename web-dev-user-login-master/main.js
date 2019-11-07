// LOGIN 
// function to check user & password 
function check(form) {
    // the following code checkes whether the entered userid and password are matching
    if (form.user.value == "JohnDoe" && form.pass.value == "123456") {
        // opens the target page while username & password matches
        alert('Succesfully Logged in')
    } else {
        // displays error message  
        alert("Error Password or Username")
    }
}

function myFunction() {
    var x = document.getElementsById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

