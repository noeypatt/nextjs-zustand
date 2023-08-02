import React, { useEffect } from 'react'
import { usePostsStore } from '@/store'
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material'

const Post = () => {
  const { posts, getAllPost } = usePostsStore((state) => state)

  useEffect(() => {
    getAllPost()
  }, [getAllPost])

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" component="div">
          Posts
        </Typography>
        <List>
          {posts?.slice(0, 10).map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.title} secondary={item.body} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  )
}

export default Post
