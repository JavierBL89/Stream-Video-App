package com.movies3.movies3.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.movies3.movies3.model.Movie;
import com.movies3.movies3.model.User;

@Service
public interface UserService {
	
	// database access method
		public List<User> getUser();
		
	
	User save(User user);

}
