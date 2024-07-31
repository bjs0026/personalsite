import React from "react";
import {useNavigate} from "react-router-dom"
import {
    Container,
    HStack,
    Text,
    Button,
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";


const Masthead = props => {
    const navigate = useNavigate()
    return (
        <Container centerContent>
            <HStack spacing={'24px'} m={2}>
                <Button
                    aria-label={'Click Me!'}
                    colorScheme={'blue'}
                    onClick={() => navigate('/')}
                >
                    Go Home!
                </Button>
                <Button
                    aria-label={'Click Me!'}
                    leftIcon={<SearchIcon/>}
                    colorScheme={'teal'}
                    onClick={() => navigate('/workout')}
                >
                    Click Me!
                </Button>
            </HStack>
        </Container>
    )
}

export default Masthead