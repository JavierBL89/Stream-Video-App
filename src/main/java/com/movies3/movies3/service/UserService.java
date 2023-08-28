package com.movies3.movies3.service;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import com.movies3.movies3.model.Movie;
import com.movies3.movies3.model.User;

@Service
public interface UserService {
	
	// database access method
	public List<User> findUserByUsername();
		
	
	User save(User user);
	

}
