import { getPosts } from '@/services'
import { create } from 'zustand'

export const usePostsStore = create((set, get) => ({
  getPosts: async () => {
    set({ loading: true })
    try {
      let res = await getPosts()
      console.log('res:', res)
    } catch (err) {}
  },
}))
