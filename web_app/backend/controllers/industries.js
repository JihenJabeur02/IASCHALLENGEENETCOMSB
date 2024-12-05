const Industry = require("../models/industries")

module.exports={
    addIndustry:async(req,res)=>{
        try {
            const data=await Industry.create(req.body)
            if (data) return res.status(200).json('created')
            return res.status(400).json('something went wrong')
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    login:async(req,res)=>{
        try {
            const data=await Industry.findOne({where:{IndustryCode:req.body.code}})
            console.log(data.Password,data.IndustryCode,req.body.password,req.body.code)
            if (data.Password===req.body.password){
                return res.status(200).json(data)
            }
            return res.status(400).json('something went wrong')
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    getIndustry:async(req,res)=>{
        try {
            const data=await Industry.findAll()
            if (data) return res.status(200).json(data)
            return res.status(400).json('something went wrong')
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    getOneIndustry:async(req,res)=>{
        try {

            const data=await Industry.findOne({where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    getOneIndustryByName:async(req,res)=>{
        try {

            const data=await Industry.findOne({where:{IndustryCode:req.params.name}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    updateOneIndustry:async(req,res)=>{
        try {

            const data=await Industry.update(req.body,{where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    deleteOneIndustry:async(req,res)=>{
        try {

            const data=await Industry.destroy({where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    }
}