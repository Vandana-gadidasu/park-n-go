package com.thoughtworks.backendservice.model;

public class Booking {
    private String bookingId;
    private String parkingName;
    private String userId;

    public Booking(String bookingId, String parkingName, String userId) {
        this.bookingId = bookingId;
        this.parkingName = parkingName;
        this.userId = userId;
    }

    // Getters and setters

    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public String getParkingName() {
        return parkingName;
    }

    public void setParkingName(String parkingName) {
        this.parkingName = parkingName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
