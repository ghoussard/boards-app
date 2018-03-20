import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';

export default Route.extend({
  templateName: 'tags/form',
  model() {
    return RSVP.hash({
      newTag: EmberObject.create(),
      isNew: true,
      colors:['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative']
    });
  },
  actions: {
    save:function(oldValue, newValue) {
      let tag = this.get('store').createRecord('tag', JSON.parse(JSON.stringify(newValue)));
      tag.save().then(() => {this.transitionTo('tags')});
    },
    cancel() {
      this.transitionTo('tags');
    }
  }
});
