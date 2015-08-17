
 (function () {
    "use strict";

     var config = require('./config.js');
     var randomService = require('./service/randomService.js');
     var listService = require('./service/listService.js');

     var app = config.initApp();

     var router = config.initRouter(app);

     randomService.randomService(router);
     listService.listService(router);

     app.listen(process.env.PORT || 3000);

  }());

