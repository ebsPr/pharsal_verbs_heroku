
 (function () {
    "use strict";

     var config = require('./config.js');
     var randomService = require(__dirname +'/service/random_service/randomService.js');
     var listService = require(__dirname +'/service/list_service/listService.js');

     var app = config.initApp();

     var router = config.initRouter(app);

     randomService.randomService(router);
     listService.listService(router);
g
     app.listen(process.env.PORT || 3000);

  }());

