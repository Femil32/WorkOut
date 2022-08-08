import React from 'react'
import AxiosApi from '../api/AxiosApi'
import { useNavigate } from 'react-router-dom'
import useWorkoutsContext from '../hooks/useWorkoutsContext'
import { addWorkout, allWorkout, updateWorkout } from '../api/allApis'

const WorkOutForm = () => {
    const navigate = useNavigate()
    const {editWorkout,updatStatus,dispatch} = useWorkoutsContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { title, reps, load } = e.target.elements
        let data = { title: title.value, reps: reps.value, load: load.value }
        if (!title.value || !reps.value || !load.value) {
            throw Error('sdsds')
        }
        if(updatStatus?.isUpdate){
            updateWorkout({dispatch,editWorkout,data}).then(() => {
                allWorkout({dispatch})
            })
        }else{
            addWorkout({dispatch,data})
        }
        dispatch({
            type:"UPDATE_STATUS",
            payload:{
                _id:null,
                isUpdate:false
            }
        })
    }

    return (
        <div className='flex justify-center items-center w-full h-full'>
            <form className='der drop-shadow-sm rounded-xl bg-white max-w-md w-full p-8' onSubmit={(e) => {
                handleSubmit(e)
            }}>
                <h4 className='font-bold text-xl mb-8'>Add new Workout</h4>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" defaultValue={editWorkout?.[0]?.title ?? ""} className='text-input' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="reps">Reps</label>
                        <input type="number" name="reps" id="reps" defaultValue={editWorkout?.[0]?.reps ?? ""} className='number-input' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="load">Load</label>
                        <input type="number" name="load" id="load" defaultValue={editWorkout?.[0]?.load ?? ""} className='number-input' />
                    </div>
                </div>
                <button type='submit' className='btn btn-blue mt-8'>
                    {updatStatus?.isUpdate ? "Update" : "Submit"}
                </button>
            </form>
        </div>
    )
}

export default WorkOutForm