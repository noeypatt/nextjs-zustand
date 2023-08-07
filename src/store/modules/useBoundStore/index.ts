import { create } from 'zustand'
import { createBearSlice } from '../Bear'
import { BearSlice } from '../Bear/bear.interface'
import { createFishSlice } from '../Fish'
import { FishSlice } from '../Fish/fish.interface'

export const useBoundStore = create<BearSlice & FishSlice>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}))
