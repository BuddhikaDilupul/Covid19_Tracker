import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import ActionAreaCard from './Card'
import active from '../image/active.jpg'
import recoverd from '../image/recoverd.jpg'
import LinearIndeterminate from './Loader'
import Footer from './Footer'
function Body() {
  const [loader, setLoader] = useState(true)
  const [response, setResponseData] = useState({})
  const loadData = () => {
    fetch('https://www.hpb.health.gov.lk/api/get-current-statistical', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseData({ data })
        setLoader(false)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
  console.log(response)

  useEffect(() => {
    loadData()
  }, [])
  if (loader) {
    return <LinearIndeterminate />
  }
  return (
    <div>
      <h2>Daily Situation</h2>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <ActionAreaCard
          img={active}
          title={'New Cases'}
          count={response.data.data.local_new_cases}
        />{' '}
        <ActionAreaCard
          img={recoverd}
          title={'Recoverd '}
          count={response.data.data.local_recovered}
        />
        <ActionAreaCard
          img={active}
          title={'New Deaths'}
          count={response.data.data.local_new_deaths}
        />
      </Grid>
      <h2>Total Situation</h2>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <ActionAreaCard
          img={active}
          title={'Active Cases'}
          count={response.data.data.local_active_cases}
        />{' '}
        <ActionAreaCard
          img={recoverd}
          title={'Total Cases '}
          count={response.data.data.local_total_cases}
        />
        <ActionAreaCard
          img={recoverd}
          title={'In Hospitals'}
          count={
            response.data.data.local_total_number_of_individuals_in_hospitals
          }
        />
        <ActionAreaCard
          img={active}
          title={'Total Deaths'}
          count={response.data.data.local_deaths}
        />
      </Grid>
      <h2>Total Antigen & PCR Tests</h2>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <ActionAreaCard
          img={active}
          title={'Antigen Tests'}
          count={response.data.data.total_antigen_testing_count}
        />{' '}
        <ActionAreaCard
          img={recoverd}
          title={'PCR Tests'}
          count={response.data.data.total_pcr_testing_count}
        />
      </Grid>
      <Footer time={response.data.data.update_date_time} />
    </div>
  )
}

export default Body
