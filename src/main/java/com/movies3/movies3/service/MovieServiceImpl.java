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

	/***
	 * Get English movies list with Pageable class implementation,
	 *  and converts the returned data into a list
	 */
	@Override
	public List<Movie> getEnglishMovies(int pageNo, int pageSize) {
		Pageable pageableEngMovies = PageRequest.of(pageNo, pageSize);
		Page <Movie> engMoviesFound = movieRepository.findEnglishMovies(pageableEngMovies);
        // convert to a movie list
		List <Movie> engMoviesList = engMoviesFound.getContent();
		return engMoviesList;
	}
	
	/***
	 * Get English movies list with Pageable class implementation,
	 *  and converts the returned data into a list
	 */
	@Override
	public List<Movie> getAmericanMovies(int pageNo, int pageSize) {

		Pageable pageableUSA =  PageRequest.of(pageNo, pageSize);
		Page <Movie> americanMoviesFound = movieRepository.findAmericanMovies(pageableUSA);
        // convert to a movie list
		List <Movie> americanMoviesList = americanMoviesFound.getContent();
		return americanMoviesList;
	}
	
	/***
	 * Get top20 movies list with Pageable class implementation,
	 *  and converts the returned data into a list
	 */
	@Override
	public List<Movie> getTop20Movies(int pageNo, int pageSize) {
		
        Pageable pagableTop20 = PageRequest.of(pageNo, pageSize);
        Page <Movie> top20MoviesFound = movieRepository.findTop20Movies(pagableTop20);
        // convert to a movie list
        List <Movie> top20MoviesList = top20MoviesFound.getContent();
       
		return top20MoviesList;
	}

	/***
	 * Get Next movies list with Pageable class implementation,
	 *  and converts the returned data into a list
	 */
	@Override
	public List<Movie> getNextWeekMovies(int pageNo, int pageSize) {
		Pageable pagableNextWeek = PageRequest.of(pageNo, pageSize);
        Page <Movie> nextWeekMoviesFound = movieRepository.findNextWeekMovies(pagableNextWeek);
        // convert to a movie list
        List <Movie> nextWeekMoviesList = nextWeekMoviesFound.getContent();
		return nextWeekMoviesList;
	}

	/***
	 * Get trends movies list with Pageable class implementation,
	 *  and converts the returned data into a list
	 */
	@Override
	public List<Movie> getTrendsMovies(int pageNo, int pageSize) {
		Pageable pagableTrends = PageRequest.of(pageNo, pageSize);
        Page <Movie> trendsMoviesFound = movieRepository.findTrendsMovies(pagableTrends);
        // convert to a movie list
        List <Movie> trendsMoviesList = trendsMoviesFound.getContent();
		return trendsMoviesList;
	}
	
	/***
	 * Get popular series  list with Pageable class implementation,
	 *  and converts the returned data into a list
	 */
	@Override
	public List<Movie> getPopularSeries(int pageNo, int pageSize) {
		Pageable pagablePopularSeries = PageRequest.of(pageNo, pageSize);
        Page <Movie> popularSeriesFound = movieRepository.findPopularSeries(pagablePopularSeries);
        // convert to a movie list
        List <Movie> popularSeriesList = popularSeriesFound.getContent();
		return popularSeriesList;
	}
	
	/***
	 * Get english series  list with Pageable class implementation,
	 *  and converts the returned data into a list
	 */
	@Override
	public List<Movie> getEnglishSeries(int pageNo, int pageSize) {
		Pageable pagableEngishSeries = PageRequest.of(pageNo, pageSize);
        Page <Movie> engSeriesFound = movieRepository.findEnglishSeries(pagableEngishSeries);
        // convert to a movie list
        List <Movie> engSeriesList = engSeriesFound.getContent();
		return engSeriesList;
	}

	/***
	 * Get american series  list with Pageable class implementation,
	 *  and converts the returned data into a list
	 */
	public List<Movie> getUsaSeries(int pageNo, int pageSize) {
		Pageable pagableUsaSeries = PageRequest.of(pageNo, pageSize);
        Page <Movie> usaSeriesFound = movieRepository.findEnglishSeries(pagableUsaSeries);
        // convert to a movie list
        List <Movie> usaSeriesList = usaSeriesFound.getContent();
		return usaSeriesList;
	}

	/***
	 * Get action movies list with Pageable class implementation,
	 *  and converts the returned data into a list
	 */
	public List<Movie> getActionMovies(int pageNo, int pageSize) {
		Pageable pagableActionMovies = PageRequest.of(pageNo, pageSize);
        Page <Movie> actionMoviesFound = movieRepository.findActionMovies(pagableActionMovies);
        // convert to a movie list
        List <Movie> actionMoviesList = actionMoviesFound.getContent();
		return actionMoviesList;
	}

	/***
	 * Get drama movies list with Pageable class implementation,
	 *  and converts the returned data into a list
	 */
	public List<Movie> getDramaMovies(int pageNo, int pageSize) {
		Pageable pagableDramaMovies = PageRequest.of(pageNo, pageSize);
        Page <Movie> dramaMoviesFound = movieRepository.findDramaMovies(pagableDramaMovies);
        // convert to a movie list
        List <Movie> dramaMoviesList = dramaMoviesFound.getContent();
		return dramaMoviesList;
	}
}
//tt0144999
//@Query("{'ImdbId': {$gte: tt0144599, $lte: tt0144999}}")
