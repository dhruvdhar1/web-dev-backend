const model = require('./tweet-model');

const findAllTweets = () => model.find();
const findTweetbyId = (id) => model.findById(id);
const createTweet = (tweet) => model.create(tweet);
const deleteTweet = (id) => model.findByIdAndDelete(id).exec();
const updateTweet = (id, tweet) => model.updateOne({_id: id},
    {$set: tweet});

module.exports = {
  findAllTweets, createTweet, findTweetbyId,
  deleteTweet, updateTweet
};
