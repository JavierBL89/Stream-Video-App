package com.movies3.movies3.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.movies3.movies3.model.Movie;
import com.movies3.movies3.model.Review;
import com.movies3.movies3.service.ReviewServiceImpl;

@Controller
public class ReviewController {
	
	@Autowired
	private ReviewServiceImpl reviewServiceImpl;
	
	@PostMapping("/add-review")                         // Whatever we get as requestbody, convert it into a map of key string, value string. 
	                                                        // And we name it payload
	private ResponseEntity<Review> postMovieReview(@RequestBody Map<String, String> payload) {
		return new ResponseEntity<Review>(reviewServiceImpl.createReview(
				payload.get("reviewBody"), payload.get("movieId")), HttpStatus.CREATED);
	}

}
