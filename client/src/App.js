import logo from './logo.svg';
import './App.css';
import {Route , BrowserRouter} from 'react-router-dom'
import home from './pages/home'
import login from './pages/login'
import register from './pages/register'
import BookingCar from './pages/BookingCar'
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      
        <Route path='/' exact component={home} />
        <Route path='/login' exact component={login} />
        <Route path='/register' exact component={register} />
        <Route path='/BookingCar' exact component={BookingCar} />

      </BrowserRouter>

    </div>
  );
}

export default App;
