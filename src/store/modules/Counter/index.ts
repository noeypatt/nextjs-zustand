import { create } from 'zustand'

type State = {
  count: number
}

type Actions = {
  increment: () => void
  decrement: () => void
}

export const useCounterStore = create<State & Actions>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state) => {
      if (state.count > 0) {
        return { count: state.count - 1 }
      } else {
        return { count: 0 }
      }
    }),
}))
