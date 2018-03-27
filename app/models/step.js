import DS from 'ember-data';

export default DS.Model.extend({
  title:DS.attr('string'),
  projects: DS.hasMany('project', {inverse:'step'})
});
