package com.movies3.movies3.repository;
import com.movies3.movies3.model.Movie;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
	// We tell what type of data we are dealing with HERE HERE HERE
	// and what type of id we are dealing with

}
