let profileData = {
	firstName: 'Jose',	
    lastName: 'Annunziato',	
    handle: 'jannunzi',
	profilePicture: 'https://dhruvdhar1.github.io/my-portfolio/assets/me.jpeg', 	
    bannerPicture: 'https://cdn.pixabay.com/photo/2017/01/18/10/43/banner-1989514_1280.png',
	bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retweets and likes are not endorsements',
    website: 'youtube.com/webdevtv',
	location: 'Boston, MA',	
    dateOfBirth: '7/7/1968',	
    dateJoined: '4/2009',
	followingCount: 312,	
    followersCount: 180
}

module.exports = (app) => {
    const getUserprofile = (req, res) => {
        res.json(profileData);
    }
    const updateProfile = (req, res) => {
        profileData = {
            ...req.body,
        }
        res.json(profileData);
    }
    app.put('/api/profile', updateProfile);
    app.get('/api/profile', getUserprofile);
};
