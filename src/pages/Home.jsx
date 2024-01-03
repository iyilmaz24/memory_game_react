import NavButtons from "../components/NavButtons";


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

        <NavButtons currPage='home' />

        <div>Home.jsx</div>

    </>
    )

}

export default Home;