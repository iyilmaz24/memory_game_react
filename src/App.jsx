import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import About from './pages/About';
import { ChakraProvider } from '@chakra-ui/react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "about",
    element: <About />
  }
]);



function App() {

  return (

    <MantineProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </MantineProvider>
    
  )

}

export default App
