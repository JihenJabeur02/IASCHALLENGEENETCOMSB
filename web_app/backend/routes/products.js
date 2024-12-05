const productsRouter=require('express').Router()
const productController=require('../controllers/product')

productsRouter.post('/add',productController.addproduct)
productsRouter.post('/login',productController.addproduct)
productsRouter.get('/get',productController.getproduct)
productsRouter.get('/getOne/:id',productController.getOneproduct)
productsRouter.put('/updateOne/:id',productController.updateOneproduct)
productsRouter.delete('/deleteOne/:id',productController.deleteOneproduct)


module.exports=productsRouter;