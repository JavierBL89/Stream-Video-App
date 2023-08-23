package com.movies3.movies3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(scanBasePackages={"com.movies3.movies3.service", "com.movies3.movies3" })
@ComponentScan(basePackages={"com.movies3.movies3.service", "com.movies3.movies3.controller"})
public class MoviesApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);
	}

}