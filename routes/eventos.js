const express = require("express");
const router = express.Router();
const controller = require("../controllers/eventos");

router.post('/cadastrar-evento', controller.post);
router.get("/lista-eventos", controller.getAll);
router.get("/lista/:id", controller.get);

module.exports = router;