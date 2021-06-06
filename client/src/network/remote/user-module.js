export default function ({
  client,
  filterQuery,
  mustContain,
  busy,
  encodeQueryAsString,
}) {
  return {
    listUserModules(query = {}) {
      const params = filterQuery(
        query
        // 'text',
        // 'limit',
        // 'offset',
        // 'sort',
        // 'sortdir'
      );
      return busy(client._.get('/user_module', { params }));
    },

    getUserModule(id) {
      return busy(client._.get(`/user_module/${id}`));
    },
  };
}
