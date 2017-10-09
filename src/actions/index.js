export const addEvent = ( description, startTime, endTime  ) => {
  return {
    type: 'ADD_EVENT',
    description,
    startTime,
    endTime,
  }
}

export const removeEvent = ( selectedEvent ) => {
  return {
    type: 'REMOVE_EVENT',
    selectedEvent
  }
}

export const textVisibility = ( time ) => {
  return {
    type: 'TOGGLE_TEXT_FIELD',
    time
  }
}

export const eventSelected = ( event ) => {
  return {
    type: 'EVENT_SELECTED',
    event
  }
}