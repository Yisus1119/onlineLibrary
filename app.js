const express = require('express')
const app = express()
const port = 3001
const path = require("path");
const expressHbs = require("express-handlebars");
const errorController = require("./controller/errorController")
const heroesR = require("./routes/booksRoute");
const sequelize = require("./util/database");

//modelos
const createBook = require("./model/bookModel");
const createCategoria = require("./model/categoriaModel");
const createAutor = require("./model/autorModel");
const createEditorial = require("./model/EditorialModel");

app.engine("hbs", expressHbs.engine({ //configurando layout principal
    layoutsDir: "view/layout/",
    defaultLayout: "main-layout",
    extname: "hbs",
}));

//configurando express-handlebars
app.set("view engine", "hbs");
app.set("views", "view");


app.use(express.urlencoded({ extended: false })); //obtener informacion mediante los metodos HTTP

app.use(express.static(path.join(__dirname, "public"))) //configurando carpeta estática


app.use(heroesR);


//error 404
app.use(errorController.Get404);


//vamos a correr a sequelize

sequelize.sync().then(function (result) {
    console.log(result);
}).catch(err => {
    console.log(err)
});



app.listen(port, () => {
    console.log(`Corriendo en el puerto: ${port}`)
})