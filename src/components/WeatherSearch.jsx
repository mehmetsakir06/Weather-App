import { useState } from 'react';
import axios from 'axios';

function WeatherSearch({ info, setInfo, setShow }) {
    const [city, setCity] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        const api = "41ae2e6cf2da3871b3438d1ccb40a77a";
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`
        await axios(baseURL).then(res => setInfo(res.data));
        console.log(info);
        setShow(true);
        setCity('');
    }


    return (
        <div className='container'>
            <h1 >Weather App</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <input
                        type='text'
                        placeholder='Write city name'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className='formInput'
                    />
                </div>
                <div className='divButton'>
                    <button type='submit' className='buttonSearch' >Search</button>
                </div>
            </form>
        </div>
    )
}

export default WeatherSearch;