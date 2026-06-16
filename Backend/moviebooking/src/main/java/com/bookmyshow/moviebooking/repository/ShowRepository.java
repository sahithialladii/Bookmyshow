//package com.bookmyshow.moviebooking.repository;
//
//import com.bookmyshow.moviebooking.entity.Show;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//
//
//public interface ShowRepository
//        extends JpaRepository<Show, Long> {
//}


//package com.bookmyshow.moviebooking.repository;
//
//import com.bookmyshow.moviebooking.entity.Show;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//public interface ShowRepository extends JpaRepository<Show, Long> {
//
//    void deleteByMovieId(Long movieId);
//
//    void deleteByTheatreId(Long theatreId);
//}



//package com.bookmyshow.moviebooking.repository;
//
//import com.bookmyshow.moviebooking.entity.Show;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.transaction.annotation.Transactional;
//
//public interface ShowRepository extends JpaRepository<Show, Long> {
//
//    @Modifying
//    @Transactional
//    @Query("DELETE FROM Show s WHERE s.movie.id = :movieId")
//    void deleteShowsByMovieId(Long movieId);
//
//    @Modifying
//    @Transactional
//    @Query("DELETE FROM Show s WHERE s.theatre.id = :theatreId")
//    void deleteShowsByTheatreId(Long theatreId);
//}




package com.bookmyshow.moviebooking.repository;

import com.bookmyshow.moviebooking.entity.Show;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface ShowRepository
        extends JpaRepository<Show, Long> {

    @Transactional
    void deleteByMovieId(Long movieId);

    @Transactional
    void deleteByTheatreId(Long theatreId);
}