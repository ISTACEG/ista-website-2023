import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home-page';
// import ItrixPage from './pages/Itrix-page';
import Footer from './components/footer';



function App() {
  return (
    <>
    
      <div className="App">
          <Routes>
            <Route path='/' element={<Home />}/>
            {/* <Route path='/itrix' element={<ItrixPage />}/> */}
            {/* <Route path='/ipp' element={<Ipp />}/> */}
          </Routes>
          
          <Footer />
      </div>
    
    
    </>

  );
}

export default App;
