import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { ParkingData } from '../../api/bff/getParkingLotData'

const SearchResults = ({
    results
}: {results: ParkingData[]}) => {
  return (
    <>
    {results.map((data) => (
        <Card sx={{ minWidth: "45rem", marginTop: "1rem" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.availability} slots available
          </Typography>
          <Typography variant="h5" component="div">
            {data.parkingLotName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {`${data.area}, ${data.city}`}
            </Typography>
            <Typography variant="body2">
            Available time: {data.timeAvailable}
        </Typography>
        </CardContent>
      </Card>
    ))}
    
    </>
  )
}

export default SearchResults