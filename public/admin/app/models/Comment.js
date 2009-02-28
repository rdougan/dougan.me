/**
 * @class Admin.models.comment
 * @extends ExtMVC.Model
 */
ExtMVC.Model.define("Admin.models.Comment", {
  modelName: 'comment',
  fields:    [
    {name: 'id',         type: 'int'},
    {name: 'post_id',    type: 'int'},
    {name: 'name',       type: 'string'},
    {name: 'email',      type: 'string'},
    {name: 'body',       type: 'string'},
    {name: 'created_at', type: 'string'},
    {name: 'updated_at', type: 'string'}
  ],
  belongsTo: ['Post']
});
