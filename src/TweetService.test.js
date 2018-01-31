import TweetService from "./TweetService";
import {FakeApiClient} from "./TestHelpers";


it("returns a list of tweets", () => {
  const apiClient = new FakeApiClient();
  const tweetService = new TweetService(apiClient);
  const tweets = tweetService.search("test");

  expect(tweets.length).not.toEqual(0);
});
