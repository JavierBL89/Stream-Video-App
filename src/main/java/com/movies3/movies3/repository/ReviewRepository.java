package com.movies3.movies3.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.movies3.movies3.model.Review;

@Repository
public interface ReviewRepository extends MongoRepository <Review, ObjectId >{

}
