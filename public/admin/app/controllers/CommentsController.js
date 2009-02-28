/**
 * @class Admin.controllers.CommentsController
 * @extends ExtMVC.Controller
 * Default root controller
 */
Admin.controllers.CommentsController = Ext.extend(ExtMVC.Controller, {
  constructor: function() {
    //super
    Admin.controllers.CommentsController.superclass.constructor.call(this, {
      viewsPackage: Admin.views.comments
    });
    
    this.actsAsCrudController(Admin.models.Comment);
  }
});

ExtMVC.OS.getOS().registerController('comments', Admin.controllers.CommentsController);

Ext.ns('Admin.views.comments');