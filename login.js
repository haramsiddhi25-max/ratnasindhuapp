const API_KEY = "YOUR_FIREBASE_WEB_API_KEY";

// 🔥 YOUR ADMIN EMAIL
const ADMIN_EMAIL = "haramsiddhi@gmail.com";

function login(){

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // 🔴 STRICT CHECK
    if(email !== ADMIN_EMAIL){
        alert("Only Admin Allowed ❌");
        return;
    }

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${"AIzaSyBmbo7EqccHmp1HzgqXDftcrbC95NeSzoM"}`,{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    })
    .then(res => res.json())
    .then(data => {

        if(data.idToken){
            localStorage.setItem("admin", "true");
            window.location.href = "index.html";
        } else {
            alert("Login Failed ❌");
        }

    })
    .catch(()=>{
        alert("Error ❌");
    });
}