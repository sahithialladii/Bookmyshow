//package com.bookmyshow.moviebooking.repository;
//
//import com.bookmyshow.moviebooking.entity.Booking;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.transaction.annotation.Transactional;
//
//public interface BookingRepository
//        extends JpaRepository<Booking, Long> {
//
//    @Modifying
//    @Transactional
//    @Query("""
//           DELETE FROM Booking b
//           WHERE b.show.movie.id = :movieId
//           """)
//    void deleteByMovieId(Long movieId);
//
//    @Modifying
//    @Transactional
//    @Query("""
//           DELETE FROM Booking b
//           WHERE b.show.theatre.id = :theatreId
//           """)
//    void deleteByTheatreId(Long theatreId);
//}



package com.bookmyshow.moviebooking.repository;

import com.bookmyshow.moviebooking.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface BookingRepository
        extends JpaRepository<Booking, Long> {

    @Transactional
    void deleteByShowMovieId(Long movieId);

    @Transactional
    void deleteByShowTheatreId(Long theatreId);

    List<Booking> findByUserId(Long userId);
}