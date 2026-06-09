package com.bookmyshow.moviebooking.service;

import com.bookmyshow.moviebooking.entity.Booking;
import com.bookmyshow.moviebooking.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public Booking saveBooking(Booking booking) {

        booking.setBookingDate(LocalDateTime.now());

        booking.setStatus("CONFIRMED");

        return bookingRepository.save(booking);
    }
}