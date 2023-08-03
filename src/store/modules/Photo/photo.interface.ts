interface Photo {
  id: number
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}

interface PhotoState {
  photos: Photo[]
  total: number
  loading: boolean
}

interface PhotoActions {
  getAllPhoto: () => void
}

export type PhotoStore = PhotoState & PhotoActions
