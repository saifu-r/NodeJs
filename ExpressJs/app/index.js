const express = require("express");
const app = express();
const cookieParser= require('cookie-parser')

// app.use(express.urlencoded())
// app.use(express.raw())
// app.use(express.text())
app.use(express.json());
app.use(cookieParser());
// app.use(express.static(`${__dirname}/public/`))

//how to use baseUrl
const adminRoute= express.Router()
adminRoute.get('/dashboard', (req, res)=>{
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    console.log(req.hostname);
    console.log(req.ip);
    res.send("we are in the admin Dashboard")
})

app.use('/admin', adminRoute)

app.param("id", (req, res, next, id) => {
  const user = {
    userId: id,
    name: "Saifur Rahman",
  };
  req.userDetails = user;
  next();
});

app.get("/user/:id", (req, res) => {
  console.log(req.userDetails);
  res.send("Welcome to the application!");
});

app.get("/", (req, res) => {
  res.send("This is Home Page");
  console.log(req.cookies);
});
app.post("/", (req, res) => {
  console.log(req.body);
  console.log("hello");
  res.send("This is Another Home Page");
});

app
  .route("/about")
  .get((req, res) => {
    res.send("Welcome to the application get!");
  })
  .post((req, res) => {
    res.send("Welcome to the application post!");
  })
  .put((req, res) => {
    res.send("Welcome to the application put!");
  });

app.listen(3000, () => {
  console.log("listening to port 3000");
});
