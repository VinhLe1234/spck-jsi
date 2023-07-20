var btn = document.getElementById('register');
btn.onclick = function (){
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value
    let name = document.getElementById('name').value
    alert(email + " " + pass + " " + name)
    if(email.length == 0){
        alert('not null')
    }else{
        if(localStorage.users){
            let users = JSON.parse(localStorage.users)
            users.push({
                name : name,
                email : email,
                pass : pass,
            })
            localStorage.setItem("users",JSON.stringify(users))
        }else{
            localStorage.setItem("users",JSON.stringify(
                [
                    {
                        name : name,
                        email : email,
                        pass : pass,
                    }
                ]
            ))
            
        }
        location.replace('login.html')

    }

}