import React, { useState, useEffect} from "react";

const App = ({tempInfo})=>{
    const {
        temp,
        humidity,
        pressure,
        weatherhood,
        name,
        speed,
        country,
        sunset
    } = tempInfo;

    let sec=sunset;
    let date=new Date(sec*1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`

    const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect to update the time every second
     useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timerID);
  }, []);
    return(
        <>
           <article className="widget">
                <div className="weatherIcon">
                    <i className={"wi wi-day-sunny"}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weatherhood}</div>
                        <div className="place">{name},{country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside">{timestr}<br/>Sunset</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">{humidity}<br/>Humidity</p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                                <p><i className={"wi wi-rain"}></i></p>
                                <p className="extra-info-leftside">{pressure}<br/>Pressure</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className="extra-info-leftside">{speed}<br/>Speed</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default App;