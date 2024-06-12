function ph_click() {
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
function name_click() {
    document.getElementById('name_div').innerHTML = `
        <label for="name">Enter Your Name</label>
        <input id="name" type="text">
    `;
}
function age_click() {
    document.getElementById('age_div').innerHTML = `
        <label for="age">Enter your age</label>
        <input id="age" type="number">
    `;
}
function address_click() {
    document.getElementById('address_div').innerHTML = `
        <label for="address">Enter Address</label>
        <input id="address" type="text">
    `;
}
function email_click() {
    document.getElementById('email_div').innerHTML = `
        <label for="email">Enter Email</label>
        <input id="email" type="email">
    `;
}
function register() {
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let address = document.getElementById('address').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let pass = document.getElementById('pass').value

    if (name && age && address && email && phone && pass) {


        const data = { name, age, address, email, phone, pass }

        const url = 'http://localhost:3000/data'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            console.log("sent data ", data)
            res.then(e => { console.log(e) })
        }).then(
            alert("Registration successfull")
        )
    }
    else{
        alert("Missing User data, Please fill it!!!")
    }
}


