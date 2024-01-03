import { Link } from "react-router-dom";
import { Button } from '@mantine/core';


// eslint-disable-next-line react/prop-types
function NavButtons({ currPage }) {

    let links = [];

    if(currPage == 'gallery'){
        links = [ ['../', 'Home'], ['../about', 'About'] ];
    }
    else if(currPage == 'about'){
        links = [ ['../', 'Home'], ['../gallery', 'Gallery'] ];
    }
    else{
        links = [ ['../gallery', 'Gallery'], ['../about', 'About'] ];
    }

    return (
    <>

        <div className='flex justify-center gap-16'>

            <Button className='bg-white text-black drop-shadow'
            component={Link} to={links[0][0]} variant='link'>
                {links[0][1]}
            </Button>

            <Button className='bg-white text-black drop-shadow'
            component={Link} to={links[1][0]} variant='link'>
                {links[1][1]}
            </Button>

        </div>
        
    </>
    )
}


export default NavButtons;