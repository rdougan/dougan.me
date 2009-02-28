/**
 * @class Admin.models.Tag
 * @extends ExtMVC.Model
 */
ExtMVC.Model.define("Admin.models.Tag", {
  modelName: 'tag',
  fields:    [
    {name: 'tag', type: 'string'}
  ],
  belongsTo: ['Post']
});
