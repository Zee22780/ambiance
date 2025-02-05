import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const LocationCard = (location) => {

  return (
    <div style={{marginRight: '15px'}}>
      <Card sx={{ width: 275, border: 'solid 1pt'}}>
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
            Address: {location.location.address.streetAddress}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default LocationCard
