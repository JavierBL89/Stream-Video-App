package com.movies3.movies3.repository;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.movies3.movies3.model.Movie;


@Repository
public interface MovieRepository extends MongoRepository <Movie, String> {

	List<Movie> findByName(String name);
	
	
	Page<Movie> findAll(Pageable pageableBase);

	@Query("{'_id': {$gte:'tt0144999',$lte:'tt0149999'}}")
	Page<Movie> findAmericanMovies(Pageable pageableBase);
	
	// We tell what type of data we are dealing with HERE HERE HERE
	// and what type of id we are dealing with
	
	@Query("{'_id': {$gte:'tt0249999',$lte:'tt0269999'}}")
	Page<Movie> findEnglishMovies(Pageable pageableBase);

	@Query("{'ratingValue': {$gte:'7.0',$lte:'8.0'}}")
	Page<Movie> findTop20Movies(Pageable pageableBase);
	
	  public long count();
}
