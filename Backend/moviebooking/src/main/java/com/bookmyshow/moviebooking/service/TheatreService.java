package com.bookmyshow.moviebooking.service;

import com.bookmyshow.moviebooking.entity.Theatre;
import com.bookmyshow.moviebooking.repository.TheatreRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheatreService {

    @Autowired
    TheatreRepository theatreRepository;

    public Theatre addTheatre(Theatre theatre) {
        return theatreRepository.save(theatre);
    }

    public List<Theatre> getAllTheatres() {
        return theatreRepository.findAll();
    }

    public void deleteTheatre(Long id) {
        theatreRepository.deleteById(id);
    }
}