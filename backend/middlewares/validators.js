const {body} = require('express-validator')
const menuItemValidator= (req, res, next) => {
    const errors =  [
        body('name').notEmpty().withMessage('the name is required'),
        body('price').notEmpty().withMessage('the price is required'),
        body('category').notEmpty().withMessage('the category is required')
    ];
    return errors;

}

const restaurantValidator = (req, res, next) => {
    const errors =  [
        body('name').notEmpty().withMessage('the name is required'),
        body('location').notEmpty().withMessage('the location is required'),
    ];
    return errors;
}

module.exports= {
    menuItemValidator,
    restaurantValidator
}