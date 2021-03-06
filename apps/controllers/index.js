//Tổng hợp các controllers
const productsController = require('./productsController');
const singleproductController = require('./singleproductController');
const userController = require('./userController');
const homeController = require('./homeController');
const profileController = require('./profileController');
const contactController = require('./contactController');
const cartController = require('./cartController');
const historyController = require('./historyController');
const checkoutController = require('./checkoutController');

module.exports = {
    products : productsController,
    singleproduct : singleproductController,
    users: userController,
    home: homeController,
    profile: profileController,
    contact: contactController,
    cart: cartController,
    history:historyController,
    checkout: checkoutController
}