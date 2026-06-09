package com.bookmyshow.moviebooking.repository;

import com.bookmyshow.moviebooking.entity.Show;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ShowRepository
        extends JpaRepository<Show, Long> {
}