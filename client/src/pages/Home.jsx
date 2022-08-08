import React, { useEffect, useState } from 'react'
import WorkOutDetails from '../components/WorkOutDetails'
import { Link } from 'react-router-dom'
import useWorkoutsContext from '../hooks/useWorkoutsContext'
import WorkOutForm from '../components/WorkOutForm'
import { allWorkout } from '../api/allApis'

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext()

    useEffect(() => {
        return () => {
            allWorkout({dispatch})
        }
    }, [])

    return (
        <div className='w-full h-full'>
            <Link className='btn btn-blue float-right relative mb-4' to='/addworkout'>Add new Workout</Link>
            <div className='flex w-full gap-4 items-start'>
                <div className=' grid grid-cols-3 gap-4 w-3/4'>
                    {workouts?.map(workout => {
                        return (
                            <WorkOutDetails key={workout._id} workout={workout} />
                        )
                    })}
                </div>
                <div className='w-1/4'>
                    <WorkOutForm/>
                </div>
            </div>
        </div>
    )
}

export default Home