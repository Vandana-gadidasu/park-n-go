import axios from "axios";


export type ParkingData = {
    "city": string,
    "area": string,
    "timeAvailable": string,
    "parkingLotName": string,
    "availability": number
}

export const getParkingLotData = (city: string, area: string, time: string) => {
    const response: Promise<ParkingData[]> = axios.get(`/parking-lots/${city}/${area}`, {
        params: {
            time: time,
        }
    }).then(({data}) => data as ParkingData[]);
    return response;
}