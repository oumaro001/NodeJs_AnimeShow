const express = require('express');
const { addMangas, getAllMangas, getMangasById, updateMangasById, deleteMangasById } = require('../Controllers/MangasController');
const router = express.Router();

router.route("/add").post(addMangas);
router.route("/").get(getAllMangas);
router.route("/:id").get(getMangasById);
router.route("/:id").put(updateMangasById);
router.route("/:id").delete(deleteMangasById);






module.exports = router;