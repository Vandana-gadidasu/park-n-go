package com.thoughtworks.backendservice.controller;

import com.opencsv.exceptions.CsvException;
import com.thoughtworks.backendservice.model.ParkingLot;
import com.thoughtworks.backendservice.service.ParkingLotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/parking-lots")
public class ParkingLotController {

    @Autowired
    private ParkingLotService parkingLotService;

    @GetMapping("/{city}/{area}/{time}")
    public ResponseEntity<List<ParkingLot>> getParkingLotDetails(@PathVariable(value = "city") String city, @PathVariable(value = "area") String area, @PathVariable(value = "time") String time) throws IOException, CsvException {

        return new ResponseEntity<>(parkingLotService.getListOfParkingLotWithAreaAndName(city,area), HttpStatus.OK);
    }
}
