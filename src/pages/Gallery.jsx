import { useEffect, useState } from "react";


function Gallery() {

    // have a gallery of a few ferarris here
        // have a short history + interesting facts about the brand
    
    // clicking the logo should take you to their official website

    
    const [ferrariStock, setFerarriStock] = useState('Loading...');
    
    // have useEffect hook fetch current stock price every render
    useEffect(() => {
        const getStockPrice = () => {
            fetch("https://finnhub.io/api/v1/quote?symbol=RACE&token=").then(
                (res) => {
                    if(!res.ok){throw new Error};
                    return res.json();
                }).then((data) => {setFerarriStock("$" + data.c)}).
            catch(error => console.log(error))
        }
        getStockPrice();

    }, [])

    return (
    <>
        <div>Ferarri</div>
        <div>{ferrariStock}</div>
    </>
    )

}

export default Gallery; 