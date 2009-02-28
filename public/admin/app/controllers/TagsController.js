/**
 * @class Admin.controllers.TagsController
 * @extends ExtMVC.Controller
 * Default root controller
 */
Admin.controllers.TagsController = Ext.extend(ExtMVC.Controller, {
  constructor: function() {
    //super
    Admin.controllers.TagsController.superclass.constructor.call(this, {
      viewsPackage: Admin.views.tags
    });
    
    this.actsAsCrudController(Admin.models.Tag);
  }
});

ExtMVC.OS.getOS().registerController('tags', Admin.controllers.TagsController);

Ext.ns('Admin.views.tags');