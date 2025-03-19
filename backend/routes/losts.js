const express=require('express')
const route=require('../controllers/losts')

const{getAllLosts,addLost,deleteLost,updateLost,getLostById}=require('../controllers/losts')
const router = require('./founds')

router.get('/',getAllLosts)
router.post('/',addLost)
router.delete('/:id',deleteLost)
router.put('/:id',updateLost)
router.get('/:id',getLostById)

module.exports=router