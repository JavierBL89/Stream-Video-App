package com.movies3.movies3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.movies3.movies3.model.Movie;

@Service
public interface MovieService {

	Movie save(Movie movie);

	Optional<Movie> singleMovie(String id);

	// database access method
	public List<Movie> allMovies(int pageNo, int pageSize);
	
	// continueWatching
	public List<Movie> getContinueWatching(int pageNo, int pageSize);
	
	// myList
	public List<Movie> getMyList(int pageNo, int pageSize);

	// englishMovies
	public List<Movie> getEnglishMovies(int pageNo, int pageSize);
		
	// americanMovies
	public List<Movie> getAmericanMovies(int pageNo, int pageSize);
	
	// top20
	public List<Movie> getTop20Movies(int pageNo, int pageSize);
	
	// nextWeek 
	public List<Movie> getNextWeekMovies(int pageNo, int pageSize);
	
	// trends
	List<Movie> getTrendsMovies(int pageNo, int pageSize);

	// popular series
	List<Movie> getPopularSeries(int pageNo, int pageSize);

    // eng series
	List<Movie> getEnglishSeries(int pageNo, int pageSize);

	// usa series
    List<Movie> getUsaSeries(int pageNo, int pageSize);
    
	// action
    List<Movie> getActionMovies(int pageNo, int pageSize);
    
	// drama
    List<Movie> getDramaMovies(int pageNo, int pageSize);
}
