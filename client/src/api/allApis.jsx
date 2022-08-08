import AxiosApi from "./AxiosApi";

export const allWorkout = async ({dispatch}) => {
    try {
        const res = await AxiosApi.get('/api/workouts')
        dispatch({
            type: "SET_WORKOUTS",
            payload: res.data
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const updateWorkout = async ({dispatch,editWorkout,data}) => {
    try {
        const res = await AxiosApi.patch(`/api/workouts/${editWorkout[0]?._id}`, data)
        return res
    } catch (error) {
        console.log(error);
    }
}

export const addWorkout = async ({dispatch,data}) => {
    try {
        const res = await AxiosApi.post('/api/workouts', data)
        dispatch({
            type:"CREATE_WORKOUTS",
            payload:res.data
        })
        return res
    } catch (error) {
        console.log(error);
    }
}