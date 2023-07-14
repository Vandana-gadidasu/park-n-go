package com.thoughtworks.backendservice.service;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import com.thoughtworks.backendservice.model.ParkingLot;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ParkingLotService {

    public List<ParkingLot> getListOfParkingLotWithAreaAndName(String city, String area) throws IOException, CsvException {
        List<ParkingLot> listOfParkingLot = readCsv();

        return listOfParkingLot.stream().filter(parkingLot -> parkingLot.getCity().equalsIgnoreCase(city) && parkingLot.getParkingLotName().equalsIgnoreCase(area)).toList();
    }

    public List<ParkingLot> readCsv() throws IOException, CsvException {
        try (CSVReader reader = new CSVReader(new FileReader("src/main/resources/static/MOCK_DATA.csv"))) {
            List<String[]> rows = reader.readAll();
            // Skip the header row if it exists
            if (!rows.isEmpty()) {
                rows.remove(0);
            }

            return convertToParkingLot(rows);
        }
    }

    private List<ParkingLot> convertToParkingLot(List<String[]> rows) {
        return rows.stream()
                .map(row -> {
                    ParkingLot parkingLot = new ParkingLot();
                    parkingLot.setCity(row[0]);
                    parkingLot.setArea(row[1]);
                    parkingLot.setParkingLotName(row[2]);
                    parkingLot.setTimeAvailable(row[3]);
                    parkingLot.setAvailability(Integer.parseInt(row[4]));
                    return parkingLot;
                })
                .collect(Collectors.toList());
    }

}
