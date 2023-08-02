import { useCounterStore, usePostsStore } from '@/store'
import { Button, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'

export default function Home() {
  const { count, increment, decrement } = useCounterStore((state) => state)

  return (
    <main>
      <div className="p-2">
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
      </div>
    </main>
  )
}
