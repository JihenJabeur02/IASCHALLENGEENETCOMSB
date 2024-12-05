const requestDetails = require("../models/RequestDetails")

module.exports={
    addrequestDetails:async(req,res)=>{
        try {
            const data=await requestDetails.create(req.body)
            if (data) return res.status(200).json('created')
            return res.status(400).json('something went wrong')
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    getrequestDetails:async(req,res)=>{
        try {
            const data=await requestDetails.findAll()
            if (data) return res.status(200).json(data)
            return res.status(400).json('something went wrong')
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    getOnerequestDetails:async(req,res)=>{
        try {

            const data=await requestDetails.findOne({where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    updateOnerequestDetails:async(req,res)=>{
        try {

            const data=await requestDetails.update(req.body,{where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    deleteOnerequestDetails:async(req,res)=>{
        try {

            const data=await requestDetails.destroy({where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    }
}