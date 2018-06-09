const userDB = require('../models/user');
const q = require('q');

let userController = {
    registerPage: function(req, res) {
        res.render("_user/register", {
            layout: "index"
        });
    },
    loginPage: function(req, res) {
        res.render("_user/login", {
            layout: "index"
        });
    }
    ,
    userRegister : function(req, res) {
        let email = req.body.email;
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let password = req.body.password;
        let password2 = req.body.password2;
        let icode = req.body.icode; 

        req.checkBody('email', 'Email không hợp lệ').isEmail();
        req.checkBody('firstname', 'Họ đang trống').notEmpty();
        req.checkBody('lastname', 'Tên đang trống').notEmpty();
        req.checkBody('password', 'Password không hợp lệ').notEmpty();
        req.checkBody('password2', 'Password không tương xứng').equals(password);

        var errors = req.validationErrors();
        if (errors) {
            res.render('_user/register', {
                errors: errors,
                layout: "index"
            })
        }
        else {
            userDB.insertUser(req.body).then(rows => {
                res.redirect("/login");
            }).catch(err => {
                console.log(err);
            });
        }
    } 
}

module.exports = userController;