let logIn = document.getElementById("logIn");
logIn.addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let adminIndex;
    let newuser = localStorage.getItem("newuser");
    let userObj;
    if (newuser == null) {
        userObj = [];
    }
    else {
        userObj = JSON.parse(newuser);
    }

    userObj.forEach(function(element, index) {
        
        if(email === element.email && password === element.password){
          let adminIndex= index;
          console.log(adminIndex)
          window.location="teams_view.html";
        }
        
    });
    // document.getElementById("logInSubmit").reset();






});