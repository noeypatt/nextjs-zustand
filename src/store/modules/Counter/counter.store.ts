import { create } from 'zustand'
import { produce } from 'immer'
import { CounterState, CounterStore } from './counter.interface'

export const useCounterStore = create<CounterStore>()((set) => ({
  count: 0,
  deep: {
    nested: {
      obj: { count: 0 },
    },
  },
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state) => {
      if (state.count > 0) {
        return { count: state.count - 1 }
      } else {
        return { count: 0 }
      }
    }),
  normalInc: () =>
    set(
      produce((state: CounterState) => {
        ++state.deep.nested.obj.count
      })
    ),
  normalDec: () =>
    set(
      produce((state: CounterState) => {
        if (state.deep.nested.obj.count > 0) {
          --state.deep.nested.obj.count
        }
      })
    ),
}))
