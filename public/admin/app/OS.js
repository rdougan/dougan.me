var Admin = {};

/**
 * @class Admin.OS
 * @extends ExtMVC.OS
 */
Admin.OS = Ext.extend(ExtMVC.OS, {
  name:            "Admin",
  usesHistory:     true,
  viewportBuilder: "leftmenu",
  
  getViewportBuilderConfig: function() {
    return {
      menu: {
        items: [
          { xtype: 'menu_header', title: 'Overview' },
          this.router.linkTo({controller: 'index', action: 'index'}, {text: 'Dashboard'}),
          
          { xtype: 'menu_header', title: 'Posts' },
          this.router.linkTo({controller: 'posts', action: 'index'}, {text: 'Show All'}),
          this.router.linkTo({controller: 'posts', action: 'new'}, {text: 'New'})
        ]
      },
      useTabs: false,
      topBar: {
        border: false,
        layout: 'fit',
        height:  26,
        items: [
          {
            type:   'panel',
            border: false,
            tbar: [
              {xtype: 'tbtext', text: 'dougan.me'},
              '->',
              {
                text:    'Home',
                cls:     'x-btn-text-icon home',
                handler: function() {
                  window.location = "/";
                }
              }, '-',
              {
                text:    'Logout',
                cls:     'x-btn-text-icon logout',
                iconCls: 'logout',
                handler: function() {
                  window.location = "/logout";
                }
              }
            ]
          }
        ]

      }
    };
  }
});

Admin.OS = new Admin.OS();