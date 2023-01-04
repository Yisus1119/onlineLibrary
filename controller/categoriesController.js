const categorieModel = require("../model/categoriaModel");


exports.GetCategoriesList = (req, res, next) => {

    categorieModel.findAll().then(result => { //buscar los usuarios

        const categorieList = result.map((result) => result.dataValues) //iteramos, y mapeamos los datos para listar los datos

        res.render("categories/categoriesList", { pageTitle: "Categorias", homeActive: true, categorieList: categorieList });

    }).catch(err => {
        console.log(err)
    });

}

exports.GetCategoriesForm = (req, res, next) => {
    res.render("categories/save-categories", { pageTitle: "Formulario de categorias", homeActive: true });
}

exports.PostCreateCategories = (req, res, next) => {
    const nombre = req.body.Name;
    const description = req.body.Description;

    categorieModel.create({ NombreCategoria: nombre, DescripcionCategoria: description }).then(result => {
        res.redirect("/categories");
    }).catch(err => {
        console.log("Error: " + err)
    });

}

exports.GetEditCategoria = (req, res, next) => {
    const edit = req.query.edit;
    const idCategoria = req.params.idCategoria;

    if (!edit) {
        return res.redirect("/categories")
    }

    categorieModel.findOne({ where: { idCategoria: idCategoria } }).then(result => {
        const categoria = result.dataValues;

        res.render("categories/save-categories", { pageTitle: "Editar categoria", homeActive: true, editMode: edit, categoria: categoria });

        if (!categoria) {
            return res.redirect("/categories");
        }

    }).catch(err => {
        console.log(err)
    });

}

exports.PostEditCategoria = (req, res, next) => {
    const nombre = req.body.Name;
    const description = req.body.Description;
    const idCategoria = req.body.idCategoria;

    categorieModel.update({ NombreCategoria: nombre, DescripcionCategoria: description }, { where: { idCategoria: idCategoria } }).then((result) => {
        return res.redirect("/categories");

    }).catch(err => {
        console.log(err)
    });

}

exports.PostDeleteCategorie = (req, res, next) => {
    const idCategoria = req.body.idCategoria;

    categorieModel.destroy({ where: { idCategoria: idCategoria } }).then((result) => {
        res.redirect("/categories")
    }).catch(err => {
        console.log(err)
    });
}