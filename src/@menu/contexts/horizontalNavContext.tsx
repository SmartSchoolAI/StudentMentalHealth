'use client'

// React Imports
import { createContext, useMemo, useState, useCallback } from 'react'

// Type Imports
import type { ChildrenType } from '../types'

export type HorizontalNavContextProps = {
  isBreakpointReached?: boolean
  updateIsBreakpointReached: (isBreakpointReached: boolean) => void
}

const HorizontalNavContext = createContext({} as HorizontalNavContextProps)

export const HorizontalNavProvider = ({ children }: ChildrenType) => {
  // States
  const [isBreakpointReached, setIsBreakpointReached] = useState(false)

  // Stable callback using useCallback
  const updateIsBreakpointReached = useCallback((value: boolean) => {
    setIsBreakpointReached(value)
  }, [])

  // Hooks
  const HorizontalNavProviderValue = useMemo(
    () => ({
      isBreakpointReached,
      updateIsBreakpointReached
    }),
    [isBreakpointReached, updateIsBreakpointReached]
  )

  return <HorizontalNavContext.Provider value={HorizontalNavProviderValue}>{children}</HorizontalNavContext.Provider>
}

export default HorizontalNavContext
