import  express from  "express";

const app = express();

app.get("/", (req, res) => {
    return res.send("hi")
});

app.listen(3000, () => {
    console.log("localhost at http: //localhost:3000")
})