const CartRouter=require('express').Router()
const CartController=require('../controllers/Cart')

CartRouter.post('/add',CartController.addCart)
CartRouter.get('/get',CartController.getCart)
CartRouter.get('/getOne/:id',CartController.getOneCart)
CartRouter.put('/updateOne/:id',CartController.updateOneCart)
CartRouter.delete('/deleteOne/:id',CartController.deleteOneCart)


module.exports=CartRouter;