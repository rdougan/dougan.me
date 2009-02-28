/**
 * @class Admin.views.posts.CommentsTab
 * @extends ExtMVC.view.scaffold.CommentsTab
 * Grid to show all the comments for a given post
 */
Admin.views.posts.CommentsTab = Ext.extend(Ext.grid.GridPanel, {
  initComponent: function() {
    this.store = this.obj.comments.findAll({autoLoad: false});
    
    //load the stores only when the tab is activated for the first time
    this.on('activate', function() {
      if (!this.store.lastOptions) {
        this.store.load();
      };
    }, this);
    
    // row expander
    var expander = new Ext.grid.RowExpander({
      tpl: new Ext.Template(
        '<p>{body}</p>'
      )
    });
    
    Ext.applyIf(this, {
      title: 'Comments',
      store: this.store,
      cm: new Ext.grid.ColumnModel([
        expander,
        {header: "Name",   dataIndex: 'name',       sortable: true},
        {header: "Email",  dataIndex: 'email',      sortable: true},
        {header: "Posted", dataIndex: 'created_at', sortable: true}
      ]),
      listeners: {
        'click': {
          scope: this,
          fn: function(e) {
            console.log('toggle');
          }
        }
      },
      viewConfig: {
        forceFit: true
      },
      loadMask:    true,
      tbar:        this.buildTopToolbar(),
      bbar:        this.buildBottomToolbar(this.store),
      plugins:     expander,
      collapsible: true
    });
    
    Admin.views.posts.CommentsTab.superclass.initComponent.apply(this, arguments);
  },
  
  /**
   * Creates Add, Edit and Delete buttons for the top toolbar and sets up listeners to
   * activate/deactivate them as appropriate
   * @return {Array} An array of buttons 
   */
  buildTopToolbar: function() {
    this.deleteButton = new Ext.Button({
      text:     'Delete selected',
      disabled: true,
      scope:    this,
      iconCls:  'delete',
      handler:  this.onDelete
    });
    
    this.getSelectionModel().on('selectionchange', function(selModel) {
      if (selModel.getCount() > 0) {
         this.deleteButton.enable();
      } else {
        this.deleteButton.disable();
      };
    }, this);
    
    return [
      this.deleteButton
    ];
  },
  
  /**
   * Creates a paging toolbar to be placed at the bottom of this grid
   * @param {Ext.data.Store} store The store to bind to this paging toolbar (should be the same as for the main grid)
   * @return {Ext.PagingToolbar} The Paging Toolbar
   */
  buildBottomToolbar: function(store) {
    return new Ext.PagingToolbar({
      store:       store,
      displayInfo: true,
      pageSize:    25,
      emptyMsg:    String.format("No {0} to display", Admin.models.Comment.modelName)
    });
  },
  
  /**
   * Called when the delete button is pressed, or the delete key is pressed.  By default this will ask the user to confirm,
   * then fire the controller's destroy action with the selected record's data.id and a reference to this grid as arguments.
   */
  onDelete: function() {
    Ext.Msg.confirm(
      'Are you sure?',
      String.format("Are you sure you want to delete this {0}?  This cannot be undone.", Admin.models.Comment.modelName),
      function(btn) {
        if (btn == 'yes') {
          var selected = this.getSelectionModel().getSelected();
          if (selected) {
            ExtMVC.OS.getOS().getController('comments').fireAction('destroy', null, [selected.data.id, this.store]);
          }
        };
      },
      this
    );
  }
});
