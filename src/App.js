import "./App.scss";
import { Routes,Route } from 'react-router-dom'
import Layout from './components/layout'
import About from './components/about'
import Home from './components/home'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
