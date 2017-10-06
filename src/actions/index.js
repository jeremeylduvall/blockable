export const addEvent = ( title, startTime, endTime, description ) => {
  console.log( 'calling action' );
  return {
    type: 'ADD_EVENT',
    title,
    startTime,
    endTime,
    description
  }
}

export const toggleVisiblity = () => {
  return {
    type: 'TOGGLE_TEXT_FIELD'
  }
}