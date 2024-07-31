import React from "react"
import {Routes, Route, Outlet} from "react-router-dom"

// SCREENS
import MyWorkout from '../components/workout/workouts'

const CurrentScreen = () => {
    return (
        <Routes>
            <Route path="/" element={'Text!'}/>
            <Route path="/workout" element={<MyWorkout/>}/>
        </Routes>
    )
}

export default CurrentScreen
