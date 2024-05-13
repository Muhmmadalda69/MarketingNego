import { Component } from 'react';
import './App.css';
import ContactLayout from './Layouts/ContactLayout';
import CoverLayout from './Layouts/CoverLayout';
import FooterLayout from './Layouts/FooterLayout';
import Navbar from './Layouts/Navbar';
import AboutLayout from './Layouts/aboutLayout';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <CoverLayout />


        <AboutLayout />
        <ContactLayout />
        <FooterLayout />
      </>
    );
  }
}

export default App;
