import Route from '@ember/routing/route';
import RSVP from "rsvp";
import EmberObject from '@ember/object';

export default Route.extend({
  templateName: 'steps/form',
  model(params) {
    return RSVP.hash({
      oldStep: this.get('store').findRecord('step', params.step_id)
    });
  },
  afterModel(model){
    let newStep = EmberObject.create(JSON.parse(JSON.stringify(model.oldStep)));
    Ember.set(model,'newStep',newStep);
  },
  actions:{
    save(oldStep, newStep) {
      oldStep.set('title', newStep.title);
      oldStep.save().then( () => { this.transitionTo('steps'); });
    },
    cancel() {
      this.transitionTo('steps');
    }
  }
});
