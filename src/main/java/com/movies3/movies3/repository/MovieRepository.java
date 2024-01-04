package com.movies3.movies3.repository;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
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
	
	@Query("{'_id':{$gte: 'tt0229999', $lte: 'tt0499989'}}")
	Page<Movie> findNextWeekMovies(Pageable pageableBase);
	
	@Query("{'_id':{$gte: 'tt0023128', $lte: 'tt0843128'}}")
	Page<Movie> findTrendsMovies(Pageable pageableBase);

	@Query("{'_id':{$gte: 'tt8111676', $lte: 'tt9199976'}}")
	Page<Movie> findTop20Movies(Pageable pageableBase);
	
	@Query("{'_id':{$gte: 'tt0054128', $lte: 'tt0074128'}}")
	Page<Movie> findPopularSeries(Pageable pageableBase);
	
	@Query("{'_id':{$gte: 'tt0074128', $lte: 'tt0174128'}}")
	Page<Movie> findEnglishSeries(Pageable pageableBase);
	
	@Query("{'_id':{$gte: 'tt0044340', $lte: 'tt0074340'}}")
	Page<Movie> findUsaSeries(Pageable pageableBase);
	
	@Query("{'genre':{$regex:Action}}")
	Page<Movie> findActionMovies(Pageable pageableBase);
	
	@Query("{'genre':{$regex:Drama}}")
	Page<Movie> findDramaMovies(Pageable pagableDramaMovies);
	
	@Query("{'genre':{$regex:Comedy}}")
	Page<Movie> findComedyMovies(Pageable pagableComedyMovies);

	@Query("{'genre':{$regex:Romance}}")
	Page<Movie> findRomanceMovies(Pageable pagableComedyMovies);
	  public long count();



}
