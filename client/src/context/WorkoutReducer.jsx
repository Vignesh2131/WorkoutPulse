import { createContext, useReducer} from 'react'

export const WorkOutContext = createContext();
//action - type and payload property
//state is the intial state of the reducer
 const WorkoutReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts:action.payload
      }
    case 'CREATE_WORKOUT':
      return {
        workouts:[action.payload,...state.workouts]
      }
    default:
      return state
  }
}

export const WorkoutContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(WorkoutReducer, { workouts:[] });
  
  
  return (
    <WorkOutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkOutContext.Provider>
  )
}

export default WorkoutReducer;