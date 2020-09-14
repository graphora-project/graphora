export const GraphoraService = () => {
  const fetchRelatedWords = (word) =>
    fetch(`${process.env.REACT_APP_GRAPHORA}/graph/${word}`).then((data) =>
      data.json(),
    )

  return {
    fetchRelatedWords,
  }
}
