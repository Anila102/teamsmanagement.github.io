// let signUp=document.getElementById("signUp");
// signUp.addEventListener("click", (e)=>{
// e.preventDefault();
//     console.log("sign");
//     window.location="teams_signup.html";
// })

// let logIn=document.getElementById("logIn");
// logIn.addEventListener("click", (e)=>{
//     e.preventDefault();
//     console.log("login");
//     window.location="teams.html";
// })


// let teamView=document.getElementById("teamView");
// teamView.addEventListener("click", (e)=>{
//     console.log("teamview");
//     e.preventDefault();
//     window.location="teams_view.html";
// })



// For signUp
// let validEmail = false;
// let email = document.getElementById("email");
// email.addEventListener("blur", () => {
//     let regex = /^([\-\_\.a-z0-9]+)@([0-9a-z]+)\.([a-z]){2,7}$/;
//     let str = email.value;
//     if (regex.test(str)) {
//         email.classList.remove("is-invalid");
//         validEmail = true;
//     }
//     else {
//         email.classList.add("is-invalid");
//         validEmail = false;
//     }
// })

// let validName = false;
// let name = document.getElementById("name");
// name.addEventListener("blur", () => {
//     let regex = /^[A-Za-z][0-9a-zA-z]{0,12}$/;
//     let str = name.value;
//     if (regex.test(str)) {
//         name.classList.remove("is-invalid");
//         validName = true;

//     }
//     else {
//         name.classList.add("is-invalid");
//         validName = false;

//     }
// })


// class User {
//     constructor(email, password) {
//         // console.log("inside login constructor: " + email, password)
//         this.email = email;
//         this.password = password;
//     }
// }
// class SignUpUser extends User {
//     constructor(name, email, password) {
//         super(email, password);
//         this.name = name;

//     }
// }

// class addUser {
//     add(user) {

//         let newuser = localStorage.getItem("newuser");

//         let userObj;
//         if (newuser == null) {
//             userObj = [];
//         }
//         else {
//             userObj = JSON.parse(newuser);
//         }
//         userObj.push(user);
//         localStorage.setItem("newuser", JSON.stringify(userObj));
//         console.log(userObj);

//     }


// validate(olduser) {
//     let newuser = localStorage.getItem("newuser");

//     let userObj;
//     if (newuser == null) {
//         userObj = [];
//     }
//     else {
//         userObj = JSON.parse(newuser);
//     }
//     console.log(userObj);
//     let flag=0;
//     userObj.forEach(function (element) {

//         if (olduser.email === element.email && olduser.password === element.password) {

//             console.log( olduser.email +" " +element.email);
//             console.log( olduser.password +" " +element.password);

//             console.log("Access Success!!!" );
//           // console.log(element.email + element.password);
//             window.location="teams_view.html";
//             flag=1;

//         }
//         else{
//             console.log("try next");
//         }


//     });

// }

// }
// let newUser = new addUser();


// let logInSubmit = document.getElementById("logInSubmit");
// logInSubmit.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     let olduser = new User(email, password);

//     newUser.validate(olduser);
//     // newUser.add(olduser);

//     // let logInuser = User.newConstructor( email, password);
//     // logInCheck(logInuser);


//     document.getElementById("logInSubmit").reset();
// })

// let signUpSubmit = document.getElementById("signUpSubmit");

// signUpSubmit.addEventListener("submit", (e) => {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let user = new SignUpUser(name, email, password);
//     console.log(name, email, password)
//     newUser.add(user);
//     e.preventDefault();
//     document.getElementById("signUpSubmit").reset();
// })



// class User {
//     constructor(name, email, password) {
//         // console.log("inside login constructor: " + email, password)
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
// }


// class addUser {
//     add(user) {
//         let userCond = false;
//         let name = document.getElementById("name");
//         let email = document.getElementById("email");
//         // let password = document.getElementById("password");

//         name.addEventListener("blur", () => {
//             let namevalid = false;
//             if (namevalid.value == "") {
//                 name.classList.remove("is-invalid");
//                 namevalid = false;

//             }
//             else {
//                 let regex = /^[A-Za-z][0-9a-zA-z]{0,12}$/;
//                 let str = name.value;
//                 if (regex.test(str)) {
//                     name.classList.add("is-invalid");
//                     namevalid = true;
//                 }
//                 else {
//                     name.classList.remove("is-invalid");
//                     namevalid = false;
//                 }
//             }
//         });

//         email.addEventListener("blur", () => {
//             let emailvalid = false;
//             if (emailvalid == "") {
//                 email.classList.remove("is-invalid");
//                 emailvalid = false;
//             }
//             else {
//                 let regex = /^([\-\_\.a-z0-9]+)@([0-9a-z]+)\.([a-z]){2,7}$/;
//                 let str = email.value;
//                 if (regex.test(str)) {
//                     email.classList.add("is-invalid");
//                     emailvalid = true;
//                 }
//                 else {
//                     email.classList.remove("is-invalid");
//                     emailvalid = false;
//                 }
//             }

//         });

//         if (namevalid && emailvalid) {
//             userCond = true;
//         }


//         return userCond;
//     }

//     createObj(){
//         let data= new User(name.value, email.value, password.value);
//         console.log(data)
//         return data;
//     }
// }

// let user= new addUser();

// let submit=document.getElementById("submit");
// submit.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     user.add()
//     if (user.add()) {
//         user.createObj();
//         let userObj=user.createObj();

//         // Local Storage

//         let newdata=localStorage.getItem("newdata");
//         if(newdata==null){
//             newObj=[];
//         }
//         else{
//             newObj=JSON.parse(newdata);
//         }
//         newObj.push(userObj);
//         console.log(newObj);
//         localStorage.setItem("newdata", JSON.stringify(newObj));
//     }
// })



// let newuser = localStorage.getItem("newuser");

// let userObj;
// if (newuser == null) {
//     userObj = [];
// }
// else {
//     userObj = JSON.parse(newuser);
// }
// userObj.push(user);
// localStorage.setItem("newuser", JSON.stringify(userObj));
// console.log(userObj);




// function validation (email, name){
// let validname=false;
//   name.addEventListener("blur", () => {
//         let regex = /^[A-Za-z][0-9a-zA-z]{0,12}$/;
//         let str = name.value;
//         if (regex.test(str)) {
//             name.classList.remove("is-invalid");
//             validname = true;
//         }
//         else {
//             firstName.classList.add("is-invalid");
//             validname = false;
//         }
//     })

// }

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}


let signup = document.getElementById("signup");
signup.addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // console.log(typeof (name))
   

        let newUser = new User(name, email, password);
        console.log(newUser)
  




    let newuser = localStorage.getItem("newuser");
    let userObj;
    if (newuser == null) {
        userObj = [];
    }
    else {
        userObj = JSON.parse(newuser);
    }
 
  
    userObj.push(newUser);
    console.log(userObj);
    userObj = localStorage.setItem("newuser", JSON.stringify(userObj))



    document.getElementById("signUpSubmit").reset();




    // window.location="teams.html";
})
