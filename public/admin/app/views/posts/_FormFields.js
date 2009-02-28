/**
 * Reusable form fields for new and edit post forms
 */
Admin.views.posts.FormFields = [
  {
    name:       'title',
    fieldLabel: 'Title',
    xtype:      'textfield',
    anchor:     '100%'
  },
  {
    name:       'body',
    fieldLabel: 'Body',
    xtype:      'textarea',
    height:     250,
    anchor:     '100%'
  }
];