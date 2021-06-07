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

    createUserModule(userModule) {
      const expected = ['name', 'url'];
      const params = filterQuery(userModule, ...expected);
      const { missingKeys, promise } = mustContain(params, ...expected);
      console.log("userModule values", userModule)
      return missingKeys
      ? promise : busy(client._.post(`/user_module${encodeQueryAsString(params)}`));
    },
  };
}
