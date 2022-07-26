import { Router } from "express";

import productController from "../controllers/productsController.js";

const ret = productController;
const router = Router();

router.get("/",ret.getAll);

router.get("/:id",ret.getOne);

router.post("/",ret.create);

router.delete("/:id",ret.delete)

router.put("/:id",ret.update)


export default router;