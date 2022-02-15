function Register()
{
    alert("Hello");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password1").value;
    const confirmPassword = document.getElementById("password2").value;

    console.log(name,email,phone, password, confirmPassword);
    
    var user = 
    {
        name:name,
        email:email,
        password1:password,
        phone:phone
    }
    
    localStorage.setItem("userInfo", JSON.stringify(user))
    window.location.href = "account.html";
}