export const calculateMin = (data, type) => {
  if (type === 'frecuency') {
    const frecuency = []
    data.map((dataFrecuency) => frecuency.push(dataFrecuency.frecuency))
    const frecuencyMin = Math.min(...frecuency)
    return frecuencyMin
    // eslint-disable-next-line no-else-return
  } else {
    const association = []
    data.map((dataAssociation) =>
      association.push(parseFloat(dataAssociation.association)),
    )
    const associationMin = Math.min(...association)
    return associationMin
  }
}
