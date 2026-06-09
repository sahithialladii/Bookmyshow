package com.bookmyshow.moviebooking.service;

import com.bookmyshow.moviebooking.entity.User;
import com.bookmyshow.moviebooking.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {

    @Autowired
    UserRepository userRepository;



    public List<User> getAllUsers() {

        return userRepository.findAll();
    }



    public User register(User user){

        return userRepository.save(user);
    }

    public User login(
            String email,
            String password){

        User user =
                userRepository.findByEmail(email);

        if(user != null &&
                user.getPassword()
                        .equals(password)){

            return user;
        }

        return null;
    }
}