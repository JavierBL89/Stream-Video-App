package com.movies3.movies3.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.movies3.movies3.model.User;
import com.movies3.movies3.repository.UserRepository;

public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public List<User> getUser() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User save(User user) {
		// TODO Auto-generated method stub
		return null;
	}

}
