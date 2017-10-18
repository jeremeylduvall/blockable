export const addEvent = ( title, startTime, endTime, description  ) => {
  return {
    type: 'ADD_EVENT',
    title,
    startTime,
    endTime,
    description
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

export const eventSelected = ( event, time ) => {
  return {
    type: 'EVENT_SELECTED',
    event
  }
}
