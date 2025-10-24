import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { Prayers } from './components/Prayers';
// import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Prayers />
        {/* <Contact /> */}
        <Newsletter />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}