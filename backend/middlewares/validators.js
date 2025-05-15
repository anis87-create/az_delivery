const {body} = require('express-validator')
const menuItemValidator= (req, res, next) => {
    const errors =  [
        body('name').notEmpty().withMessage('the name is required'),
        body('price').notEmpty().withMessage('the price is required'),
        body('category').notEmpty().withMessage('the category is required')
    ];
    return errors;

}


module.exports= {
    menuItemValidator
}