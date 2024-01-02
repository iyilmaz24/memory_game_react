import { useEffect, useState } from "react";
import {
    Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup,
    Divider,
  } from '@chakra-ui/react';
import ferarriLogo from '../assets/ferarri-logo.svg';
import { Image, Paper, Text } from '@mantine/core';

function Gallery() {

    // have a gallery of a few ferarris here
        // have a short history + interesting facts about the brand
    
    // clicking the logo should take you to their official website

    const [ferrariStock, setFerarriStock] = useState('Loading...');
    const [stockPercentChange, setStockPercentChange] = useState("Loading...");
    const [positiveChange, setPositiveChange] = useState(false)
    
    // have useEffect hook fetch current stock price every render
    useEffect(() => {
        const getStockPrice = () => {
            fetch("https://finnhub.io/api/v1/quote?symbol=RACE&token=cm9hha1r01qg39vof130cm9hha1r01qg39vof13g").then(
                (res) => {
                    if(!res.ok){throw new Error};
                    return res.json();
                }).then((data) => {
                    setFerarriStock("$" + data.c); 
                    // dp = percent change
                    setStockPercentChange(data.dp);

                    if(data.c > data.pc){
                    // if current (c) price is greater than previous close (pc) price
                        setPositiveChange(true)
                    }
                    else{
                        setPositiveChange(false)
                    }
}).
            catch(error => console.log(error))
        }
        getStockPrice();

    }, [])

    return (
    <>
    <div className="w-screen h-screen flex flex-col place-content-evenly">

        <Paper className="flex justify-center items-center w-3/4 h-36 gap-24 place-self-center">
            <Image className="w-20 h-24" radius='md' src={ferarriLogo} alt="Ferarri Logo" />
            
            <Divider height='5.5rem' orientation='vertical' borderColor={'black'} />
            <StatGroup>
                <Stat>
                    <StatLabel>NYSE: RACE</StatLabel>
                    <StatNumber>{ferrariStock}</StatNumber>
                    <StatHelpText>
                    <StatArrow type={(positiveChange) ? 'increase' : 'decrease'} />
                        {stockPercentChange}
                    </StatHelpText>
                </Stat>
            </StatGroup>
        </Paper>

        <Paper className="w-3/5 place-self-center" shadow="xs" p="xl">
            <Text>Paper is the most basic ui component</Text>
            <Text>
                Use it to create cards, dropdowns, modals and other components that require background
                with shadow
            </Text>
        </Paper>

    </div>



    </>
    )

}

export default Gallery; 