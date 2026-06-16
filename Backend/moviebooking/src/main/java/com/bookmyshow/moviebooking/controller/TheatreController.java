//package com.bookmyshow.moviebooking.controller;
//
//import com.bookmyshow.moviebooking.entity.Theatre;
//import com.bookmyshow.moviebooking.service.TheatreService;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/theatres")
//@CrossOrigin("*")
//public class TheatreController {
//
//    @Autowired
//    TheatreService theatreService;
//
//    @PostMapping
//    public Theatre addTheatre(
//            @RequestBody Theatre theatre) {
//
//        return theatreService.addTheatre(theatre);
//    }
//
//    @GetMapping
//    public List<Theatre> getAllTheatres() {
//
//        return theatreService.getAllTheatres();
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteTheatre(
//            @PathVariable Long id) {
//
//        theatreService.deleteTheatre(id);
//    }
//}
package com.bookmyshow.moviebooking.controller;

import com.bookmyshow.moviebooking.entity.Theatre;
import com.bookmyshow.moviebooking.service.TheatreService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/theatres")
@CrossOrigin("*")
public class TheatreController {

    @Autowired
    private TheatreService theatreService;

    @PostMapping
    public Theatre addTheatre(
            @RequestBody Theatre theatre) {

        return theatreService.addTheatre(theatre);
    }

    @GetMapping
    public List<Theatre> getAllTheatres() {

        return theatreService.getAllTheatres();
    }

    @GetMapping("/{id}")
    public Theatre getTheatreById(
            @PathVariable Long id) {

        return theatreService.getTheatreById(id);
    }

    @PutMapping("/{id}")
    public Theatre updateTheatre(
            @PathVariable Long id,
            @RequestBody Theatre theatre) {

        return theatreService.updateTheatre(id, theatre);
    }

    @DeleteMapping("/{id}")
    public void deleteTheatre(
            @PathVariable Long id) {

        theatreService.deleteTheatre(id);
    }
}