var btn = document.getElementById('login');
console.log(btn)
btn.onclick = function (){
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value
    // alert(email + " " + pass)
    let users = JSON.parse(localStorage.users)
    console.log(users)

    let check = users.map(index => index.email == email.trim() && index.pass == pass.trim())
    if(check[0] == true){
        alert('ss' + check[0])
        location.replace('index.html')
    }else{
        alert('erro' + check[0])
    }
}