import { RiCelsiusFill } from "react-icons/ri";

function WeatherForecast({ info, show }) {
    return (
        <div>
            {
                show ? <div className='forecastContainer'> <div>
                    <h2> {info.name}, {info.sys.country} </h2>
                    <div className='cityTemp'>
                        <p>{info.main.temp} <RiCelsiusFill /> </p>
                    </div>
                    <h3>{info.weather[0].main} </h3>
                </div>
                    <div className='feelsTempHum'>
                        <p>Feels Temperature {info.main.feels_like} </p>
                        <p> Humidity %{info.main.humidity} </p>
                    </div>
                </div> : null
            }
        </div>

    )

}
export default WeatherForecast;