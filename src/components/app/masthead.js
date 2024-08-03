'use client'

import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    Stack,
    Button
} from '@chakra-ui/react'
import {HamburgerIcon, CloseIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'

const links = [
    {
        key: 'home',
        label: 'Home',
        href: '#/'
    },
    {
        key: 'workout',
        label: 'Workout',
        href: '#/workout'
    },
    {
        key: 'jokes',
        label: 'Jokes',
        href: '#/jokes'
    }
]

const NavLink = (props) => {
    const {children, href} = props

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={href}>
            {children}
        </Box>
    )
}

export default function Masthead() {
    const {colorMode, toggleColorMode} = useColorMode()
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <Box
                mb={12}
                bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>Logo</Box>
                        <HStack as={'nav'} spacing={4} display={{base: 'none', md: 'flex'}}>
                            {
                                links.map(({
                                               href,
                                               label,
                                               key
                                           }) => (
                                    <NavLink
                                        key={key}
                                        href={href}
                                    >
                                        {label}
                                    </NavLink>
                                ))
                            }
                        </HStack>
                    </HStack>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                    </Button>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{md: 'none'}}>
                        <Stack as={'nav'} spacing={4}>
                            {
                                links.map(({
                                               href,
                                               label,
                                               key
                                           }) => (
                                    <NavLink
                                        key={key}
                                        href={href}
                                    >
                                        {label}
                                    </NavLink>
                                ))
                            }
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}