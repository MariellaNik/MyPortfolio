import "./App.scss";
import { Routes,Route } from 'react-router-dom'
import Layout from './components/layout'
import About from './components/about'
import Home from './components/home'
import Contact from './components/contact'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
