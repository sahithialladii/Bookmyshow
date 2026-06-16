//package com.bookmyshow.moviebooking.service;
//
//import com.bookmyshow.moviebooking.entity.Movie;
//import com.bookmyshow.moviebooking.repository.MovieRepository;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class MovieService {
//
//    @Autowired
//    MovieRepository movieRepository;
//
//    public Movie addMovie(
//            Movie movie){
//
//        return movieRepository.save(movie);
//    }
//
//    public List<Movie> getAllMovies(){
//
//        return movieRepository.findAll();
//    }
//
//    public Movie getMovieById(Long id) {
//
//        return movieRepository.findById(id)
//                .orElse(null);
//    }
//
//
//
//    public Movie updateMovie(Long id, Movie movie) {
//
//        Movie existingMovie =
//                movieRepository.findById(id)
//                        .orElse(null);
//
//        if(existingMovie == null){
//            return null;
//        }
//
//        existingMovie.setTitle(movie.getTitle());
//        existingMovie.setGenre(movie.getGenre());
//        existingMovie.setLanguage(movie.getLanguage());
//        existingMovie.setRating(movie.getRating());
//        existingMovie.setDuration(movie.getDuration());
//        existingMovie.setReleaseDate(movie.getReleaseDate());
//        existingMovie.setStatus(movie.getStatus());
//        existingMovie.setPosterUrl(movie.getPosterUrl());
//
//        existingMovie.setTrailerUrl(movie.getTrailerUrl());
//        existingMovie.setDirector(movie.getDirector());
//        existingMovie.setCast(movie.getCast());
//        existingMovie.setCertificate(movie.getCertificate());
//
//        existingMovie.setDescription(movie.getDescription());
//
//        return movieRepository.save(existingMovie);
//    }
//
//    public void deleteMovie(Long id){
//
//        showRepository.deleteByMovieId(id);
//
//        movieRepository.deleteById(id);
//    }
//}


package com.bookmyshow.moviebooking.service;

import com.bookmyshow.moviebooking.entity.Movie;
import com.bookmyshow.moviebooking.repository.MovieRepository;
import com.bookmyshow.moviebooking.repository.ShowRepository;
import com.bookmyshow.moviebooking.repository.BookingRepository;


import org.springframework.transaction.annotation.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private ShowRepository showRepository;

    @Autowired
    private BookingRepository bookingRepository;


    public Movie addMovie(Movie movie){
        return movieRepository.save(movie);
    }

    public List<Movie> getAllMovies(){
        return movieRepository.findAll();
    }

    public Movie getMovieById(Long id){
        return movieRepository.findById(id).orElse(null);
    }

    public Movie updateMovie(Long id, Movie movie){

        Movie existingMovie =
                movieRepository.findById(id)
                        .orElse(null);

        if(existingMovie == null){
            return null;
        }

        existingMovie.setTitle(movie.getTitle());
        existingMovie.setGenre(movie.getGenre());
        existingMovie.setLanguage(movie.getLanguage());
        existingMovie.setRating(movie.getRating());
        existingMovie.setDuration(movie.getDuration());
        existingMovie.setReleaseDate(movie.getReleaseDate());
        existingMovie.setStatus(movie.getStatus());
        existingMovie.setPosterUrl(movie.getPosterUrl());

        existingMovie.setTrailerUrl(movie.getTrailerUrl());
        existingMovie.setDirector(movie.getDirector());
        existingMovie.setCast(movie.getCast());
        existingMovie.setCertificate(movie.getCertificate());

        existingMovie.setDescription(movie.getDescription());

        return movieRepository.save(existingMovie);
    }

    @Transactional
    public void deleteMovie(Long id){

        bookingRepository.deleteByShowMovieId(id);

        showRepository.deleteByMovieId(id);

        movieRepository.deleteById(id);
    }
}