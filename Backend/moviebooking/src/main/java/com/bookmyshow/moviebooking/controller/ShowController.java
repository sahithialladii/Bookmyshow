package com.bookmyshow.moviebooking.controller;

import com.bookmyshow.moviebooking.entity.Show;
import com.bookmyshow.moviebooking.service.ShowService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/shows")

@CrossOrigin("*")
public class ShowController {

    @Autowired
    ShowService showService;

    @PostMapping
    public Show addShow(
            @RequestBody Show show){

        return showService.addShow(show);
    }

    @GetMapping
    public List<Show> getAllShows(){

        return showService.getAllShows();
    }

    @GetMapping("/{id}")
    public Show getShowById(
            @PathVariable Long id){

        return showService.getShowById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteShow(
            @PathVariable Long id){

        showService.deleteShow(id);
    }
}