import { useEffect, useState } from "react";


function Gallery() {

    // have a gallery of a few ferarris here
        // have a short history + interesting facts about the brand
    
    // clicking the logo should take you to their official website

    
    const [ferrariStock, setFerarriStock] = useState('Loading...');
    
    // have useEffect hook fetch current stock price every render
    useEffect(() => {
        fetch("https://finnhub.io/api/v1/quote?symbol=RACE&token=cm8dp0hr01qi5ocv5u0gcm8dp0hr01qi5ocv5u10").then(
            res => res.json())
            .then(
                (response) => {setFerarriStock('$' + response.c)}).
        catch((err) => {console.log(err); setFerarriStock("Loading...")})
    }, [])

    return (
    <>
        <div>Ferarri</div>
        <div>{ferrariStock}</div>
    </>
    )

}

export default Gallery; 