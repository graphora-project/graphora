import { useState } from 'react'

export const useModal = (initialOpenState) => {
  const [isOpen, setIsOpen] = useState(initialOpenState)

  const handleCloseRequest = () => {
    setIsOpen(false)
  }

  return [isOpen, handleCloseRequest]
}
