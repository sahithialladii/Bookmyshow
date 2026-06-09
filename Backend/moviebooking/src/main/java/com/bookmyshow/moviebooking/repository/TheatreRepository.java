package com.bookmyshow.moviebooking.repository;

import com.bookmyshow.moviebooking.entity.Theatre;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TheatreRepository
        extends JpaRepository<Theatre, Long> {
}