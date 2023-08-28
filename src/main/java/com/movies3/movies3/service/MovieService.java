package com.movies3.movies3.service;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import com.movies3.movies3.model.Movie;


public interface MovieService {

	// database access method
	public List<Movie> allMovies();

	Movie save(Movie movie);

	Optional<Movie> singleMovie(ObjectId id);

}
