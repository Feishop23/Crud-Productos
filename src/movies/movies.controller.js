const uuid = require("uuid");
const Movies = require("../models/movies.models");

const getAllMovies = () => {
  const data = Movies.findAll(); //? Traer todas las peliculas
  //? Select * from movies;
  return data;
};



const createMovie = async (data) => {
  const newMovie = await Movies.create({
    id: uuid.v4(),
    name: data.name,
    genre: data.genre,
    duration: data.duration,
    releaseDate: data.releaseDate,
  });
  return newMovie;
};


const getMovieById = async (id) => {
  const data = await Movies.findOne({
    where: {
      id,
    },
  });
 
  return data; 
};



const editMovie = async (id, data) => {
  const response = await Movies.update(data, {
    where: {
      id: id
      
    },
  });
  return response;//? Si el where no encuentra nada, retorna null
};





const deleteMovie = async (id) => {
    const data = await Movies.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  editMovie,
  deleteMovie
};
