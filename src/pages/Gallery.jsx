import { useEffect, useState } from "react";
import {
    Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup,
    Divider,
  } from '@chakra-ui/react';
import ferarriLogo from '../assets/ferarri-logo.svg';


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

    <div className="bg-neutral-200 flex justify-center items-center w-screen h-36 gap-24" >
       
        <img className="w-24 h-28" src={ferarriLogo} alt="Ferarri Logo" />

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

    </div>

    </>
    )

}

export default Gallery; 