import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      tags: this.get('store').findAll('tag'),
      fields: ['title', 'color'],
      operations: [{icon:'red remove',link:'tags.delete'}]
    });
  }
});
