package com.movies3.movies3.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection = "movies")
public class Movie {
	
	@Transient
	public static final String SEQUENCE_ID = "movies_sequence";
	@Id
	private String id;
	private String ImdbId;
	private String name;
	private String year;
	private String trailerLink;
	private String certificate;
	private String runtime;
	private List<String> genre;
	private String ratingValue;
	private String summary_text;
	private String ratingCount;
	private String poster_url;
	private String description;
	private Map<String, String> director;
	private List<String> cast; ;
	private List<String> backdrops;

	// This will make to store only the Id of the reviews instead of the whole
	// document
	// and the view will be in a separate collection
	// This is cAlled manual reference relationship.
	// There are more relationships to create SEE MONGO DOCS !!!
	@DocumentReference
	private List<Review> reviewsId;
	// this

	public Movie() {

	};

	

	public Movie(String id, String imdbId, String name, String year, String trailerLink, String certificate,
			String runtime, List<String> genre, String ratingValue, String summary_text, String ratingCount,
			String poster_url, String description, Map<String, String> director, List<String> cast,
			List<String> backdrops, List<Review> reviewsId) {
		this.id = id;
		ImdbId = imdbId;
		this.name = name;
		this.year = year;
		this.trailerLink = trailerLink;
		this.certificate = certificate;
		this.runtime = runtime;
		this.genre = genre;
		this.ratingValue = ratingValue;
		this.summary_text = summary_text;
		this.ratingCount = ratingCount;
		this.poster_url = poster_url;
		this.description = description;
		this.director = director;
		this.cast = cast;
		this.backdrops = backdrops;
		this.reviewsId = reviewsId;
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getImdbId() {
		return ImdbId;
	}

	public void setImdbId(String imdbId) {
		ImdbId = imdbId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getTrailerLink() {
		return trailerLink;
	}

	public void setTrailerLink(String trailerLink) {
		this.trailerLink = trailerLink;
	}

	public String getCertificate() {
		return certificate;
	}

	public void setCertificate(String certificate) {
		this.certificate = certificate;
	}

	public String getRuntime() {
		return runtime;
	}

	public void setRuntime(String runtime) {
		this.runtime = runtime;
	}

	public List<String> getGenre() {
		return genre;
	}

	public void setGenre(List<String> genre) {
		this.genre = genre;
	}

	public String getRatingValue() {
		return ratingValue;
	}

	public void setRatingValue(String ratingValue) {
		this.ratingValue = ratingValue;
	}

	public String getSummary_text() {
		return summary_text;
	}

	public void setSummary_text(String summary_text) {
		this.summary_text = summary_text;
	}

	public String getRatingCount() {
		return ratingCount;
	}

	public void setRatingCount(String ratingCount) {
		this.ratingCount = ratingCount;
	}

	public String getPoster_url() {
		return poster_url;
	}

	public void setPoster_url(String poster_url) {
		this.poster_url = poster_url;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Map<String, String> getDirector() {
		return director;
	}

	public void setDirector(Map<String, String> director) {
		this.director = director;
	}

	public List<String> getCast() {
		return cast;
	}

	public void setCast(List<String> cast) {
		this.cast = cast;
	}

	public List<String> getBackdrops() {
		return backdrops;
	}

	public void setBackdrops(List<String> backdrops) {
		this.backdrops = backdrops;
	}

	public List<Review> getReviewsId() {
		return reviewsId;
	}

	public void setReviewsId(List<Review> reviewsId) {
		this.reviewsId = reviewsId;
	}

	
}
