import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const LocationCard = (location) => {

  return (
    <div style={{marginRight: '15px'}}>
      <Card sx={{ width: 275, height: 300}}>
        <CardContent>
          <Typography variant='h5'>
           {location.location.name}
          </Typography>
          <Typography>
            Country: {location.location.address.country}
          </Typography>
          <Typography>
            City: {location.location.address.city}
          </Typography>
          <Typography>
            Neighborhood: {location.location.address.neighborhood}
          </Typography>
          <Typography>
            Address: {location.location.address.streetAddress}
          </Typography>
          <Typography>
            Overall Rating: {location.location.rating}
          </Typography>
        </CardContent>
        <button style={{marginBottom: '15px'}}>More Details</button>
      </Card>
    </div>
  )
}

export default LocationCard
