import Counter from '@/components/Counter'
import Post from '@/components/Post'
import { Grid } from '@mui/material'

export default function Home() {
  return (
    <main>
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
    </main>
  )
}
