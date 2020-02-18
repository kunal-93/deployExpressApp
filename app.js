const express = require("express")
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get("/", (req, res) =>{
    res.render("home.handlebars", {
        title: "Home"
    });
});

app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "contact"
    });
});

app.get("/products", (req, res) => {
    res.render("products", {
        title: "products"
    });
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log("server running");
})