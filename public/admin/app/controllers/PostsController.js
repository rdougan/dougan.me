/**
 * @class Admin.controllers.PostsController
 * @extends ExtMVC.Controller
 * Default root controller
 */
Admin.controllers.PostsController = Ext.extend(ExtMVC.Controller, {
  constructor: function() {
    //super
    Admin.controllers.PostsController.superclass.constructor.call(this, {
      viewsPackage: Admin.views.posts
    });
    
    this.actsAsCrudController(Admin.models.Post, {
      /**
       * We need to override this because we're using a form nested in a tab
       */
      onFindSuccess: function(modelObj) {
        this.editModelObj = modelObj;
        this.form.editTab.getForm().loadRecord(modelObj);
        
        this.fireEvent('findsuccess', modelObj);
      },
      
      /**
       * We need to override this because we're using a form nested in a tab
       */
      addErrorMessages: function(modelObj, response) {
        this.form.editTab.getForm().clearInvalid();
        this.form.editTab.getForm().markInvalid(modelObj.errors.forForm());
      }
    });
  }
});

ExtMVC.OS.getOS().registerController('posts', Admin.controllers.PostsController);

Ext.ns('Admin.views.posts');