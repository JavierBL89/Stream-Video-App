package com.movies3.movies3.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

import com.movies3.movies3.model.Movie;
import com.movies3.movies3.repository.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService {

	@Autowired
	private MovieRepository movieRepository;
	
	
	@Override
	public Movie save(Movie movie) {
		return null;
	}

	@Override
	public List<Movie> allMovies(int pageNo, int pageSize) {
		
		
		Pageable pageableBase =  PageRequest.of(pageNo, pageSize);


		Page<Movie> get100Movies = movieRepository.findAll( pageableBase);
		// gets all the content within that Page
		List<Movie> listOfMovies = get100Movies.getContent();
		
		/*List<Movie> randomList = new ArrayList<Movie>();
		int count = 0;
		for(int i = 0;i <= get100Movies.size() - 1; i++) {
			random = (int) (Math.floor(Math.random() * get100Movies.size()));
			if(count == 100) {
				break;
			}else {
				randomList.add(get100Movies.get(random));
			}
			count++;
		}*/

		return listOfMovies;
	}
	
	@Override
	public Optional<Movie> singleMovie(String id) {
	       System.out.print(movieRepository.findById(id));
		return movieRepository.findById(id);
	}

	@Override
	public List<Movie> getContinueWatching(int pageNo, int pageSize) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Movie> getMyList(int pageNo, int pageSize) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Movie> getEnglishMovies(int pageNo, int pageSize) {
		// TODO Auto-generated method stub
		Pageable pageableEngMovies = PageRequest.of(pageNo, pageSize);
		Page <Movie> engMoviesFound = movieRepository.findEnglishMovies(pageableEngMovies);
		List <Movie> engMoviesList = engMoviesFound.getContent();
		engMoviesList.forEach(movie -> {System.out.println(movie.getName());});
		 System.out.println(" ");
		return engMoviesList;
	}
/***
 * Method is meat to retreive only american movies ,
 *  but dataset documents do not have this attribute. 
 *  Search criteria is on ID's
 */
	@Override
	public List<Movie> getAmericanMovies(int pageNo, int pageSize) {

		Pageable pageableUSA =  PageRequest.of(pageNo, pageSize);
		Page <Movie> americanMoviesFound = movieRepository.findAmericanMovies(pageableUSA);
		List <Movie> americanMoviesList = americanMoviesFound.getContent();
		americanMoviesList.forEach(movie -> {System.out.println(movie.getName());});
		 System.out.println(" ");
		 
		// for(int i = 0; i< americanMoviesList.length)
		return americanMoviesList;
	}
	@Override
	public List<Movie> getTop20Movies(int pageNo, int pageSize) {
        Pageable pagableTop20 = PageRequest.of(pageNo, pageSize);
        Page <Movie> top20MoviesFound = movieRepository.findTop20Movies(pagableTop20);
        List <Movie> top20MoviesList = top20MoviesFound.getContent();
        top20MoviesList.forEach(movie -> {System.out.println(movie.getName());});
        System.out.println(" ");
		return top20MoviesList;
	}

}
//tt0144999
//@Query("{'ImdbId': {$gte: tt0144599, $lte: tt0144999}}")
