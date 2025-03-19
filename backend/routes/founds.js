const express =require('express')
const router=express.Router()

const {getAllFounds,addFound,deleteFounds,updateFound,getFoundById}=require('../controllers/founds')

router.get('/',getAllFounds)
router.post('/',addFound)
router.delete('/:id',deleteFounds)
router.put('/:id',updateFound)
router.get('/:id',getFoundById)

module.exports=router