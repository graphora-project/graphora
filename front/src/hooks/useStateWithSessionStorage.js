import { useState } from 'react'
import { SessionStorage } from '../services'

const storageService = SessionStorage()

export const useStateWithSessionStorage = (initialStateValue) => {
  const [value, setValue] = useState(initialStateValue)

  const setValueWithSesionStorage = (key, data) => {
    const dataFromStorage = storageService.getItem(key)

    if (dataFromStorage) {
      setValue(dataFromStorage)
    } else {
      storageService.setItem(key, data)
      setValue(data)
    }
  }

  return [value, setValueWithSesionStorage]
}
