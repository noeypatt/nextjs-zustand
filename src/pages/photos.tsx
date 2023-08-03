import Photo from '@/components/Photo'
import MainLayout from '@/layout'
import { Grid } from '@mui/material'

export default function PhotoPage() {
  return (
    <MainLayout>
      <div className="p-2">
        <Grid container flexDirection="column" spacing={4}>
          <Grid item>
            <Photo />
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  )
}
