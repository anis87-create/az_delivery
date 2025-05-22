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

const userRegisterValidator = (req, res, next) => {
    const errors = [
        body('fullName').notEmpty().withMessage('fullName is required'),
        body('email').isEmail().withMessage("mail is invalid"),
        body('password')
          .isLength({min: 6, max: 100})
          .withMessage('the password must contain al least 6 characters')
          .matches(/\d/)
          .withMessage('the password must contain at least a number')
          .matches(/[A-Z]/)
          .withMessage('the password must contain a least a capital letter'),
        body('location')
        .isLength({min: 6, max: 100})
        .withMessage("the password must contain al least 6 characters"),

       body('phoneNumber')
       .matches(/^\d{6}$/)
        .withMessage("the password must contain al least 6 characters")
      ];

    return errors;
}
const userLoginValidator = (req, res, next) => {
    const errors = [  body('email').isEmail().withMessage("l'email est invalide"),
    body('password')
          .isLength({min: 6, max: 100})
          .withMessage('the password must contain al least 6 characters')
          .matches(/\d/)
          .withMessage('the password must contain at least a number')
          .matches(/[A-Z]/)
          .withMessage('the password must contain a least a capital letter')];

    return errors;      
    
}
module.exports= {
    menuItemValidator,
    restaurantValidator,
    userRegisterValidator,
    userLoginValidator
}