document.addEventListener("DOMContentLoaded", function()
{
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);

    document.getElementById("name").innerHTML = `Hi, ${userInfo.name}!`;
    document.getElementById("email").innerHTML = `<b>Email: </b> ${userInfo.email}`;
    document.getElementById("phone").innerHTML = `<b>Phone: </b> ${userInfo.phone}`;
})

function Logout()
{
    alert('Logged out!')
    localStorage.removeItem("userInfo");
    window.location.href = "index.html";
}