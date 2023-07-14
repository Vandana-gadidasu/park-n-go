package com.thoughtworks.backendservice.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ParkingLot {
    private String city;
    private String area;
    private LocalDateTime timeAvailable;
    private String parkingLotName;
    private int availability;


    public ParkingLot(String city, String area, LocalDateTime timeAvailable, String parkingLotName, int availability) {
        this.city = city;
        this.area = area;
        this.timeAvailable = timeAvailable;
        this.parkingLotName = parkingLotName;
        this.availability = availability;
    }
}
