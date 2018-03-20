import DeleteRoute from '../delete-route';

export default DeleteRoute.extend({
  model(params) {
    return this.get('store').findRecord('tag', params.tag_id)
  },
  getRedirectRoute() {
    return 'tags';
  }

});
