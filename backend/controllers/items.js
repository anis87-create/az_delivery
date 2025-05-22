const asyncHandler = require('express-async-handler');
const MenuItem = require('../models/MenuItem');
const {validationResult} = require('express-validator');
const getItems = asyncHandler(async(req, res) => {
    const items = await MenuItem.find();
    res.status(200).json(items);
});

const addItem = asyncHandler(async(req, res) => {
   const errors = validationResult(req).array();
   if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array().map(error => ({
        msg: error.msg,
        path: error.path,
        location: error.location
     }))});
   }
    const item = new MenuItem({
        ...req.body
    });
    await item.save();
    res.status(201).json(item);
});

const updateItem = asyncHandler(async (req, res) => {
    const item = await MenuItem.findById(req.params.id);
    if(!item){
        res.status(400)
        throw new Error('item not found')
    }
   await MenuItem.updateOne({_id: item.id},{
        ...req.body
    });
    res.status(200).json({msg:`item ${req.params.id} updated`});
});

const deleteItem = asyncHandler(async (req, res) => {
      const item = await MenuItem.findById(req.params.id);
      if(!item){
        res.status(400)
        throw new Error('item not found')
      }
     await MenuItem.deleteOne({_id: item.id}); 
     res.status(200).json({msg:`item ${req.params.id} deleted`});
});

module.exports = {
    getItems,
    addItem,
    updateItem,
    deleteItem
}

