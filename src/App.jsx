
import './App.css'
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/footer';

import Home from './components/home'
import ProjectCard from './components/ProjectShowcase';
import Navbar from './components/navbar';

function App() {
 

  return (
    <>

<div className='w-screen z-50 fixed  top-0 left-2/4 -translate-x-[50%] border-b-2 border-white'>

<Navbar />
</div>
  <div >
<Home />
 </div>
 <Footer />
    </>
  )
}

export default App;
