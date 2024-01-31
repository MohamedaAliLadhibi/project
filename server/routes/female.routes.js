const routerF = require('express').Router();
const FemaleController = require("../controllers/Female.controller");

routerF.get("/getAll",FemaleController.allF)
routerF.get("/getOne/:id",FemaleController.oneF)
routerF.post("/add",FemaleController.adderF)
routerF.delete("/delete/:id",FemaleController.deleterF)
routerF.put("/update/:id",FemaleController.updaterF)


module.exports = routerF;
