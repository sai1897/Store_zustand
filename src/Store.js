import React from 'react'

import { create } from 'zustand'

    const useBearStore = create((set) => ({
        bears: 100,
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),
      }))
 

export default useBearStore