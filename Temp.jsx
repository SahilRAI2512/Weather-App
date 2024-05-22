import React, { useEffect, useState } from "react";
import './style.css';
import SC from './weathercard';

const Temp =()=>{
    const[svalue,setsvalue]=useState("Amritsar");
    const[tempInfo,settempInfo]=useState({});

    const info= async ()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${svalue}&units=metric&appid=18a5a7f4b5634de9a5e1e0f5a415b75d`;

            let res = await fetch(url);
            let data = await res.json();
            const {temp,humidity,pressure}=data.main;
            const {main:weatherhood}=data.weather[0];
            const {name}=data;
            const {speed}=data.wind;
            const {country,sunset}=data.sys;
            
            const weatherInfo ={
                temp,
                humidity,
                pressure,
                weatherhood,
                name,
                speed,
                country,
                sunset
            }
            settempInfo(weatherInfo);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        info();
    },[]);

    return(
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="Enter City" autoFocus id="search" className="searchTerm" onChange={(event)=>setsvalue(event.target.value)} value={svalue}></input>
                    <button className="searchButton" type="button" onClick={info}>Search</button>
                </div>
            </div> 
            <SC tempInfo={tempInfo}></SC>           
        </>
    )
}

export default Temp;