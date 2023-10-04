import './App.css'
import { Navbar, Hero, Features, VideoChat, Conversations, Customers, Testimonials, Footer } from './components';

function App() {
  return (
    <>
      <div className='w-full overflow-hidden mx-auto'>
          <div>
            <Navbar/>
            <Hero/>
            <Features/>
            <VideoChat/>
            <Conversations/>
            <Customers/>
            <Testimonials/>
            <Footer/>
          </div>
      </div>
    </>
  );
}

export default App
