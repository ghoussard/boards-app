import DeleteRoute from '../delete-route';

export default DeleteRoute.extend({
  model(params) {
    return this.get('store').findRecord('step', params.step_id)
  },
  getRedirectRoute() {
    return 'steps';
  }
});
