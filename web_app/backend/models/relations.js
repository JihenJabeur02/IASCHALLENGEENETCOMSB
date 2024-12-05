const Product=require('../models/product')
const Industry=require('../models/industries')
const Request=require('../models/Request')
const road = require('./road');
Industry.hasMany(Product)
Product.belongsTo(Industry)
// Industry.hasMany(road)

Industry.hasMany(Request, { foreignKey: 'Fulfiller' });
Industry.hasMany(Request, { foreignKey: 'Requester' });
Request.belongsTo(Industry, { foreignKey: 'Fulfiller' });
Request.belongsTo(Industry, { foreignKey: 'Requester' });


module.exports={
    Industry,
    Product
}