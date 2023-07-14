package com.thoughtworks.backendservice.controller;

import com.opencsv.exceptions.CsvException;
import com.thoughtworks.backendservice.model.ParkingLot;
import com.thoughtworks.backendservice.service.ParkingLotService;
import jakarta.websocket.server.PathParam;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/parking-lots")
public class ParkingLotController {

    @Autowired
    private ParkingLotService parkingLotService;

    @GetMapping("/{city}/{area}")
    public ResponseEntity<List<ParkingLot>> getParkingLotDetails(@PathVariable(value = "city") String city, @PathVariable(value = "area") String area, @RequestParam(value = "time") String time) throws IOException, CsvException {

        return new ResponseEntity<>(parkingLotService.getListOfParkingLotWithAreaAndName(city,area), HttpStatus.OK);
    }
    @PostMapping("/booking/{parkingLotName}/{UserId}")
    public ResponseEntity<String> bookParking(@PathParam("parkingLotName") String parkingName, @PathParam("UserId") String userId) {
        // Perform booking logic here

        val bookingService= new BookingService();
        val bookingId= bookingService.generateBookingId();
        bookingService.saveBookingToCSV(bookingId,parkingName,userId);
        // Generate a booking ID (dummy implementation)
        return new ResponseEntity<>(bookingId,HttpStatus.OK);
    }

}
