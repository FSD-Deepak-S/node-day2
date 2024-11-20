import express from "express";
import { createPensioner, deletePensioner, getPensioner, getPensionerById, updatePensioner } from "../Controllers/pensioner.controller.js";

const router = express.Router();


router.get('/getdata',getPensioner)
router.get('/getdata/:id',getPensionerById)
router.post('/create',createPensioner)
router.put('/update/:id',updatePensioner)
router.delete('/delete/:id',deletePensioner)

export default router;