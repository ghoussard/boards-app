import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';

export default Route.extend({
  templateName: 'steps/form',
  model() {
    return RSVP.hash({
      newStep: EmberObject.create(),
      isNew: true
    });
  },
  actions: {
    save:function(oldValue, newValue) {
      let step = this.get('store').createRecord('step', JSON.parse(JSON.stringify(newValue)));
      step.save().then(() => {this.transitionTo('steps')});
    },
    cancel() {
      this.transitionTo('steps');
    }
  }
});
