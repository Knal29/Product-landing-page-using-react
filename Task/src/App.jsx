import './App.css'
import ContactUs from './components/ContactUs';
import Navigation from './components/Navigation';
import Web from './components/Web';
import Footer from './components/Footer';
const App = () => {

  return (
    <div>
      <Navigation />
      <Web />
      <ContactUs/>
      <Footer/>


    </div>
  );
};

export default App;