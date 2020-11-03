export const calculateProm = (data, type) => {
  if (type === 'frecuency') {
    let frecuency = null
    // eslint-disable-next-line array-callback-return
    data.map((dataFrecuency) => {
      frecuency += parseFloat(dataFrecuency.frecuency)
    })
    return (frecuency / data.length).toFixed(5)
    // eslint-disable-next-line no-else-return
  } else {
    let association = null
    // eslint-disable-next-line array-callback-return
    data.map((dataAssociation) => {
      association += parseFloat(dataAssociation.association)
    })
    return (association / data.length).toFixed(5)
  }
}
