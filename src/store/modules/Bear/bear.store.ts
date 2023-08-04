import { StateCreator } from 'zustand'
import { FishSlice } from '../Fish/fish.interface'
import { BearSlice } from './bear.interface'

export const createBearSlice: StateCreator<BearSlice & FishSlice, [], [], BearSlice> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () =>
    set((state) => {
      if (state.bears > 0) {
        if (state.fishes > 0) {
          return { fishes: state.fishes - 1 }
        } else {
          return { fishes: 0 }
        }
      } else {
        return { fishes: state.fishes }
      }
    }),
})
