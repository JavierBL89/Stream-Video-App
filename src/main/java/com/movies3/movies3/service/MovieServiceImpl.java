package com.movies3.movies3.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movies3.movies3.model.Movie;
import com.movies3.movies3.repository.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService {

	@Autowired
	private MovieRepository movieRepository;
	
	
	@Override
	public Movie save(Movie movie) {
		return null;
	}

	@Override
	public List<Movie> allMovies() {

		return movieRepository.findAll();
	}

}
