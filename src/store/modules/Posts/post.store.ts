import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { PostService } from '@/services'
import { PostActions, PostState } from './post.interface'

type PostsStore = PostState & PostActions

export const usePostsStore = create<PostsStore, [['zustand/devtools', PostsStore]]>(
  // devtools: middleware for check state at devtools extension
  // (ex. Redux Devtools Extension) on browser
  devtools(
    (set) => ({
      post: null,
      posts: [],
      loading: false,
      getPost: async (id) => {
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
    }
  )
)
