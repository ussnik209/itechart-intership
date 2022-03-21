const addPoints = (points) => {
  return {
    type: 'ADD_POINTS',
    points
  }
}

const subPoints = (points) => {
  return {
    type: 'SUB_POINTS',
    points
  }
}

export { addPoints, subPoints }