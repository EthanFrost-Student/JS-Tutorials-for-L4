function Register()
{
    alert("Hello");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password1").value;
    const confirmPassword = document.getElementById("password2").value;

    console.log(name,email,phone, password, confirmPassword);

    if (name == "" || phone == "" || email == "" || password == "")
    {
        if (name == "")
        {
            document.getElementById("nameError").innerHTML = ("You must enter a vaild name!")
        }
        else if(phone == "")
        {
            document.getElementById("phoneError").innerHTML = ("You must enter a phone number!")
        }
        else if(email == "")
        {
            document.getElementById("emailError").innerHTML = ("You must enter an email")
        }
        else if(password == "")
        {
            document.getElementsByName("passError").innerHTML = ("Enter a valid password!")
        }
        alert("Must enter phone!")
    }
    else if (password != confirmPassword)
    {
        alert("Password does not match!");
    }
    else
    {
        const user = 
        {
            name:name,
            email:email,
            password1:password,
            phone:phone
        }
    }
      
    localStorage.setItem("userInfo", JSON.stringify(user))
    window.location.href = "account.html";
}
