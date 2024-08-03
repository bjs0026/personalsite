import React from "react"
import {Routes, Route} from "react-router-dom"

// SCREENS
import MyWorkout from '../components/workout/workouts'
import Jokes from '../components/jokes/jokes'
import Hero from '../components/hero/hero'

const CurrentScreen = () => {
    return (
        <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/workout" element={<MyWorkout/>}/>
            <Route path="/jokes" element={<Jokes/>}/>
        </Routes>
    )
}

export default CurrentScreen
