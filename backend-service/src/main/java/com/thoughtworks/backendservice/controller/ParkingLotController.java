package com.thoughtworks.backendservice.controller;

import com.thoughtworks.backendservice.model.ParkingLot;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDateTime;
import java.util.List;

@Controller
@RequestMapping("/parking-lots")
public class ParkingLotController {

    @GetMapping("/{city}/{area}/{time}")
    public ResponseEntity<List<ParkingLot>> getParkingLotDetails(@PathVariable(value = "city") String city, @PathVariable(value = "area") String area, @PathVariable(value = "time") LocalDateTime time) {

        return new ResponseEntity<>(List.of(new ParkingLot("Mumbai", "South Mumbai", time, "Caroline's Spot", 26)), HttpStatus.OK);
    }
}
