/**
 * @class Admin.views.posts.EditFormTab
 * @extends ExtMVC.view.scaffold.EditFormTab
 * Form to allow addition of new Publishers
 */
Admin.views.posts.EditFormTab = Ext.extend(ExtMVC.view.scaffold.Edit, {
  constructor: function(config) {
    Admin.views.posts.EditFormTab.superclass.constructor.call(this, Admin.models.Post, config);
  },
  
  initComponent: function() {
    Ext.applyIf(this, {
      border: false,
      items: [
        {
          layout: 'form',
          style:  'padding: 5px',
          border: false,
          items: Admin.views.posts.FormFields
        }
      ]
    });
    
    Admin.views.posts.EditFormTab.superclass.initComponent.apply(this, arguments);
  }
});