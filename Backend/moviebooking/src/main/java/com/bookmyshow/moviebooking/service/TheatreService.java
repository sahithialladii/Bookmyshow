//package com.bookmyshow.moviebooking.service;
//
//import com.bookmyshow.moviebooking.entity.Theatre;
//import com.bookmyshow.moviebooking.repository.TheatreRepository;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class TheatreService {
//
//    @Autowired
//    TheatreRepository theatreRepository;
//
//    public Theatre addTheatre(Theatre theatre) {
//        return theatreRepository.save(theatre);
//    }
//
//    public List<Theatre> getAllTheatres() {
//        return theatreRepository.findAll();
//    }
//
//    public void deleteTheatre(Long id){
//
//        showRepository.deleteByTheatreId(id);
//
//        theatreRepository.deleteById(id);
//    }
//}


package com.bookmyshow.moviebooking.service;

import com.bookmyshow.moviebooking.entity.Theatre;
import com.bookmyshow.moviebooking.repository.TheatreRepository;
import com.bookmyshow.moviebooking.repository.ShowRepository;

import com.bookmyshow.moviebooking.repository.BookingRepository;


import org.springframework.transaction.annotation.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheatreService {

    @Autowired
    private TheatreRepository theatreRepository;

    @Autowired
    private ShowRepository showRepository;

    @Autowired
    private BookingRepository bookingRepository;

    public Theatre addTheatre(Theatre theatre) {
        return theatreRepository.save(theatre);
    }

    public List<Theatre> getAllTheatres() {
        return theatreRepository.findAll();
    }

    public Theatre getTheatreById(Long id) {
        return theatreRepository.findById(id).orElse(null);
    }

    public Theatre updateTheatre(Long id, Theatre theatre) {

        Theatre existing =
                theatreRepository.findById(id)
                        .orElse(null);

        if (existing == null) {
            return null;
        }

        existing.setName(theatre.getName());
        existing.setLocation(theatre.getLocation());
        existing.setCity(theatre.getCity());
        existing.setTotalSeats(theatre.getTotalSeats());

        return theatreRepository.save(existing);
    }

    @Transactional
    public void deleteTheatre(Long id){

        bookingRepository.deleteByShowTheatreId(id);

        showRepository.deleteByTheatreId(id);

        theatreRepository.deleteById(id);
    }
}