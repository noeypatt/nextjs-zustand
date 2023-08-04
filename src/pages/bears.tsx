import MainLayout from '@/layout'
import { useBoundStore } from '@/store/modules/useBoundStore'
import { Button, Grid, Typography } from '@mui/material'

export default function PhotoPage() {
  const { bears, fishes, addBear, addFish, eatFish } = useBoundStore((state) => state)
  return (
    <MainLayout>
      <div className="p-2">
        <Grid container flexDirection="column" spacing={4}>
          <Grid item>
            <Typography>Bears: {bears}</Typography>
          </Grid>
          <Grid item>
            <Typography>Fishes: {fishes}</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={addBear}>
                  Add Bear
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" onClick={addFish}>
                  Add Fish
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="error" onClick={eatFish}>
                  Eat Fish
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  )
}
