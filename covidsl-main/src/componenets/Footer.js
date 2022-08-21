import React from 'react'
import Grid from '@mui/material/Grid'
function Footer(props) {
  return (
    <div>
      <Grid container direction="row" justifyContent="flex-start">
        <h4>Developed By: Buddhika D Ranaweera</h4>
      </Grid>
      <Grid container direction="row" justifyContent="flex-start">
        <h4>Updated Time: {props.time}</h4>
      </Grid>
    </div>
  )
}

export default Footer
