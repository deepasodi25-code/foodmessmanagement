const form = document.getElementById("register");
form.addEventListener("submit",async (event) =>{
event.preventDefault();
})
const usernamae = document.getElementById("username").value
const email = document.getElementById("email").value
const password =document.getElementById("passwaord").value
const confirm = document.getElementById("conform_password").value

if (password !== confirm){
alert("please check your password");
return;    
}

const userdata ={
    usernamae,
    email,
    password
}

fetch(userdata);