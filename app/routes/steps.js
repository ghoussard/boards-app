import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      steps: this.get('store').findAll('step'),
      fields:['title'],
      operations:[]
    });
  }
});
