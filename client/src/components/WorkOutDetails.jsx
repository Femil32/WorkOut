import React from 'react'
import AxiosApi from '../api/AxiosApi'
import useWorkoutsContext from '../hooks/useWorkoutsContext'

// icons
import Dustbin from '../assets/icons/dustbin.svg'
import Pencil from '../assets/icons/pencil.svg'

const WorkOutDetails = ({ workout }) => {

    const { dispatch } = useWorkoutsContext()

    const deleteWorkout = async (id) => {
        const isDelete = confirm("Are your sure?")
        if (isDelete) {
            try {
                const res = await AxiosApi.delete(`/api/workouts/${id}`)
                console.log(res);
                dispatch({
                    type: "DELETE_WORKOUTS",
                    payload: res.data
                })
                return res
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className='border drop-shadow-sm p-4 rounded-xl bg-white hover:border-black/50 transition-all cursor-pointer h-44'>
            <div className='mb-4 flex justify-between items-center'>
                <h4 className='text-lg font-semibold'>{workout.title}</h4>
                <div className='flex gap-2'>
                    <span onClick={() => {
                        dispatch({
                            type:"UPDATE_STATUS",
                            payload:{
                                _id:workout._id,
                                isUpdate:true
                            }
                        })
                    }}>
                        <img src={Pencil} alt='Pencil' />
                    </span>
                    <span onClick={() => deleteWorkout(workout._id)}>
                        <img src={Dustbin} alt='Dustbin' />
                    </span>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='inline-flex gap-2'>
                    <span className='font-medium capitalize'>reps :</span>
                    <span>{workout.reps}</span>
                </p>
                <p className='inline-flex gap-2'>
                    <span className='font-medium capitalize'>load :</span>
                    <span>{workout.load}</span>
                </p>
                <p className='inline-flex gap-2 '>
                    <span className='font-medium capitalize'>createdAt :</span>
                    <span>{workout.createdAt}</span>
                </p>
            </div>
        </div>
    )
}

export default WorkOutDetails