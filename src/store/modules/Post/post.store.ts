import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { PostService } from '@/services'
import { PostsStore } from './post.interface'

export const usePostStore = create<PostsStore>()(
  // devtools: middleware for check state at devtools extension
  // (ex. Redux Devtools Extension) on browser
  devtools(
    (set) => ({
      post: null,
      posts: null,
      loading: false,
      getPost: async (id: number) => {
        set({ loading: true })
        try {
          let res = await PostService.get(id)
          if (res.status === 200) {
            const posts = await res.json()
            set({ posts })
          }
          set({ loading: false })
        } catch (err) {
          set({ loading: false })
        }
      },
      getAllPost: async () => {
        set({ loading: true })
        try {
          let res = await PostService.getAll()
          if (res.status === 200) {
            const posts = await res.json()
            set({ posts })
          }
          set({ loading: false })
        } catch (err) {
          set({ loading: false })
        }
      },
    }),
    {
      anonymousActionType: 'posts',
      store: 'post',
    }
  )
)
