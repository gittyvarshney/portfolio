import React from 'react';
import GlobalStyle from './globalStyles';
import FrontImage from '../frontImage';
import Menu from '../menu';
import About from '../about';
import WorkingExp from '../workingExp';
import Projects from '../projects';
import Areas from '../areas';
import Contact from '../contact';

const Portfolio = () => {
    return (
      <>
      <GlobalStyle/>
      <Menu/>
      <FrontImage />
      <About/>
      <WorkingExp />
      <Projects/>
      <Areas/>
      <Contact/>
      </>
    );
  }
  
  export default Portfolio;