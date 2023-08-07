import { PhotoService } from '@/services/photos'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { PhotoStore } from './photo.interface'

export const usePhotoStore = create<PhotoStore>()(
  devtools(
    (set) => ({
      photos: [],
      total: 0,
      loading: false,
      getAllPhoto: async () => {
        set({ loading: true })
        try {
          let res = await PhotoService.getAll()
          if (res.status === 200) {
            const photos = await res.json()
            set({
              photos: photos,
              total: photos.length,
            })
          }
          set({ loading: false })
        } catch (err) {
          set({ loading: false })
        }
      },
    }),
    {
      anonymousActionType: 'photos',
    }
  )
)
