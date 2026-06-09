package com.bookmyshow.moviebooking.service;

import com.bookmyshow.moviebooking.entity.Show;
import com.bookmyshow.moviebooking.repository.ShowRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowService {

    @Autowired
    ShowRepository showRepository;

    public Show addShow(
            Show show){

        return showRepository.save(show);
    }

    public List<Show> getAllShows(){

        return showRepository.findAll();
    }


    public Show getShowById(Long id){

        return showRepository
                .findById(id)
                .orElse(null);
    }


    public void deleteShow(
            Long id){

        showRepository.deleteById(id);
    }
}