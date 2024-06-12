function loc_click(){
    document.getElementById('location').innerHTML = `
    <label for="cur_location">Enter your Location</label>
    <input id="cur_location" type="text">
`
}

function sos(){
    const location = document.getElementById('cur_location').value
    fetch('http://localhost:3000/send-sos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({location})
    }).then(
        alert("We will reach you soon")
    )
}