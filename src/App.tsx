
import './App.css';
import './AdaptiveApp.css';
import Banner from './components/banner/Banner';
import BookingPanel from './components/bookingPanel/BookingPanel';
import Footer from './components/footer/Footer';
import Options from './components/options/Options';
import SliderGallery from './components/sliderGallery/SliderGallery';

function App() {


  return (
    <div className='wrapperApp'>
      <Banner/>
      <Options/>
      <BookingPanel/>
      <SliderGallery/>
      <Footer/>
  </div>
  )
}

export default App
