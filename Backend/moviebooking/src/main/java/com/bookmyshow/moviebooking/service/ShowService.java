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

    public Show updateShow(Long id, Show show){

        Show existing =
                showRepository.findById(id)
                        .orElse(null);

        if(existing == null){
            return null;
        }

        existing.setMovie(show.getMovie());
        existing.setTheatre(show.getTheatre());
        existing.setShowDate(show.getShowDate());
        existing.setShowTime(show.getShowTime());
        existing.setTicketPrice(show.getTicketPrice());

        return showRepository.save(existing);
    }

    public void deleteShow(
            Long id){

        showRepository.deleteById(id);
    }
}