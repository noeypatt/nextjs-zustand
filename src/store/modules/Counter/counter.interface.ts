export interface CounterState {
  count: number
  deep: {
    nested: {
      obj: { count: number }
    }
  }
}

interface CounterActions {
  increment: () => void
  decrement: () => void
  normalInc: () => void
  normalDec: () => void
}

export type CounterStore = CounterState & CounterActions
