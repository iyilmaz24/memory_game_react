/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import {
    Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup,
    Divider,
  } from '@chakra-ui/react';
import ferarriLogo from '../assets/ferarri-logo.svg';
import { Image, Paper, Text } from '@mantine/core';
import NavButtons from "../components/NavButtons";

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

    <div className="w-screen min-h-full flex flex-col place-content-evenly overflow-scroll p-4 gap-8">

        <Paper className="flex justify-center items-center w-3/4 h-36 gap-20 place-self-center" shadow="xs" p="xl">
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

        <div className="flex flex-col w-screen place-items-center gap-4">
            <Paper className="w-3/5" shadow="xs" p="xl">
                <Text>
                Ferrari is an iconic Italian luxury sports car manufacturer founded in 1939 by Enzo Ferrari. 
                Renowned for its high-performance vehicles, the brand is synonymous with speed, elegance, and 
                exclusivity. With a distinctive prancing horse logo, Ferrari is celebrated for powerful engines, 
                cutting-edge technology, and success in Formula One racing.
                </Text>
            </Paper>

            <Paper className="w-3/5" shadow="xs" p="xl">
                <Text>
                Ferrari's prancing horse logo was inspired by a World War I fighter pilot's symbol for good luck, and 
                it has since become an iconic emblem of the brand. Ferrari's trademark color, Rosso Corsa, or 
                Racing Red, was chosen to represent Italy in international motorsports. 
                The bold red hue has since become synonymous with Ferrari's racing heritage.
                </Text>
            </Paper>
        </div>

        <NavButtons currPage='gallery' />

    </div>



    </>
    )

}

export default Gallery; 