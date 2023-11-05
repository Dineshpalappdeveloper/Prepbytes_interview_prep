const express = require("express")
const secretkey = "41646546161";
const salt = 10;
const arr = [];
const jwt = require("jsonwebtoken")
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send("home page")
})
app.post("/register", (req, res) => {
    const data = req.body;
    if (data.email) {
        const temp = {
            email: data.email,
        }
        const token = jwt.sign({ email: data.email }, secretkey, { expiresIn: "5 days" })
        arr.push(temp)
        res.send({
            result: temp, token: token
        })

    } else {
        res.send("dont have")

    }
    // res.send("Contact page")

})

app.post("/login", (req, res) => {
    const data = req.body;
    const token = req.body.token;
    if (data.email) {
        const match = arr.map((item) => item.email === data.email)
        if (match) {
            const data1 = jwt.verify(token, secretkey)
            if (data1) {
                res.send("login done")

            }

        } else {
            res.send("register first")

        }
    }
    else {
        res.send("login failled")

    }
})
app.listen(3000, () => {
    console.log("fine live");
})