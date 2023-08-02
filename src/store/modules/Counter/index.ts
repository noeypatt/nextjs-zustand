import { create } from 'zustand'
import { produce } from 'immer'

type State = {
  count: number
  deep: {
    nested: {
      obj: { count: number }
    }
  }
}

type Actions = {
  increment: () => void
  decrement: () => void
  normalInc: () => void
  normalDec: () => void
}

export const useCounterStore = create<State & Actions>()((set) => ({
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
      produce((state: State) => {
        ++state.deep.nested.obj.count
      })
    ),
  normalDec: () =>
    set(
      produce((state: State) => {
        if (state.deep.nested.obj.count > 0) {
          --state.deep.nested.obj.count
        }
      })
    ),
}))
