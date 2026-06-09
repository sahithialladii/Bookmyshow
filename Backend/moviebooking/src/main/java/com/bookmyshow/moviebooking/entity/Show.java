package com.bookmyshow.moviebooking.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "shows")
public class Show {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="movie_id")
    private Movie movie;

    @ManyToOne
    @JoinColumn(name="theatre_id")
    private Theatre theatre;

    private String showDate;

    private String showTime;

    private Double ticketPrice;

    public Show() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public Theatre getTheatre() {
        return theatre;
    }

    public void setTheatre(Theatre theatre) {
        this.theatre = theatre;
    }

    public String getShowDate() {
        return showDate;
    }

    public void setShowDate(
            String showDate) {
        this.showDate = showDate;
    }

    public String getShowTime() {
        return showTime;
    }

    public void setShowTime(
            String showTime) {
        this.showTime = showTime;
    }

    public Double getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(
            Double ticketPrice) {
        this.ticketPrice = ticketPrice;
    }
}