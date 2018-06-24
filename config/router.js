const index = require("../apps/controllers/index");
const admin = require("../apps/controllers/admin.js");
const errorPage = require("../apps/controllers/errorController.js");
const multer = require('multer');

// Create Multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/account');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
});
var upload = multer({storage:storage});


// Exports 
module.exports = function(app) {
    //home
    app.get("/", index.home.loadHomePage);
    // shop
    app.get("/shop", index.products.searchProducts);
    app.get("/shop/choose", index.products.searchProductsAuto);
    app.post("/shop/search", index.products.search);
    app.post("/shop/filter", index.products.filter);


    //single-product
    app.get("/product",index.singleproduct.getProduct);

    //admin
    app.get("/dashboard", admin.loadDashboard);
    app.get("/dashboardtype", admin.loadDashboardType);
    app.get("/dashboardbrand", admin.loadDashboardBrand);

    //user
    app.get("/register", index.users.registerPage);
    app.post("/register", index.users.userRegister);
    app.get("/login", index.users.loginPage);
    app.post("/login", index.users.userLogin);
    app.get("/logout", index.users.userLogout);
    app.get("/forgetpassword", index.users.forgetPasswordPage);
    app.post("/forgetpassword", index.users.userForgetPassword);

    //profile
    app.get("/profile", index.profile.defaultPage);
    app.get("/profile/update", index.profile.updatePage);
    app.post('/profile/update', upload.single('upload_photo'), index.profile.updateInfo);

        //Err0r
    app.use(errorPage);
}
