package com.movies3.movies3.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class FilmfilmController {

	/*@GetMapping("/")
	public String homePage(Map<String, Object> model) {
		model.put("message", "Cabron");
		return "index";

	}*/
	
	@GetMapping("/")
	public String homePage() {
		
		return "index";

	}
}
