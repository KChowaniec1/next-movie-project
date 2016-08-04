var routerUser=require("./user");
var routerMovie=require("./movie");
var routerPlaylist=require("./playlist");
var routerProfile =require("./profile");
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true })); 
  app.use("/",routerUser);
  app.use("/",routerMovie);
  app.use("/",routerPlaylist);
  app.use("/", routerProfile);
  app.use("*", (req, res) => {
        //res.sendStatus(404);
        if (req.cookies.next_movie == undefined){
            res.redirect("/login");
        } 
        else {
            res.redirect("/user");
        }
  })
};