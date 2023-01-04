const editorialModel = require("../model/EditorialModel");

exports.GetEditorialList = (req, res, next) => {

    editorialModel.findAll().then(result => { //buscar los usuarios

        const editorialList = result.map((result) => result.dataValues) //iteramos, y mapeamos los datos para listar los datos

        res.render("editory/editorialList", { pageTitle: "Editorial", homeActive: true, editorialList: editorialList });

    }).catch(err => {
        console.log(err)
    });

}

exports.GetEditorialForm = (req, res, next) => {
    res.render("editory/save-editorial", { pageTitle: "Formulario de editorial", homeActive: true });
}

exports.PostCreateEditorial = (req, res, next) => {

    const NombreEditorial = req.body.Editorial;
    const TelefonoEditorial = req.body.Telefono;
    const PaisEditorial = req.body.Pais;

    editorialModel.create({ NombreEditorial: NombreEditorial, TelefonoEditorial: TelefonoEditorial, PaisEditorial: PaisEditorial }).then(result => {
        res.redirect("/editorial");

    }).catch(err => {
        console.log(err)
    });

}

exports.GetEditEditorial = (req, res, next) => {
    const edit = req.query.edit;
    const idEditorial = req.params.idEditorial;

    if (!edit) {
        return res.redirect("/editorial");
    }

    editorialModel.findOne({ where: { idEditorial: idEditorial } }).then(result => { //encontrar usuario por el ID
        const editorial = result.dataValues;


        if (!editorial) {
            return res.redirect("/editorial");
        }

        res.render("editory/save-editorial", { pageTitle: "Editar heroes", homeActive: true, editMode: edit, editorial: editorial });

    }).catch(err => {
        console.log(err)
    });


}

exports.PostEditEditorial = (req, res, next) => {
    const NombreEditorial = req.body.Editorial;
    const TelefonoEditorial = req.body.Telefono;
    const PaisEditorial = req.body.Pais;
    const idEditorial = req.body.idEditorial;

    editorialModel.update({ NombreEditorial: NombreEditorial, TelefonoEditorial: TelefonoEditorial, PaisEditorial: PaisEditorial }, { where: { idEditorial: idEditorial } }).then((result) => {
        return res.redirect("/editorial");
    }).catch(err => {
        console.log(err)
    });
}


exports.PostDeleteEditorial = (req, res, next) => {
    const idEditorial = req.body.idEditorial;

    editorialModel.destroy({ where: { idEditorial: idEditorial } }).then((result) => {

        res.redirect("/editorial");
    }).catch(err => {
        console.log(err)
    });

}