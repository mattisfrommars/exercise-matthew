import ApiClient from "./ApiClient";

it('parses the query string properly', () => {
  const apiClient = new ApiClient();
  const string = apiClient.toQueryString({foo: 'bar'});
  expect(string).toEqual('?foo=bar');
});
