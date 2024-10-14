
import { useDispatch } from 'react-redux';
import { getCategories } from './store/actionCreators.js';
import RoutesMain from './routes/routesMain.js';
import Header from './header/index.jsx';
import Footer from './footer/index.jsx';
import './App.css';
import { useEffect } from 'react';
import { getProducts } from './store/actionCreators.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategories())
  }, [dispatch]);


  return (
  

      <div className="App">
        <Header/>
          <RoutesMain/>
        <Footer/>

      </div>

 
  );
}

export default App;
