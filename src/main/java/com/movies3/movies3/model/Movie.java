package com.movies3.movies3.model;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection = "movies")
public class Movie {
	@Id
	private ObjectId id;
	private String imgId;
	private String title;
	private String releaseDate;
	private String trailerLink;
	private String poster;
	private String description;
	private String directorId;
	private List<String> filmCast;
	private List<String> genres;
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

	public Movie(ObjectId id, String imgId, String reviewsId, String title, String releaseDate, String trailerLink,
			String poster, String description, String directorId, List<String> filmCast, List<String> genres,
			List<String> backdrops) {
		this.id = id;
		this.imgId = imgId;
		this.title = title;
		this.releaseDate = releaseDate;
		this.trailerLink = trailerLink;
		this.poster = poster;
		this.description = description;
		this.directorId = directorId;
		this.filmCast = filmCast;
		this.genres = genres;
		this.backdrops = backdrops;
	}

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getImgId() {
		return imgId;
	}

	public void setImgId(String imgId) {
		this.imgId = imgId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getTrailerLink() {
		return trailerLink;
	}

	public void setTrailerLink(String trailerLink) {
		this.trailerLink = trailerLink;
	}

	public String getPoster() {
		return poster;
	}

	public void setPoster(String poster) {
		this.poster = poster;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDirectorId() {
		return directorId;
	}

	public void setDirectorId(String directorId) {
		this.directorId = directorId;
	}

	public List<String> getFilmCast() {
		return filmCast;
	}

	public void setFilmCast(List<String> filmCast) {
		this.filmCast = filmCast;
	}

	public List<String> getGenres() {
		return genres;
	}

	public void setGenres(List<String> genres) {
		this.genres = genres;
	}

	public List<String> getBackdrops() {
		return backdrops;
	}

	public void setBackdrops(List<String> backdrops) {
		this.backdrops = backdrops;
	}

}
