import axios from "axios";

export type BookingDataType = {
    bookingId: string;
}

export const getParkingLotData = (parkingLotName: string, userId: string): Promise<BookingDataType> => {
    return axios.get(`/parking-lots/${parkingLotName}/${userId}`)

}