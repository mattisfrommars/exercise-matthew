class TweetService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(searchString) {
    const response = await this.apiClient.fetch("/search/tweets.json", {q: searchString});
    const body = await response.json();
    return body.statuses;
  }
}

export default TweetService;
