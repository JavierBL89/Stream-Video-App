package com.movies3.movies3.controller;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.movies3.movies3.model.Movie;

@Controller
public class MovieController {
	
	@Autowired
	private com.movies3.movies3.service.MovieServiceImpl movieServiceImpl;

	@GetMapping("/movies/{id}")
	public ResponseEntity<Optional <Movie>> getSingleMovie(@PathVariable ObjectId id){
		return new ResponseEntity<Optional<Movie>>(movieServiceImpl.singleMovie(id), HttpStatus.OK);
	}
}
