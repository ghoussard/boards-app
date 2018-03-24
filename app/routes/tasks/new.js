import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';

export default Route.extend({
  templateName: 'tasks/form',
  model() {
    return RSVP.hash({
      newTask: EmberObject.create(),
      stories: this.get('store').findAll('story'),
      isNew: true
    });
  },
  actions: {
    save:function(oldValue, newValue) {
      let task = this.get('store').createRecord('task', JSON.parse(JSON.stringify(newValue)));
      let model = this.modelFor(this.routeName);
      let idStory = Ember.get(model, 'idStory');
      let story = Ember.get(model, 'stories').find(story => story.id == idStory);
      task.set('story', story);
      task.save().then(() => {this.transitionTo('tasks')});
    },
    cancel() {
      this.transitionTo('tasks');
    }
  }

});
