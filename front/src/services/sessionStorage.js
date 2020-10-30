export const SessionStorage = () => {
  const setItem = (storageKey, dataToStore) => {
    sessionStorage.setItem(storageKey, JSON.stringify(dataToStore))
  }

  const getItem = (storageKey) => {
    const dataFromStorage = sessionStorage.getItem(storageKey)

    if (!dataFromStorage) {
      return undefined
    }
    return JSON.parse(dataFromStorage)
  }

  const fetchFromSessionStorage = async (
    storageKey,
    fetchFunctionParams,
    fetchFunction,
  ) => {
    const dataFromStorage = getItem(storageKey)

    if (!dataFromStorage) {
      const dataFromFetch = await fetchFunction(fetchFunctionParams)
      return dataFromFetch
    }
    return dataFromStorage
  }

  return {
    setItem,
    getItem,
    fetchFromSessionStorage,
  }
}
