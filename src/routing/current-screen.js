import React from "react"
import {Routes, Route, Outlet} from "react-router-dom"

// SCREENS
import MyWorkout from '../components/workout/workouts'
import Jokes from '../components/jokes/jokes'

const CurrentScreen = () => {
    return (
        <Routes>
            <Route path="/" element={'Text!'}/>
            <Route path="/workout" element={<MyWorkout/>}/>
            <Route path="/jokes" element={<Jokes/>}/>
        </Routes>
    )
}

export default CurrentScreen
