/**
 * @class Admin.models.Post
 * @extends ExtMVC.Model
 */
ExtMVC.Model.define("Admin.models.Post", {
  modelName: 'post',
  fields:    [
    {name: 'id',         type: 'int'},
    {name: 'title',      type: 'string'},
    {name: 'body',       type: 'string'},
    {name: 'created_at', type: 'string'},
    {name: 'updated_at', type: 'string'}
  ],
  hasMany: ['Comment']
});
