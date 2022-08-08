import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

export const workOutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                ...state,
                workouts: action.payload
            }
        case 'CREATE_WORKOUTS':
            return {
                ...state,
                workouts: [...state.workouts, action.payload]
            }
        case 'UPDATE_WORKOUTS':
            return {
                ...state,
                workouts: [...state.workouts, action.payload]
            }
        case 'DELETE_WORKOUTS':
            return {
                ...state,
                workouts: state.workouts.filter(data => data._id !== action.payload._id)
            }
        case 'UPDATE_STATUS':
            return {
                ...state,
                updatStatus: {
                    isUpdate: action.payload.isUpdate,
                    _id: action.payload._id
                },
                editWorkout:state.workouts.filter(data => data._id === action.payload._id)
            }
        default:
            return state;
    }
}

export const WorkoutsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workOutsReducer, {
        workouts: null,
        isUpdate: false,
        editWorkout: null,
    })

    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutsContext.Provider>
    )
}
