document.addEventListener("DOMContentLoaded", function()
{
    /*
    var user = 
    {
        name:"Ethan",
        email:"ggggg"
    }

    localStorage.setItem("userInfo", JSON.stringify) 
    */

    const userInfo = localStorage.getItem('userInfo');

    if (userInfo)
    {
        document.getElementById("account").innerHTML = "My Account!"
        document.getElementById("account").addEventListener("click", function()
            {
                window.location.href = "account.html";
            })
    ;}
    else
    {
        document.getElementById("account").innerHTML = "Register!"
        document.getElementById("account").addEventListener("click", function()
            {
                window.location.href = "register.html";
            })
    }

})