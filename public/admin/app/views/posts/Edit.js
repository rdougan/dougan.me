/**
 * @class Admin.views.posts.Edit
 * @extends Ext.TabPanel
 * Tabbed panel containing edit Post form and comments panel
 */
Admin.views.posts.Edit = Ext.extend(Ext.TabPanel, {
  initComponent: function() {
    this.objId = ExtMVC.OS.getOS().params.id;
    this.obj   = new Admin.models.Post({id: this.objId});
    
    /**
     * @property editTab
     * @type Ext.form.FormPanel
     * Reference to the edit post tab
     */
    this.editTab = new Admin.views.posts.EditFormTab({
      autoScroll: true,
      obj:        this.obj,
      objId:      this.objId
    });
    
    /**
     * @property reportsTab
     * @type Ext.Panel
     * Reference to the post comments tab
     */
    this.commentsTab = new Admin.views.posts.CommentsTab({
      obj:   this.obj,
      objId: this.objId
    });
    
    Ext.applyIf(this, {
      autoScroll: true,
      items: [
        this.editTab,
        this.commentsTab
      ],
      activeItem: 0,
      defaults: {
        layout: 'fit'
      }
    });
    
    Admin.views.posts.Edit.superclass.initComponent.apply(this, arguments);
  }
});