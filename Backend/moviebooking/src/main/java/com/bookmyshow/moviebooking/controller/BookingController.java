package com.bookmyshow.moviebooking.controller;

import com.bookmyshow.moviebooking.entity.Booking;
import com.bookmyshow.moviebooking.repository.BookingRepository;
import com.bookmyshow.moviebooking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin("*")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping
    public Booking createBooking(
            @RequestBody Booking booking) {

        return bookingService.saveBooking(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {

        return bookingRepository.findAll();
    }
}