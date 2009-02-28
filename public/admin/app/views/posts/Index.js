// /**
//  * @class Admin.views.posts.Index
//  * @extends Ext.Panel
//  * Default Welcome to Ext MVC Panel - replace this with your own thing
//  */
// Admin.views.posts.Index = Ext.extend(Ext.grid.GridPanel, {
// 
//   initComponent: function() {
//     var model  = Admin.models.Post;
//     
//     boo2 = model.findAll();
//     
//     Ext.applyIf(this, {
//       title: "Showing Posts",
//       store: model.findAll(),
//       columns: [
//         {header: "#", width: 20, sortable: true, dataIndex: 'id'},
//         {header: "Title", sortable: true, dataIndex: 'title'},
//         {id: 'body', header: "Message", sortable: true, dataIndex: 'body'}
//       ],
//       stripeRows: true,
//       autoExpandColumn: 'body'
//     });
//     
//     Admin.views.posts.Index.superclass.initComponent.apply(this, arguments);
//   }
// });

// /**
//  * @class Admin.views.posts.Index
//  * @extends Ext.Panel
//  * Default Welcome to Ext MVC Panel - replace this with your own thing
//  */
// Admin.views.posts.Index = Ext.extend(Ext.Panel, {
// 
//   initComponent: function() {
//     var view = this;
//     
//     Admin.models.Post.findById(1, {
//       success: function(model) {
//         view.addGrid(model);
//       }
//     });
//     
//     Ext.applyIf(this, {
//       title: "Posts"
//     });
//     
//     Admin.views.posts.Index.superclass.initComponent.apply(this, arguments);
//   },
//   
//   /**
//    * 
//    */
//   addGrid: function(model) {
//     this.add({
//       xtype:       'hasmany_editorgrid',
//       modelObj:    model,
//       association: model.comments,
//       columns:     [
//         {name: 'post_id',    type: 'int'},
//         {name: 'name',       type: 'string'},
//         {name: 'email',      type: 'string'},
//         {name: 'body',       type: 'string'},
//         {name: 'created_at', type: 'string'},
//         {name: 'updated_at', type: 'string'}
//       ]
//     });
//     
//     this.doLayout();
//   }
// });