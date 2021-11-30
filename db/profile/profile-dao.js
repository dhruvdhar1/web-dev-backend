const model = require('./profile-model');

const findProfileById = (id) => model.findById(id.toString());

const findProfile = () => model.find();

const updateProfile = (id, profile) => model.updateOne({_id: id},
    {$set: profile});

module.exports = {
    findProfileById, updateProfile, findProfile
};