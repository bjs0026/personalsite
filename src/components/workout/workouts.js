import React, {useState} from "react";
import {Button, Container, Input, List, Text} from "@chakra-ui/react";
import useLocalStorage from "../helpers/local-storage";

const MyWorkout = props => {
    const [value, setValue] = useState()
    const [workout, setWorkout, removeWorkouts] = useLocalStorage('workout')

    const handleChange = (event) => setValue(event.target.value)

    return (
        <Container>
            <Input
                value={value}
                onChange={handleChange}
                placeholder='Enter something'
                size='sm'
            />
            <Button
                onClick={() => setWorkout(value)}
            >
                Save me!
            </Button>
            <Button
                onClick={removeWorkouts}
            >
                Remove me!
            </Button>
            <Text>
                {workout}
            </Text>
        </Container>
    )
}

export default MyWorkout