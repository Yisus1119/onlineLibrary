const authorModel = require("../model/autorModel");
const transporter = require("../util/emailService");

exports.GetAuthorList = (req, res, next) => {

    authorModel.findAll().then(result => { //buscar los usuarios

        const authorList = result.map((result) => result.dataValues) //iteramos, y mapeamos los datos para listar los datos

        res.render("authors/author-list", { pageTitle: "Autores", homeActive: true, authorList: authorList });

    }).catch(err => {
        console.log(err)
    });
}

exports.GetAuthorForm = (req, res, next) => {
    res.render("authors/save-authors", {
        pageTitle: "Formulario de autores", homeActive: true, editMode: false
    })
}

exports.PostCreateAuthor = (req, res, next) => {
    const name = req.body.Name;
    const correo = req.body.Correo;

    authorModel.create({ NombreAutor: name, CorreoAutor: correo }).then(result => {
        res.redirect("/authors");
        return transporter.sendMail(
            {
                from: "BookApp Application Services",
                to: correo,
                subject: `Bienvenido ${name}`,
                html: "Tu libro ha sido registrado exitosamente",
            },
            (err) => {
                console.log(err);
            }
        );
    }).catch(err => {
        console.log(err)
    });
}


exports.GetEditAuthor = (req, res, next) => {
    const edit = req.query.edit;
    const idAutor = req.params.idAutor;

    if (!edit) {
        return res.redirect("/authors");
    }

    authorModel.findOne({ where: { idAutor: idAutor } }).then(result => {
        const author = result.dataValues;

        if (!author) {
            return res.redirect("/authors");
        }

        res.render("authors/save-authors", { pageTitle: "Editar autor", homeActive: true, editMode: edit, author: author })

    }).catch(err => {
        console.log(err)
    });


}

exports.PostEditAuthor = (req, res, next) => {
    const name = req.body.Name;
    const correo = req.body.Correo;
    const idAutor = req.body.idAutor;

    authorModel.update({ NombreAutor: name, CorreoAutor: correo }, { where: { idAutor: idAutor } }).then((result) => {
        return res.redirect("/authors");
    }).catch(err => {
        console.log(err)
    });
}

exports.PostDeleteAuthor = (req, res, next) => {
    const idAutor = req.body.idAutor;

    authorModel.destroy({ where: { idAutor: idAutor } }).then((result) => {
        res.redirect("/authors");
    }).catch(err => {
        console.log(err)
    });
}

