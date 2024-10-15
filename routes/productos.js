const express = require("express");
const router = express.Router();
const controladores = require("../controladores")
router.get("/productos", controladores.productosController.getAll);
router.get("/productos/:sku", controladores.productosController.getBySKU);

module.exports = router;
