package com.movies3.movies3.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.RequiredJsonSchemaProperty;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.movies3.movies3.model.Movie;

@Controller
@CrossOrigin(origins = "*")
public class MovieController {
	
	@Autowired
	private com.movies3.movies3.service.MovieServiceImpl movieServiceImpl;
	
	@GetMapping("/movies/all")
	public @ResponseBody List<Movie> getAllMovies(
			 @RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo,
			    @RequestParam(value = "pageSize", defaultValue = "6", required = false) int pageSize
			    ){
		return movieServiceImpl.allMovies(pageNo, pageSize);
	}
	
	@GetMapping("/movies/usa")
	public @ResponseBody List<Movie> getAmericanMovies(
			 @RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo,
			    @RequestParam(value = "pageSize", defaultValue = "6", required = false) int pageSize
			    ){
		return movieServiceImpl.getAmericanMovies(pageNo, pageSize);
	}
	
	@GetMapping("/movies/eng")
	public @ResponseBody List<Movie> getEngMovies(
			@RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo,
			@RequestParam(value = "pageSize", defaultValue ="6", required = false) int pageSize
			){
		return movieServiceImpl.getEnglishMovies(pageNo, pageSize);
	}
	
	@GetMapping("/movies/top20")
		public @ResponseBody List<Movie> getTop20Movies(
				@RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo, 
				@RequestParam(value = "pageSize", defaultValue = "6", required = false) int pageSize
				){
			return movieServiceImpl.getTop20Movies(pageNo, pageSize);
		}
	
	@GetMapping("/movies/nextWeek")
	public @ResponseBody List<Movie> getNextWeekMovies(
			@RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo, 
			@RequestParam(value = "pageSize", defaultValue = "6", required = false) int pageSize
			){
		return movieServiceImpl.getNextWeekMovies(pageNo, pageSize);
	}

	@GetMapping("/movies/trends")
	public @ResponseBody List<Movie> getTrendsMovies(
			@RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo, 
			@RequestParam(value = "pageSize", defaultValue = "6", required = false) int pageSize){
		return movieServiceImpl.getTrendsMovies(pageNo, pageSize);
	}
	
	@GetMapping("/series/popular")
	public @ResponseBody List<Movie> getPopularSeries(
			@RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo, 
			@RequestParam(value = "pageSize", defaultValue = "6", required = false) int pageSize){
		return movieServiceImpl.getPopularSeries(pageNo, pageSize);
	}
	
	
	@GetMapping("/series/eng")
	public @ResponseBody List<Movie> getEnglishSeries(
			@RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo, 
			@RequestParam(value = "pageSize", defaultValue = "6", required = false) int pageSize){
		return movieServiceImpl.getEnglishSeries(pageNo, pageSize);
	}
	
	@GetMapping("/series/usa")
	public @ResponseBody List<Movie> getUsaSeries(
			@RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo, 
			@RequestParam(value = "pageSize", defaultValue = "6", required = false) int pageSize){
		return movieServiceImpl.getUsaSeries(pageNo, pageSize);
	}
	
	@GetMapping("/movies/action")
	public @ResponseBody List<Movie> getActionMovies(
			@RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo, 
			@RequestParam(value = "pageSize", defaultValue = "6", required = false) int pageSize){
		return movieServiceImpl.getActionMovies(pageNo, pageSize);
	}
	/**@GetMapping("/movies/{id}")
	public ResponseEntity<Optional <Movie>> getSingleMovie(@PathVariable String id){
		return new ResponseEntity<Optional<Movie>>(movieServiceImpl.singleMovie(id), HttpStatus.OK);
	}*/
}
