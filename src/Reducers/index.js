const events = ( state = [], action ) => {
  switch ( action.type ) {
    case 'ADD_EVENT':
      return [
        ...state,
        {
          title: action.title,
          start: action.start,
          end: action.end,
          desc: action.desc,
        }
      ]
    default:
      return state
  }
}

export default events;