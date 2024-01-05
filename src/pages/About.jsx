import '@radix-ui/themes/styles.css';
import { Theme, Tabs, Text, Box } from '@radix-ui/themes';
import NavButtons from "../components/NavButtons";


function About() {
    

    return (
    <>

        <Theme className='w-screen h-screen flex flex-col place-items-center justify-evenly' accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
            
            <div className='mb-4 text-4xl font-bold'>
                About The Project
            </div>

            <div className='w-3/5 h-2/5'>
                <Tabs.Root className='place-items-center p-4 bg-white drop-shadow' defaultValue="purpose">

                    <Tabs.List className='flex justify-center'>
                        <Tabs.Trigger value="purpose">Purpose</Tabs.Trigger>
                        <Tabs.Trigger value="tech">Technologies</Tabs.Trigger>
                        <Tabs.Trigger value="github">GitHub</Tabs.Trigger>
                    </Tabs.List>

                    <Box px="4" pt="3" pb="2">

                        <Tabs.Content value="tech">
                        <Text size="2">
                            <ul>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Tailwind CSS</li>
                                <li>Mantine, Chakra, Radix UI</li>
                            </ul>
                        </Text>
                        </Tabs.Content>

                        <Tabs.Content value="github">
                        <Text size="2">
                            <span>Check out the repo on GitHub!</span>
                            <br/><br/> 
                            <a className='underline' target='_blank' rel='noreferrer' href="https://github.com/iyilmaz24/memory_game_react">
                            iyilmaz24/memory_game_react</a> 
                            
                        </Text>
                        </Tabs.Content>

                        <Tabs.Content value="purpose">
                        <Text size="2">
                            This project was made in the React portion of Full-Stack JavaScript
                            on The Odin Project. It was used as a way to practice fetching data within
                            React applications, as well as to try Tailwind CSS and React component libraries.
                        </Text>
                        </Tabs.Content>

                    </Box>

                </Tabs.Root>
            </div>

            <NavButtons currPage='about' />

        </Theme>

    </>
    )

}

export default About;