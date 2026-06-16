package com.bookmyshow.moviebooking.controller;

import com.bookmyshow.moviebooking.repository.MovieRepository;
import com.bookmyshow.moviebooking.repository.TheatreRepository;
import com.bookmyshow.moviebooking.repository.BookingRepository;
import com.bookmyshow.moviebooking.repository.UserRepository;
import com.bookmyshow.moviebooking.repository.ShowRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminStatsController {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private TheatreRepository theatreRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ShowRepository showRepository;

    @GetMapping("/stats")
    public Map<String, Long> getStats() {

        Map<String, Long> stats =
                new HashMap<>();

        stats.put(
                "movies",
                movieRepository.count()
        );

        stats.put(
                "theatres",
                theatreRepository.count()
        );

        stats.put(
                "shows",
                showRepository.count()
        );

        stats.put(
                "bookings",
                bookingRepository.count()
        );

        stats.put(
                "users",
                userRepository.count()
        );

        return stats;
    }
}