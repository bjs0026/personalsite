import React, {useState, useEffect} from "react";
import {Button, Container, Input, UnorderedList, ListItem, Text} from "@chakra-ui/react";

const Jokes = props => {
    const [value, setValue] = useState('')
    const [showText, setShowText] = useState(false)
    const handleChange = (event) => setValue(event.target.value)


    return (
        <Container>
            <Input
                value={value}
                onChange={handleChange}
                placeholder='Search for a movie'
                size='sm'
            />
            <Button
                onClick={() => setShowText(true)}
            >
                Click to Search Movie Name
            </Button>
            {
                showText &&
                <Text>
                    When i want to see a nude scene, i normally just go to your moms house
                </Text>
            }

        </Container>
    )
}

export default Jokes