import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';

export default Route.extend({
  templateName: 'tags/form',
  model(params) {
    return RSVP.hash({
      oldTag: this.get('store').findRecord('tag', params.tag_id),
      colors:['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative']
    });
  },
  afterModel(model){
    let newTag = EmberObject.create(JSON.parse(JSON.stringify(model.oldTag)));
    Ember.set(model,'newTag',newTag);
  },
  actions:{
    save(oldTag, newTag) {
      oldTag.set('title', newTag.title);
      oldTag.set('color', newTag.color);
      oldTag.save().then( () => { this.transitionTo('tags'); });
    },
    cancel() {
      this.transitionTo('tags');
    }
  }
});
