import  express from  "express";
import  routes from  './routes'
import  helmet from  'helmet';

const app = express();

app.use(helmet());
app.get("/", (req, res) => {
    return res.send("hi")
});

app.post("/api/data", (req, res) => {
    console.log(req.body)
    return res.sendStatus(200)
})
app.listen(3000, () => {
    console.log("localhost at http: //localhost:3000")
})