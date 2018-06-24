const index = require("../apps/controllers/index");
const admin = require("../apps/controllers/admin.js")
const errorPage = require("../apps/controllers/errorController.js")

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
    app.get("/changepassword", index.users.changePasswordPage);
    app.post('/changepassword', index.users.userChangePassword);
    app.get("/forgetpassword", index.users.forgetPasswordPage);
    app.post("/forgetpassword", index.users.userForgetPassword);
    app.get("/newpassword", index.users.createNewPasswordPage);
    app.post("/newpassword", index.users.userCreateNewPassword);

    //profile
    app.get("/profile", index.profile.defaultPage);
    app.get("/profile/update", index.profile.updatePage);
    app.post('/profile/update',index.profile.updateInfo);

        //Err0r
    app.use(errorPage);
}
