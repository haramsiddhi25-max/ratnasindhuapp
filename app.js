const FIREBASE_URL = "https://konkantourguide-default-rtdb.firebaseio.com";

function get(id){
    return document.getElementById(id).value.trim();
}

function validate(){

    if(!get("name_en")){
        alert("Name required");
        return false;
    }

    if(!get("img1").startsWith("http")){
        alert("Enter valid Image URL");
        return false;
    }

    if(!get("map").startsWith("http")){
        alert("Enter valid Map URL");
        return false;
    }

    if(get("contact") && get("contact").length < 10){
        alert("Invalid phone");
        return false;
    }

    return true;
}

function save(){

    if(!validate()) return;

    let region = document.getElementById("region").value;
    let cat = document.getElementById("category").value;

    let data = {
        name:{
            en:get("name_en"),
            mr:get("name_mr"),
            hi:get("name_hi")
        },
        description:{
            en:get("desc_en"),
            mr:get("desc_mr"),
            hi:get("desc_hi")
        },

        bestTime:{ en:get("time_en") },
        howToReach:{ en:get("reach_en") },

        foodNearby:{ en:get("food_en") },
        stayOptions:{ en:get("stay_en") },

        activitiesIncluded:{ en:get("act_en") },
        price:{ en:get("price_en") },

        contact:get("contact"),

        imageUrl1:get("img1"),
        imageUrl2:get("img2"),
        mapUrl:get("map")
    };

    fetch(`${FIREBASE_URL}/Places/${region}/${cat}.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
        alert("Saved Successfully ✅");
        document.getElementById("form").reset();
    })
    .catch(() => {
        alert("Error saving data ❌");
    });
}