import NavButtons from "../components/NavButtons";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Divider } from '@chakra-ui/react';

function Home() {

    // have instructions and a start button here for the game

    // once user clicks start, left-right column display
        // show 2 cars and their prices
        // ask user to guess which is more expensive
        // upon correct guess, add +1 to streak and replace the cars
        // upon incorrect guess, reset streak and reset both cars
        // upon clicking of reset button, reset streak and go back to start button

    return (
    <>

    <div className="w-screen h-screen flex flex-col place-content-evenly">

        <div className="flex justify-evenly">

            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Current Car Name</Heading>
                    <Text>
                        Short description of current car.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        $ ???
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="justify-center">
                    <Button variant='solid' colorScheme='blue'>
                        Greater In Price
                    </Button>
                </CardFooter>
            </Card>


            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Current Car Name</Heading>
                    <Text>
                        Short description of current car.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        $ ???
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="justify-center">
                    <Button variant='solid' colorScheme='blue'>
                        Greater In Price
                    </Button>
                </CardFooter>
            </Card>

        </div>

        <NavButtons currPage='home' />


    </div>


    </>
    )

}

export default Home;