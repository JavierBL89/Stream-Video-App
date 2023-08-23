package com.movies3.movies3.model;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="users")
public class User {
	
	@Id
	private ObjectId userId;
	private String fname;
	private String lname;
	private String password;
	private String email;
	
	
	public User() {}
	
	public User(ObjectId userId, String fname, String lname, String password, String email) {
		this.userId = userId;
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.email = email;
	}
	
	
	public ObjectId getUserId() {
		return userId;
	}
	public void setUserId(ObjectId userId) {
		this.userId = userId;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	

}
