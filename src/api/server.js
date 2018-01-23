const Promise            = require('bluebird');
const colors             = require('colors');
const figlet             = Promise.promisify(require('figlet'));
const morgan             = require('morgan');
const express            = require("express");
const bodyParser         = require('body-parser');
const app                = express();
const path               = require('path');
const serveStatic        = express.static;
const PORT               = 8080;
const middlwareError     = 'You made it to the no-no middleware. If you\'re confused, see:http://expressjs.com/en/guide/using-middleware.html';
const IS_PRODUCTION      = false;
const introAscii         = '   Code';
const introAscii2        = 'School';
const asciiFont          = 'Isometric2';

figlet(introAscii,{font:asciiFont})
.then(introMessage => {
  console.log(introMessage.green);
  return figlet(introAscii2,{font:asciiFont})
})
.then(introMessage => {
  console.log(introMessage.green);
})
.then(nothing =>{

      if (!IS_PRODUCTION) require('./bundler.js')(app); //Webpack

      app.use(bodyParser.json({
        extended:true //see:https://www.npmjs.com/package/body-parser
      }))
      .use(bodyParser())

      app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname,"../../dist/index.html"));
      });


      app.post('/login', function(req, res) {
        const users = [{username: "Aigul", password: "123"}, {username: "Pilar", password: "345"}]
        var result;
        users.forEach(function(user){
          if (user.username === req.body.username && user.password === req.body.password) {
            result = "user exists"
          }
        })
        if (!result) {
          result = "user doesn't exist"
        }
        console.log(result)
      });

      app.use(serveStatic(path.join(__dirname,"../../dist")));

      app.use(function(req,res,next){// If you get here, then nothing was able to field the request.
        res.send(JSON.stringify({
          success:false,
          data:middlwareError
        }))
      });

      app.listen(PORT, function () {
        console.log('Server running on port ' + PORT);
      });
})
