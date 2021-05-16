import React, { useState, useEffect } from 'react';
import './CovidTracker.css';
import { Link } from "react-router-dom";


const CovidTracker = (props) => {
	const [data, setData] = useState([]);

	const getCovidData = async() =>{
		try{
			const res = await fetch("https://api.covid19india.org/data.json");
			const actualData = await res.json();
			console.log(actualData.statewise[0]);
			setData(actualData.statewise[0]);
		}catch(err){
			console.log(err);
		}
	}
	useEffect(() => {
	    getCovidData();
	  }, []);
    return (
        <>
        <div className="container">
         {/*<img class="live" src="https://uxwing.com/wp-content/themes/uxwing/download/22-events-culture/live.png"/>*/}
        {/*<p className="text-center">Live</p>*/}
        <h2 className="text-center covid-text" >COVID19 CORONAVIRUS TRACKER</h2>
        <div class="row justify-content-md-center">
         <div class="text-center ">
            <div class="alert alert-success" role="alert">
            <p class="font-weight-bold">Cowin Vaccination Slot Finder is available now!</p>
            <hr />
            <p>Try our new slot finder toolkit to find all available vaccination sessions.</p>
              <Link type="button" id="myBtn" to="/vaccine" class="btn btn-danger  active mt-3" role="button">Vaccination Slot Find</Link>
              </div>
          </div>  
        </div>
        	<div className="row">
        		<div class="col-sm-4">
				    <div class="card text-white bg-primary my-3">
				    <div class="card-header bg-transparent border-light">Contry</div>
				      <div class="card-body">
				        <h5 class="card-title">INDIA</h5>
				        {/*<p class="card-text"></p>*/}
				        {/*{<a href="#" class="btn btn-primary">Find Vaccination</a>}*/}
				      </div>
				    </div>
				</div>
				<div class="col-sm-4">
				    <div class="card text-white bg-success my-3">
				    <div class="card-header bg-transparent border-light">Total Recovered</div>
				      <div class="card-body">
				        <h5 class="card-title">{data.recovered}</h5>
				        {/*<p class="card-text"></p>*/}
				        {/*<a href="#" class="btn btn-primary">Find Vaccination</a>*/}
				      </div>
				    </div>
				</div>
				<div class="col-sm-4">
				    <div class="card text-white bg-warning my-3">
				    <div class="card-header bg-transparent border-light">Total Confirmed</div>
				      <div class="card-body">
				        <h5 class="card-title">{data.confirmed}</h5>
				        {/*<p class="card-text"></p>*/}
				        {/*<a href="#" class="btn btn-primary">Find Vaccination</a>*/}
				      </div>
				    </div>
				</div>
				<div class="col-sm-4">
				    <div class="card text-white bg-danger my-3">
				    <div class="card-header bg-transparent border-light">Total Death</div>
				      <div class="card-body">
				        <h5 class="card-title">{data.deaths}</h5>
				        {/*<p class="card-text"></p>*/}
				        {/*<a href="#" class="btn btn-primary">Find Vaccination</a>*/}
				      </div>
				    </div>
				</div>
				<div class="col-sm-4">
				    <div class="card text-white bg-dark my-3">
				    <div class="card-header bg-transparent border-light">Total Active</div>
				      <div class="card-body">
				        <h5 class="card-title">{data.active}</h5>
				        {/*<p class="card-text"></p>*/}
				        {/*<a href="#" class="btn btn-primary">Find Vaccination</a>*/}
				      </div>
				    </div>
				</div>
				<div class="col-sm-4">
				    <div class="card text-white bg-info my-3">
				    	<div class="card-header bg-transparent border-light">Last Updated</div>
				      <div class="card-body">
				        <h5 class="card-title">{data.lastupdatedtime}</h5>
				        {/*<p class="card-text">Denotes </p>*/}
				        {/*<a href="#" class="btn btn-primary">Find Vaccination</a>*/}
				      </div>
				    </div>
				</div>
			</div>
		</div>
        </>
    );
};

CovidTracker.displayName = 'CovidTracker';

export default CovidTracker;
