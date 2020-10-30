export const SessionStorage = () => {
  const putItem = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data))
  }

  const getItem = (key) => sessionStorage.getItem(key)

  return {
    putItem,
    getItem,
  }
}
