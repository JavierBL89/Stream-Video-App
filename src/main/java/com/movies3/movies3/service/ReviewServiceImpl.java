package com.movies3.movies3.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.movies3.movies3.model.Movie;
import com.movies3.movies3.model.Review;
import com.movies3.movies3.repository.ReviewRepository;

@Service
public class ReviewServiceImpl implements ReviewService{
	
	
	@Autowired
	private ReviewRepository reviewRepository;

	
	// Sometimesn we need to create a template for a more complex query..
	//..that happens withing the db and not in the repository
	@Autowired
	private MongoTemplate mongoTemplate;
	
   public Review createReview(String reviewBody, String movieId) {
		
	// First create,
	// WE CAN`T PASS an id because the review id is generated automatically
	// so and pass the body and create a constructo in Review that takes only the body
	   
		Review review = reviewRepository.insert(new Review(reviewBody));
		
	// Insert the new review into db
		

		
	// we use the template to perform an update on the movie class
	// so we need to update the reviewsId array an push anew one
		mongoTemplate.update(Movie.class)
		    .matching(Criteria.where("movieId").is(movieId))
		    .apply(new Update().push("reviewsId").value(review))
		    .first();
		
		// return the review we've just created
		return review;
		
	}	

}
