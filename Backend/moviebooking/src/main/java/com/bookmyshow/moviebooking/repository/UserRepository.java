package com.bookmyshow.moviebooking.repository;

import com.bookmyshow.moviebooking.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository
        extends JpaRepository<User, Long> {

    User findByEmail(String email);
}