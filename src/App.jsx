import { useState } from 'react';
import './App.css';
import WeatherForecast from './components/WeatherForecast';
import WeatherSearch from './components/WeatherSearch';

function App() {
  const [show, setShow] = useState(false)
  const [info, setInfo] = useState([]);
  return (
    <div className="App">
      <WeatherSearch info={info} setInfo={setInfo} setShow={setShow} />
      <WeatherForecast info={info} show={show} />
    </div>
  )
}

export default App;
