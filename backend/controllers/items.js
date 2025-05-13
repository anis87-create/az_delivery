const getItems = (req, res) => {
    res.status(200).json({msg:'Get items'});
};

const addItem = (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.status(201).json({msg:'Set Item'});
};

const updateItem = (req, res) => {
    res.status(200).json({msg:`item ${req.params.id} updated`});
};

const deleteItem = (req, res) => {
     res.status(200).json({msg:`item ${req.params.id} deleted`});
}

module.exports = {
    getItems,
    addItem,
    updateItem,
    deleteItem
}

