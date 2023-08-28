package com.movies3.movies3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.movies3.movies3.model.Movie;
import com.movies3.movies3.model.User;
import com.movies3.movies3.service.UserServiceImpl;

@Controller
public class LoginController {
	
	@Autowired 
	private UserServiceImpl userServiceImpl;
	
	@GetMapping("/login")
	private String loginPage() {
		
		return "login";
	}
	
	@PostMapping("/login")
	private ResponseEntity<List<User>> getAllUsers(){
		return new ResponseEntity<List<User>>(userServiceImpl.getUser(), HttpStatus.OK);
	}

}


