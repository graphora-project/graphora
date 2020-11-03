export const calculateMax = (data, type) => {
  if (type === 'frecuency') {
    const frecuency = []
    data.map((dataFrecuency) => frecuency.push(dataFrecuency.frecuency))
    const frecuencyMax = Math.max(...frecuency)
    return frecuencyMax
    // eslint-disable-next-line no-else-return
  } else {
    const association = []
    // eslint-disable-next-line array-callback-return
    data.map((dataAssociation) => {
      association.push(parseFloat(dataAssociation.association))
    })
    const associationMax = Math.max(...association)
    return associationMax
  }
}
