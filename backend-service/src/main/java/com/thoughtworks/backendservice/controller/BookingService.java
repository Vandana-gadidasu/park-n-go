package com.thoughtworks.backendservice.controller;

import java.io.FileWriter;
import java.io.IOException;

public class BookingService {
    private static final String CSV_FILE_PATH = "src/main/resources/static/booking.csv";
    public void saveBookingToCSV(String bookingId, String parkingName, String userId) {
        try (FileWriter writer = new FileWriter(CSV_FILE_PATH, true)) {
            // Append the booking information to the CSV file
            writer.append(bookingId)
                    .append(",")
                    .append(parkingName)
                    .append(",")
                    .append(userId)
                    .append("\n");
            writer.flush();
        } catch (IOException e) {
            // Handle the exception accordingly
            e.printStackTrace();
        }
    }
    public String generateBookingId() {
        // Implement your logic to generate a unique booking ID
        // You can use UUID.randomUUID().toString() for simplicity

        // Dummy implementation (returns a random string)
        return "BOOKING_" + Math.random();
    }
}
