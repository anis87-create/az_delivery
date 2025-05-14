const asyncHandler = require('express-async-handler');
const MenuItem = require('../models/MenuItem');
const getItems = asyncHandler(async(req, res) => {
    const items = await MenuItem.find();
    res.status(200).json(items);
});

const addItem = asyncHandler(async(req, res) => {
    console.log(req.body);
    
    if(!req.body.name){
        res.status(400)
        throw new Error('please add a name')
    }
    const item = new MenuItem({
        ...req.body
    });
    await item.save();

    res.status(201).json(item);
});

const updateItem = asyncHandler(async (req, res) => {
    res.status(200).json({msg:`item ${req.params.id} updated`});
});

const deleteItem = asyncHandler(async (req, res) => {
     res.status(200).json({msg:`item ${req.params.id} deleted`});
});

module.exports = {
    getItems,
    addItem,
    updateItem,
    deleteItem
}

