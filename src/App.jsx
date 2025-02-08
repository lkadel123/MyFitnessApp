import './App.css';
import AboutSection from './assets/Components/About';
import FeaturedClasses from './assets/Components/FeaturedClasses';
import Navbar from './assets/Components/NavBar';
import Slide from './assets/Components/Slide';
import TopBar from './assets/Components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FitnessParkPrograms from './assets/Components/programs';
import ContactSection from './assets/Components/Contact-me';
import Footer from './assets/Components/Footer';
import Gallery from './assets/Components/Gallery';
import TeamSection from './assets/Components/Trainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeaturedClass from './assets/Components/ClassesCards';
import TiltCard from './assets/Components/Example';
import FeaturesGrid from './assets/Components/WhyChoose';


function Home() {
  return (
    <>
      <div className="containerHome">
       <Slide />
       <FeaturesGrid/>
       <FeaturedClasses />
       <FeaturedClass/>
       <AboutSection />
       <TeamSection />
       <Gallery />
       <ContactSection />

      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/classes" element={<FeaturedClasses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/memberships" element={<TiltCard/>} />
        <Route path="/trainer" element={<TeamSection />} />
        <Route path="/programs" element={<FeaturedClass />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
