package com.bookmyshow.moviebooking.repository;

import com.bookmyshow.moviebooking.entity.Movie;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository
        extends JpaRepository<Movie, Long> {
}