const industryRouter=require('express').Router()
const industryController=require('../controllers/industries')

industryRouter.post('/add',industryController.addIndustry)
industryRouter.post('/login',industryController.login)
industryRouter.get('/get',industryController.getIndustry)
industryRouter.get('/getOneByName/:name',industryController.getOneIndustryByName)
industryRouter.get('/getOne/:id',industryController.getOneIndustry)
industryRouter.put('/updateOne/:id',industryController.updateOneIndustry)
industryRouter.delete('/deleteOne/:id',industryController.deleteOneIndustry)


module.exports=industryRouter;