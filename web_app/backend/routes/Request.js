const RequestRouter=require('express').Router()
const RequestController=require('../controllers/request')

RequestRouter.post('/add',RequestController.addRequest)
RequestRouter.get('/getFull/:id',RequestController.getRequestFullfiller)
RequestRouter.get('/getRequester/:id',RequestController.getRequestRequester)
RequestRouter.get('/getOne/:id',RequestController.getOneRequest)
RequestRouter.put('/updateOne/:id',RequestController.updateRequest)
RequestRouter.delete('/deleteOne/:id',RequestController.deleteOneRequest)


module.exports=RequestRouter;