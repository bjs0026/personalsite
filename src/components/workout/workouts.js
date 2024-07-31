import React, {useState, useEffect} from "react";
import {Button, Container, Input, UnorderedList, ListItem} from "@chakra-ui/react";
import useLocalStorage from "../helpers/local-storage";

const MyWorkout = props => {
    const [value, setValue] = useState('')
    const [workout, setWorkout, removeWorkouts] = useLocalStorage('workout')
    const [list, setList] = useState(workout ?? [])

    const handleChange = (event) => setValue(event.target.value)

    const addWorkout = () => {
        const newWorkouts = workout ? [...workout] : []
        newWorkouts.push(value)
        setWorkout(newWorkouts)
        setList(newWorkouts)
        setValue('')
    }

    const remove = () => {
        removeWorkouts()
        setList([])
    }

    return (
        <Container>
            <Input
                value={value}
                onChange={handleChange}
                placeholder='Enter something'
                size='sm'
            />
            <Button
                onClick={addWorkout}
            >
                Save me!
            </Button>
            <Button
                onClick={remove}
            >
                Remove me!
            </Button>
            <UnorderedList styleType="'-'">
                {
                    list?.map(item =>
                        <ListItem
                            key={item}
                        >
                            {item}
                        </ListItem>
                    )}
            </UnorderedList>
        </Container>
    )
}

export default MyWorkout