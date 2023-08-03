import React, { useEffect } from 'react'
import { usePostStore } from '@/store'
import { CircularProgress, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'

const Post = () => {
  const { posts, loading, getAllPost } = usePostStore((state) => state)

  useEffect(() => {
    getAllPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" component="div">
          Posts
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {loading ? (
          <CircularProgress />
        ) : (
          <List>
            {posts?.slice(0, 10).map((item) => (
              <ListItem key={item.id}>
                <ListItemText primary={item.title} secondary={item.body} />
              </ListItem>
            ))}
          </List>
        )}
      </Grid>
    </Grid>
  )
}

export default Post
