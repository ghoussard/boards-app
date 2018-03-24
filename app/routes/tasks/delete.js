import DeleteRoute from '../delete-route';

export default DeleteRoute.extend({
  model(params) {
    return this.get('store').findRecord('task', params.task_id)
  },
  getRedirectRoute() {
    return 'tasks';
  }
});
