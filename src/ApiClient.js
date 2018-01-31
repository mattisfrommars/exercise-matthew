export default class ApiClient {
  constructor(config) {
    this.config = config;
  }

  fetch(url, queryString) {
    return fetch(`${this.config.twitter.endpoint}${url}${this.toQueryString(queryString)}`, {
      headers: {
        Authorization: `Bearer ${this.config.twitter.bearerToken}`
      }
    });
  }

  toQueryString(object) {
    return `?${Object.keys(object).map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`;
    }).join('&')}`;
  }
}
