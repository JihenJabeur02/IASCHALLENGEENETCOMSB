const product = require("../models/product")

module.exports={
    addproduct:async(req,res)=>{
        try {
            const data=await product.create(req.body)
            if (data) return res.status(200).json('created')
            return res.status(400).json('something went wrong')
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    getproduct:async(req,res)=>{
        try {
            const data=await product.findAll()
            if (data) return res.status(200).json(data)
            return res.status(400).json('something went wrong')
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    getOneproduct:async(req,res)=>{
        try {

            const data=await product.findAll({where:{industryId:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    updateOneproduct:async(req,res)=>{
        try {

            const data=await product.update(req.body,{where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    deleteOneproduct:async(req,res)=>{
        try {

            const data=await product.destroy({where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    }
}