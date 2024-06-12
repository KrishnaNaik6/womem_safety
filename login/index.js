function input_click() {
    document.getElementById('ph_div').innerHTML = `
        <label for="phone">Enter Phone number</label>
        <input id="phone" type="text">
    `;
}
function pass_click() {
    document.getElementById('pass_div').innerHTML = `
        <label for="pass">Enter Password</label>
        <input id="pass" type="password">
    `;
}

function login(){
    const url = 'http://localhost:3000/data'
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(dt => dt.json().then(user_data => {
        const phone = document.getElementById('phone').value
        const password = document.getElementById('pass').value

        const jsondt = JSON.parse(user_data)

        if (jsondt.length==0){
            alert("No user")
        }

        for (i in jsondt){
            console.log(jsondt[i])
            if (phone == jsondt[i].phone && password == jsondt[i].pass){
                console.log("valid")
                window.location.href = '../home/index.html'
                alert('login successfull')
            }
            else{
                console.log("not valid")
                alert("User credentials are wrong / No such user")
            }
        }

    }))
}