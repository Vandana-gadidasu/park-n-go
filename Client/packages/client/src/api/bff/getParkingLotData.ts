import axios from "axios";

export type ParkingResponseDataType = {
    parkingLotList: ParkingData[]
}

export type ParkingData = {
    parkingLotName: string,
    availability: number
}

export const getParkingLotData = (city: string, area: string, time: string) => {
    const response: Promise<ParkingResponseDataType> = axios.get(`/parking-lots/${city}/${area}`, {
        params: {
            time: time,
        }
    })
    return response;
}