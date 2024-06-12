const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const twilio = require('twilio');


const app = express()

const filePath = './data/user_data.json';

const accountSid = '';
const authToken = '';
const client = twilio(accountSid, authToken);

app.use(cors())
app.use(bodyParser.json());

app.get('/data', async (req, res) => {
    const data = await readFile(filePath)
    console.log(data)
    res.json(data)
})

app.post('/data', (req, res) => {

    readFile(filePath).then(all_data => {
        const jsondt = JSON.parse(all_data)
        jsondt.push(req.body)
        writeFile(filePath, JSON.stringify(jsondt)).then(res => {
            console.log("written successfully")
        })
    })

    res.json("done")

})

app.post('/send-sos', (req, res) => {
    const loc = JSON.stringify(req.body.location)
    console.log(loc)
    client.messages.create({
            body: `I need help at ${loc}`,
            from: '+12674599489',
            to: '+919353640765'
        }).then(message => console.log(message.sid));
    res.json("done")
});

app.listen(3000, () => {
    console.log("listening on port 3000")
})

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function writeFile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}
