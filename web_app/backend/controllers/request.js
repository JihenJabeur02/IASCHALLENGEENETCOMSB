const Industry = require("../models/industries")
const products = require("../models/product")
const Request = require("../models/Request")
const { Op } = require('sequelize'); // Sequelize operator for `IN`

module.exports={
    addRequest:async(req,res)=>{
        try {
            console.log(req.body)
            const data=await Request.create(req.body)
            if (data) return res.status(200).json('created')
            return res.status(400).json('something went wrong')
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    updateRequest:async(req,res)=>{
        try {
            const data = await Request.update(
                { Status: req.body.Status }, // The fields to update
                { where: { Id: req.params.id } } // The condition for the update
              );            if (data) return res.status(200).json(data)
            return res.status(404).json('something went wrong')
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    getRequestFullfiller: async (req, res) => {
        try {
          // Step 1: Fetch requests where Fulfiller matches req.params.id
          const requests = await Request.findAll({
            where: { Fulfiller: req.params.id },
          });
      
          if (!requests || requests.length === 0) {
            return res.status(404).json({ message: 'No requests found for this fulfiller' });
          }
      
          // Step 2: Combine and parse the 'products' column for all requests
          const combinedProducts = requests
            .map(request => {
              try {
                return JSON.parse(request.products); // Parse the 'products' column
              } catch (e) {
                console.error(`Error parsing products for request ID ${request.Id}:`, e);
                return []; // Return an empty array if parsing fails
              }
            })
            .flat(); // Flatten the array to combine products from multiple rows
            
          // Step 3: Remove duplicate product entries and aggregate quantities
          const quantities = combinedProducts.reduce((acc, item) => {
            if (!item || !item.productId || !item.quantity) return acc;
            if (!acc[item.productId]) {
              acc[item.productId] = 0; // Initialize quantity for this productId
            }
            acc[item.productId] += item.quantity; // Aggregate quantity
            return acc;
          }, {});
      
          const productIds = Object.keys(quantities); // Unique product IDs
          console.log('Unique Product IDs:', productIds);
      
          if (productIds.length === 0) {
            return res.status(404).json({ message: 'No valid products found' });
          }
      
          // Step 4: Fetch product details
          const productss = await products.findAll({
            where: {
              Id: {
                [Op.in]: productIds, // Sequelize `IN` operator
              },
            },
          });
      
          const result = productss.map(product => {
            const productId = product.Id;
            const quantity = quantities[productId];
            return {
              productId,
              image: product.images,
              name: product.ProductName,
              price: product.price,
              quantity,
            };
          });
      
          console.log('Final Products Result:', result);
      
          // Step 5: Fetch industries related to Fulfiller and Requester
          const fulfillersIndustries = await Industry.findAll({
            where: { Id: { [Op.in]: requests.map(request => request.Fulfiller) } },
          });
      
          const requestersIndustries = await Industry.findAll({
            where: { Id: { [Op.in]: requests.map(request => request.Requester) } },
          });
      
          // Step 6: Combine the data manually
          const combinedData = requests.map(request => {
            const fulfillerIndustry = fulfillersIndustries.find(industry => industry.Id === request.Fulfiller);
            const requesterIndustry = requestersIndustries.find(industry => industry.Id === request.Requester);
      
            return {
              ...request.toJSON(),
              FulfillerIndustry: fulfillerIndustry,
              RequesterIndustry: requesterIndustry,
              Products: result, // Add the products array to the request data
            };
          });
      
          // Step 7: Return the combined data
          return res.status(200).json(combinedData);
        } catch (e) {
          console.error('Error:', e);
          return res.status(500).json({ message: 'Internal server error' });
        }
      }
      ,
    getRequestRequester: async (req, res) => {
        try {
          // Step 1: Fetch requests where Fulfiller matches req.params.id
          const requests = await Request.findAll({
            where: { Requester: req.params.id },
          });
      
          if (!requests || requests.length === 0) {
            return res.status(404).json({ message: 'No requests found for this fulfiller' });
          }
      
          // Step 2: Combine and parse the 'products' column for all requests
          const combinedProducts = requests
            .map(request => {
              try {
                return JSON.parse(request.products); // Parse the 'products' column
              } catch (e) {
                console.error(`Error parsing products for request ID ${request.Id}:`, e);
                return []; // Return an empty array if parsing fails
              }
            })
            .flat(); // Flatten the array to combine products from multiple rows
          // Step 3: Remove duplicate product entries and aggregate quantities
          console.log(combinedProducts)
          const quantities = combinedProducts.reduce((acc, item) => {
            if (!item || !item.productId || !item.quantity) return acc;
            if (!acc[item.productId]) {
              acc[item.productId] = 0; // Initialize quantity for this productId
            }
            acc[item.productId] += item.quantity; // Aggregate quantity
            return acc;
          }, {});
      
          const productIds = Object.keys(quantities); // Unique product IDs
          console.log('Unique Product IDs:', productIds);
      
          if (productIds.length === 0) {
            return res.status(404).json({ message: 'No valid products found' });
          }
      
          // Step 4: Fetch product details
          const productss = await products.findAll({
            where: {
              Id: {
                [Op.in]: productIds, // Sequelize `IN` operator
              },
            },
          });
      
          const result = productss.map(product => {
            const productId = product.Id;
            const quantity = quantities[productId];
            return {
              productId,
              image: product.images,
              name: product.ProductName,
              price: product.price,
              quantity,
            };
          });
      
          console.log('Final Products Result:', result);
      
          // Step 5: Fetch industries related to Fulfiller and Requester
          const fulfillersIndustries = await Industry.findAll({
            where: { Id: { [Op.in]: requests.map(request => request.Fulfiller) } },
          });
      
          const requestersIndustries = await Industry.findAll({
            where: { Id: { [Op.in]: requests.map(request => request.Requester) } },
          });
      
          // Step 6: Combine the data manually
          const combinedData = requests.map(request => {
            const fulfillerIndustry = fulfillersIndustries.find(industry => industry.Id === request.Fulfiller);
            const requesterIndustry = requestersIndustries.find(industry => industry.Id === request.Requester);
      
            return {
              ...request.toJSON(),
              FulfillerIndustry: fulfillerIndustry,
              RequesterIndustry: requesterIndustry,
              Products: result, // Add the products array to the request data
            };
          });
      
          // Step 7: Return the combined data
          return res.status(200).json(combinedData);
        } catch (e) {
          console.error('Error:', e);
          return res.status(500).json({ message: 'Internal server error' });
        }
      }
      ,
    
    
    
    getOneRequest:async(req,res)=>{
        try {

            const data=await Request.findOne({where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    updateOneRequest:async(req,res)=>{
        try {

            const data=await Request.update(req.body,{where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    deleteOneRequest:async(req,res)=>{
        try {

            const data=await Request.destroy({where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    }
}