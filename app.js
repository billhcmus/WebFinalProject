var express = require("express");
var app =  express();
var post = process.env.POST || 8080;

require("./config/index")(app);
app.listen(post, function (err) {
    if (err) {
      console.error("Error is server");
    }
    console.log("Server is connecting in " + post);
});
