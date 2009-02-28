/**
 * @class Admin.controllers.IndexController
 * @extends ExtMVC.Controller
 * Default root controller
 */
Admin.controllers.IndexController = Ext.extend(ExtMVC.Controller, {
  constructor: function() {
    //super
    Admin.controllers.IndexController.superclass.constructor.call(this, {
      viewsPackage: Admin.views.index
    });
  }
});

ExtMVC.OS.getOS().registerController('index', Admin.controllers.IndexController);

Ext.ns('Admin.views.index');