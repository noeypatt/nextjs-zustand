import React, { useEffect } from 'react'
import { usePhotoStore } from '@/store'
import {
  Avatar,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'

const Photo = () => {
  const { photos, total, getAllPhoto, loading } = usePhotoStore((state) => state)

  useEffect(() => {
    getAllPhoto()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container flexDirection="column" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" component="div">
          Photos {total}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {loading ? (
          <CircularProgress />
        ) : (
          <List>
            {photos?.map((item, index) => (
              <ListItem key={`photo-${index}`}>
                <ListItemAvatar>
                  <Avatar alt={`Avatar n°${index + 1}`} src={item.thumbnailUrl} />
                </ListItemAvatar>
                <ListItemText id={`${index + 1}`} primary={item.title} />
              </ListItem>
            ))}
          </List>
        )}
      </Grid>
    </Grid>
  )
}

export default Photo
