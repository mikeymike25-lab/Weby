let username;
let password;

document.getElementById("LoginBtn").onclick = function(){
    username = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if(username == "test@gmail.com" && password == "testpassword"){
        window.location.href = "https://shopee.ph/Easygoing-Closed-off-Box-Packaging-Toy-Dildo-8-inches-For-Woman-i.1286876501.29323877199?sp_atk=ee20b831-0e53-4ba2-89c7-c333d1fdda83&xptdk=ee20b831-0e53-4ba2-89c7-c333d1fdda83";
    }

    else{
        document.getElementById("notice").textContent = "Invalid username or password!";
    }
}


