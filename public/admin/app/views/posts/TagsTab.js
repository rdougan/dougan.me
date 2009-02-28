/**
 * @class Admin.views.posts.TagsTab
 * @extends ExtMVC.view.scaffold.TagsTab
 * Grid to show all the tags for a given post
 */
Admin.views.posts.TagsTab = Ext.extend(Ext.grid.GridPanel, {
  initComponent: function() {
    this.store = this.obj.tags.findAll({autoLoad: false});
    
    //load the stores only when the tab is activated for the first time
    this.on('activate', function() {
      if (!this.store.lastOptions) {
        this.store.load();
      };
    }, this);
    
    Ext.applyIf(this, {
      title: 'Tags',
      store: this.store,
      columns: [
        {header: "Tag", dataIndex: 'name', sortable: true}
      ],
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
      collapsible: true
    });
    
    Admin.views.posts.TagsTab.superclass.initComponent.apply(this, arguments);
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
      emptyMsg:    String.format("No {0} to display", Admin.models.Tag.modelName)
    });
  },
  
  /**
   * Called when the delete button is pressed, or the delete key is pressed.  By default this will ask the user to confirm,
   * then fire the controller's destroy action with the selected record's data.id and a reference to this grid as arguments.
   */
  onDelete: function() {
    Ext.Msg.confirm(
      'Are you sure?',
      String.format("Are you sure you want to delete this {0}?  This cannot be undone.", Admin.models.Tag.modelName),
      function(btn) {
        if (btn == 'yes') {
          var selected = this.getSelectionModel().getSelected();
          if (selected) {
            ExtMVC.OS.getOS().getController('tags').fireAction('destroy', null, [selected.data.id, this.store]);
          }
        };
      },
      this
    );
  }
});
