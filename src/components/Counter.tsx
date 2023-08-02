import { useCounterStore } from '@/store'
import { Button, Grid, Typography } from '@mui/material'

const Counter = () => {
  const { count, increment, decrement } = useCounterStore((state) => state)

  return (
    <Grid container flexDirection="column" spacing={2}>
      <Grid item>
        <Typography variant="h5">Count : {count}</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={increment}>
              Increment
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={decrement}>
              Decrement
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Counter
