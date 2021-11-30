const model = require('./model');

const findAllMovies = () => model.find();


const deleteMovie = (id) =>
  model.findByIdAndRemove({_id: id});

const findMovieById = (id) =>
  model.findById(id);

const createMovie = (movie) =>
  model.create(movie);

const updateMovie = (id, movie) =>
  model.updateOne({_id: id},
    {$set: movie});


module.exports = {
  findAllMovies, deleteMovie, createMovie,
  findMovieById, updateMovie
};
