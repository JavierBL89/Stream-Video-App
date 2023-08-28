package com.movies3.movies3.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="reviews")
public class Review {

	@Id
	private ObjectId id;
	private int numbOfReviews;
	private int like;
	private int dislike;
	private String body;

	// constructor
	public Review() {

	}

	public Review(ObjectId id, int like, int dislike) {
		this.id = id;
		this.like = like;
		this.dislike = dislike;
	}
	
	// constructor
		public Review(String reviewBody) {
           this.body = reviewBody;
		}

	// process
	public int getNumbOfReviews() {
		this.numbOfReviews = like + dislike;
		return numbOfReviews;
	}

	// setters & getters
	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public int getLikes() {
		return like;
	}

	public void setLikes(int like) {
		this.like = like;
	}

	public int getDislike() {
		return dislike;
	}

	public void setDislike(int dislike) {
		this.dislike = dislike;
	}

}
