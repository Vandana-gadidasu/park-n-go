package com.thoughtworks.backendservice.model;

import lombok.Data;


@Data
public class ParkingLot {
    private String city;
    private String area;
    private String timeAvailable;
    private String parkingLotName;
    private int availability;


    public ParkingLot() {
    }

    public ParkingLot(String city, String area, String timeAvailable, String parkingLotName, int availability) {
        this.city = city;
        this.area = area;
        this.timeAvailable = timeAvailable;
        this.parkingLotName = parkingLotName;
        this.availability = availability;
    }
}
