const API_KEY = "AIzaSyBmbo7EqccHmp1HzgqXDftcrbC95NeSzoM";

// 🔥 YOUR ADMIN EMAIL
const ADMIN_EMAIL = "haramsiddhi@gmail.com";

function login(){

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // 🔴 EMPTY CHECK (NEW - SAFE)
    if(!email || !password){
        alert("Enter email and password ❗");
        return;
    }

    // 🔴 STRICT ADMIN CHECK
    if(email !== ADMIN_EMAIL){
        alert("Only Admin Allowed ❌");
        return;
    }

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,{
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
            alert("Invalid Email or Password ❌");
        }

    })
    .catch(()=>{
        alert("Network Error ❌");
    });
}
