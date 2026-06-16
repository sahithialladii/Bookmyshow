//package com.bookmyshow.moviebooking.entity;
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "movies")
//public class Movie {
//
//    @Id
//    @GeneratedValue(strategy =
//            GenerationType.IDENTITY)
//    private Long id;
//
//    private String title;
//
//    private String genre;
//
//    private String language;
//
//    private Double rating;
//
//    private String duration;
//
//    private String releaseDate;
//
//    private String status;
//
//    private String posterUrl;
//
//    @Column(length = 2000)
//    private String description;
//
//    public Movie() {
//    }
//
//    public String getTitle() {
//        return title;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//







//    // Generate Getters and Setters
//}






















package com.bookmyshow.moviebooking.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "movies")
@Getter
@Setter
@NoArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String genre;

    private String language;

    private Double rating;

    private String duration;

    private String releaseDate;

    private String status;

    @Column(length = 2000)
    private String posterUrl;

    @Column(length = 2000)
    private String trailerUrl;
    private String director;
    private String cast;
    private String certificate;

    @Column(length = 2000)
    private String description;
}