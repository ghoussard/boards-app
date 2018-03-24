import Ember from 'ember'
import RSVP from 'rsvp';

const { Route, getOwner } = Ember;

export default Route.extend({
  model() {
    return RSVP.hash({
      models: getOwner(this).lookup('data-adapter:main').getModelTypes().map(type => {
        return {name: type.name,objects:this.get('store').findAll(type.name)};
      }),
      icons: ['user','table','address card outline','tasks','step forward','tag']
    });
  }
});
