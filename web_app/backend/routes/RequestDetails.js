const requestDetailsRouter=require('express').Router()
const requestDetailsController=require('../controllers/RequestDetails')

requestDetailsRouter.post('/add',requestDetailsController.addrequestDetails)
requestDetailsRouter.get('/get',requestDetailsController.getrequestDetails)
requestDetailsRouter.get('/getOne/:id',requestDetailsController.getOnerequestDetails)
requestDetailsRouter.put('/updateOne/:id',requestDetailsController.updateOnerequestDetails)
requestDetailsRouter.delete('/deleteOne/:id',requestDetailsController.deleteOnerequestDetails)


module.exports=requestDetailsRouter;