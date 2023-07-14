import axios from "axios";

export type BookingDataType = {
    bookingId: string;
}

export const getParkingLotData = (parkingLotName: string, userId: string): Promise<BookingDataType> => {
    return axios.post(`/parking-lots/${parkingLotName}/${userId}`)

}