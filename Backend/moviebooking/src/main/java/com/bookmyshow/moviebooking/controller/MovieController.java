package com.bookmyshow.moviebooking.controller;

import com.bookmyshow.moviebooking.entity.Movie;
import com.bookmyshow.moviebooking.service.MovieService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin("*")
public class MovieController {

    @Autowired
    MovieService movieService;

    @PostMapping
    public Movie addMovie(
            @RequestBody Movie movie){

        return movieService.addMovie(movie);
    }

    @GetMapping
    public List<Movie> getAllMovies(){

        return movieService.getAllMovies();
    }

    @GetMapping("/{id}")
    public Movie getMovieById(
            @PathVariable Long id){

        return movieService.getMovieById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteMovie(
            @PathVariable Long id){

        movieService.deleteMovie(id);
    }
}