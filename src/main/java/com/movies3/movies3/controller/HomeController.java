package com.movies3.movies3.controller;
import com.movies3.movies3.model.Movie;
import com.movies3.movies3.service.MovieService;
import com.movies3.movies3.service.MovieServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
public class HomeController {

	@Autowired
	private com.movies3.movies3.service.MovieService movieService;

	// THIS IS BEST TO RETRN JUST A STRING
	/*@GetMapping("/home")
	public String getAllMovies() {
		return "home";
	}*/

	
	/* @GetMapping("/home/movies") 
	 public ResponseEntity<List<Movie>> getAllMovies(){ 
		 return new ResponseEntity<List<Movie>>(movieService.allMovies(),
	  HttpStatus.OK);
	  }
	 */
	 
	
	 // @GetMapping("/") public String getAllMovies() { return "home puta"; }
	 

}
