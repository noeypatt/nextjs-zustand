import { StateCreator } from 'zustand'
import { BearSlice } from '../Bear/bear.interface'
import { FishSlice } from './fish.interface'

export const createFishSlice: StateCreator<BearSlice & FishSlice, [], [], FishSlice> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})
