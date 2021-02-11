import React from 'react';
import Mynavbar from './Components/Navbar/Mynavbar';
import Home from './Components/home/Home';
import About from './Components/About/About';
import Media from './Components/media/Media';
import Footer from './Components/footer/Footer';
const App = () => {
  return (
    <>
      <Mynavbar />
      <Home />
      <br />
      <About />
      <br />
      <Media />
      <Footer />
    </>
  );
};

export default App;
