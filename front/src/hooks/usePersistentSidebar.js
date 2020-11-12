import { useState } from 'react'

export const usePersistentSidebar = (initialIsOpen) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen)

  const toggleIsOpen = () => setIsOpen(!isOpen)

  return [isOpen, toggleIsOpen, setIsOpen]
}
