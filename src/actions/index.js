export const addEvent = ( title, startTime, endTime, description ) => {
  return {
    type: 'ADD_EVENT',
    title,
    startTime,
    endTime,
    description
  }
}

export const textVisibility = ( time ) => {
  return {
    type: 'TOGGLE_TEXT_FIELD',
    time
  }
}