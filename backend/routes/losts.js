const express =require('express')
const verifyJWT = require("../middleware/verifyJWT")
const router=express.Router()
const{getAllLosts,addLost,deleteLost,updateLost,getLostById}=require('../controllers/losts')


router.get('/',getAllLosts)
router.post('/',addLost)
router.delete('/:id',verifyJWT,deleteLost)
router.put('/:id',verifyJWT,updateLost)
router.get('/:id',verifyJWT,getLostById)

module.exports=router