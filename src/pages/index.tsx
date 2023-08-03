import { Grid } from '@mui/material'
import MainLayout from '@/layout'
import Counter from '@/components/Counter/Counter'
import Post from '@/components/Post'

export default function Home() {
  return (
    <MainLayout>
      <div className="p-2">
        <Grid container flexDirection="column" spacing={4}>
          <Grid item>
            <Counter />
          </Grid>
          <Grid item>
            <Post />
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  )
}
