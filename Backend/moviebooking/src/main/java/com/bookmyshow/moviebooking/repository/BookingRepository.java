package com.bookmyshow.moviebooking.repository;

import com.bookmyshow.moviebooking.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository
        extends JpaRepository<Booking, Long> {
}