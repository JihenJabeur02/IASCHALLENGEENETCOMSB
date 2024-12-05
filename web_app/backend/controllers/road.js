const road = require("../models/road")


    
exports.getroad=async(req,res)=>{
        try {
            const data=await road.findAll()
            if (data) return res.status(200).json(data)
            return res.status(400).json('something went wrong')
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    }
    
