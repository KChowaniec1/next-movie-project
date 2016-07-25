/**
 * @author warri
 */
var routerUser=require("./user");
var routerMovie=require("./movie");
var routerPlaylist=require("./playlist");
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true })); 
  app.use("/",routerUser);
  app.use("/",routerMovie);
  app.use("/",routerPlaylist);
  app.use("*", (req, res) => {
        res.sendStatus(404);
  })
};