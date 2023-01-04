const express = require("express");
const router = express.Router();

const booksC = require("../controller/booksController");
const categoriesC = require("../controller/categoriesController");
const authorC = require("../controller/authorController");
const EditorialC = require("../controller/EditorialController");

//books routes
router.get("/", booksC.GetBookList);
router.get("/libros", booksC.GetBookMant);
router.get("/formBooks", booksC.GetBookForm);
router.post("/createBook", booksC.PostCreateBook);
router.get("/edit-book/:bookId", booksC.GetEditBook);
router.post("/edit-book", booksC.PostEditBook);
router.post("/delete-book", booksC.PostDeleteBook);
router.get("/description", booksC.GetBookDescription);


//categories routes
router.get("/categories", categoriesC.GetCategoriesList);
router.get("/formCategory", categoriesC.GetCategoriesForm);
router.post("/create-category", categoriesC.PostCreateCategories);
router.get("/edit-categorie/:idCategoria", categoriesC.GetEditCategoria);
router.post("/edit-categorie", categoriesC.PostEditCategoria);
router.post("/delete-categorie", categoriesC.PostDeleteCategorie);


//Author routes
router.get("/authors", authorC.GetAuthorList);
router.get("/formAuthor", authorC.GetAuthorForm);
router.post("/create-author", authorC.PostCreateAuthor);
router.get("/edit-author/:idAutor", authorC.GetEditAuthor);
router.post("/edit-author", authorC.PostEditAuthor);
router.post("/delete-author", authorC.PostDeleteAuthor);

//Editorial routes
router.get("/editorial", EditorialC.GetEditorialList);
router.get("/formEditorial", EditorialC.GetEditorialForm);
router.post("/create-editorial", EditorialC.PostCreateEditorial);
router.get("/edit-editorial/:idEditorial", EditorialC.GetEditEditorial);
router.post("/edit-editorial", EditorialC.PostEditEditorial);
router.post("/delete-editorial", EditorialC.PostDeleteEditorial)




module.exports = router;