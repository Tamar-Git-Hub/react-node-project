const express=require('express')
const router=express.Router()
const verifyJWT = require("../middleware/verifyJWT")
const{getAllUsers,addUser,deleteUser,updateUser,getUserById}=require('../controllers/user')
<<<<<<< Updated upstream
=======
const authController = require("../controllers/authController")

// router.get('/',getAllUsers)
// router.post('/',authController.register,addUser)
// router.delete('/:id',verifyJWT,deleteUser)
// router.put('/:id',verifyJWT,updateUser)
// router.get('/:id',verifyJWT,authController.login,getUserById)
>>>>>>> Stashed changes

router.get('/',getAllUsers)
router.post('/',addUser)
router.delete('/:id',verifyJWT,deleteUser)
router.put('/:id',verifyJWT,updateUser)
router.get('/:id',verifyJWT,getUserById)

module.exports=router



