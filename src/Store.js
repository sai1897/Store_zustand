import React from 'react'

import { create } from 'zustand'

    const useBearStore = create((set) => ({
        bears: 'vvvvvvv',
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),
        setVal:(vl)=>set({bears:vl})
      }))
 

export default useBearStore