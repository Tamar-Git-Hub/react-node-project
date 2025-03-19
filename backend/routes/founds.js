const express =require('express')
const verifyJWT = require("../middleware/verifyJWT")
const router=express.Router()

const {getAllFounds,addFound,deleteFounds,updateFound,getFoundById}=require('../controllers/founds')

router.get('/',getAllFounds)
router.post('/',addFound)
router.delete('/:id',verifyJWT,deleteFounds)
router.put('/:id',verifyJWT,updateFound)
router.get('/:id',verifyJWT,getFoundById)

module.exports=router