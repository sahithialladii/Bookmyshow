package com.bookmyshow.moviebooking.controller;

import com.bookmyshow.moviebooking.dto.LoginRequest;
import com.bookmyshow.moviebooking.entity.User;
import com.bookmyshow.moviebooking.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/api/users")

@CrossOrigin("*")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    public List<User> getAllUsers() {

        return userService.getAllUsers();
    }

    @PostMapping("/register")
    public User register(
            @RequestBody User user){

        return userService.register(user);
    }

    @PostMapping("/login")
    public User login(
            @RequestBody LoginRequest request){

        return userService.login(
                request.getEmail(),
                request.getPassword()
        );
    }
}