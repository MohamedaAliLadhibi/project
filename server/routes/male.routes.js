const routerM = require('express').Router();
const MaleController = require("../controllers/male.controller");

routerM.get("/getAll",MaleController.allM)
routerM.get("/getOne/:id",MaleController.oneM)
routerM.post("/add",MaleController.adderM)
routerM.delete("/delete/:id",MaleController.deleterM)
routerM.put("/update/:id",MaleController.updaterM)




module.exports = routerM;