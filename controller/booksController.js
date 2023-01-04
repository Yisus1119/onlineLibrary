const bookModel = require("../model/bookModel");

exports.GetBookDescription = (req, res, next) => {

    bookModel.findAll().then(result => {

        const bookList = result.map((result) => result.dataValues) //iteramos, y mapeamos los datos para listar los datos

        res.render("books/bookDescription", { pageTitle: "Acerca del libro", homeActive: true, bookList: bookList });

    }).catch(err => {
        console.log(err)
    });

}

exports.GetBookList = (req, res, next) => {

    bookModel.findAll().then(result => {

        const bookList = result.map((result) => result.dataValues) //iteramos, y mapeamos los datos para listar los datos

        res.render("books/books-list", { pageTitle: "Listado de libros", homeActive: true, bookList: bookList });

    }).catch(err => {
        console.log(err)
    });

}


exports.GetBookMant = (req, res, next) => {

    bookModel.findAll().then(result => {

        const bookList = result.map((result) => result.dataValues) //iteramos, y mapeamos los datos para listar los datos

        res.render("books/booksCategories", { pageTitle: "Libros añadidos", homeActive: true, bookList: bookList });

    }).catch(err => {
        console.log(err)
    });

}

exports.GetBookForm = (req, res, next) => {
    res.render("books/save-books", { pageTitle: "Formulario de libros", homeActive: true })
}

//Enviar datos
exports.PostCreateBook = (req, res, next) => {
    const url = req.body.Image;
    const titulo = req.body.Titulo;
    const age = req.body.Age;
    const categoria = req.body.Categoria;
    const autor = req.body.Autor;
    const editorial = req.body.Editorial

    bookModel.create({ urlImage: url, TituloLibro: titulo, AgeLibro: age, CategoriaLibro: categoria, AutorLibro: autor, NombreEditorial: editorial }).then(
        result => {
            res.redirect("/libros");
        }
    ).catch(err => {
        console.log("Error: " + err)
    });

}

exports.GetEditBook = (req, res, next) => {
    const edit = req.query.edit;
    const bookId = req.params.bookId;

    if (!edit) {
        return res.redirect("/");
    }

    bookModel.findOne({ where: { idLibro: bookId } }).then(result => {
        const book = result.dataValues;

        if (!book) {
            return res.redirect("/");
        }

        res.render("books/save-books", { pageTitle: "Editar libros", homeActive: true, editMode: edit, book: book });

    }).catch(err => {
        console.log(err)
    });

}

exports.PostEditBook = (req, res, next) => {
    const url = req.body.Image;
    const titulo = req.body.Titulo;
    const age = req.body.Age;
    const categoria = req.body.Categoria;
    const autor = req.body.Autor;
    const editorial = req.body.Editorial
    const bookId = req.body.bookId;

    bookModel.update({ urlImage: url, TituloLibro: titulo, AgeLibro: age, CategoriaLibro: categoria, AutorLibro: autor, NombreEditorial: editorial },
        { where: { idLibro: bookId } }).then((result) => {
            return res.redirect("/libros");
        }).catch(err => {
            console.log(err)
        });
}

exports.PostDeleteBook = (req, res, next) => {
    const bookId = req.body.bookId;

    bookModel.destroy({ where: { idLibro: bookId } }).then((result) => {
        res.redirect("/libros");
    }).catch(err => {
        console.log(err)
    });

}