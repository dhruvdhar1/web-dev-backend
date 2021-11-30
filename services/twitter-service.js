// let tweets = require('../data/tweets.json');
const dao = require('../db/tweets/tweet-dao');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(tweets);
    }
    const postNewTweet = (req, res) => {
        const newTweet = {
            _id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatar-image": "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            "logo-image": "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body,
        }
        tweets = [
            newTweet,
            ...tweets
        ];
        res.json(newTweet);
    }
    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.filter(tweet => tweet._id !== id);
        res.sendStatus(200);
    }
    const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }

    const findAllTweets2 = (req, res) => {
        dao.findAllTweets().then(tweet => {
            const tweetList = tweet.map(t => t);
            res.json(tweetList);
        })
    }
    const postNewTweet2 = (req, res) => {
        const newTweet = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatar-image": "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            "logo-image": "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body,
        }
        dao.createTweet(newTweet).then(tweet => {
            res.json(tweet);
        })
    }
    const deleteTweet2 = (req, res) => {
        const id = req.params['id'];
        dao.deleteTweet(id).then(tweet => {
        });
        res.sendStatus(200);
    }
    const likeTweet2 = (req, res) => {
        const id = req.params['id'];
        dao.findTweetbyId(id).then(tweet => {
            let newTweet = JSON.parse(JSON.stringify(tweet));
            const isLiked = !!(newTweet.liked) ? true : false;
            newTweet = {
                ...newTweet,
                stats: {
                    ...newTweet.stats,
                    likes: (isLiked) ? --newTweet.stats.likes
                        : ++newTweet.stats.likes
                },
                liked: !isLiked
            }
            dao.updateTweet(id, newTweet).then(() => {
                res.json(newTweet);
            });
        });
    }
    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', postNewTweet);
    app.get('/api/tweets', findAllTweets);



    app.put('/rest/tweets/:id/like', likeTweet2);
    app.delete('/rest/tweets/:id', deleteTweet2);
    app.post('/rest/tweets', postNewTweet2);
    app.get('/rest/tweets', findAllTweets2);
};
