import React, { useState, useEffect } from 'react';
// import { Linking } from 'react-native';
import './CovidTracker.css';

const Vaccine = ({ findSlot }) => {
	const [statedata, setStateData] = useState([]);
	const [slotdata, setSlotData] = useState([]);
	const [citiesdata, setCitiesData] = useState([]);
	// const [name, setName] = useState("");
    // const [mobile, setMobile] = useState("");
    const [state, setState] = useState("");
    const [city,setCity] = useState("");
    // const [otp,setOtp] = useState("");
    // const [pincode,setPincode] = useState("");
 //    const [dynamicClasses, setDynamicClasses] = React.useState([
	//     "form-control "," hidden"
	// ]);
	// const addClass = (newClass) => {
 //       setDynamicClasses([...dynamicClasses, newClass])
 //    }
 //    const deleteClass= (classToDelete) => {
 //           setDynamicClasses(dynamicClasses.filter((e) => {
 //             return e !== classToDelete
 //           }));
 //    }
 //    useEffect(() => {
	//     if(mobile.length=== 10){
	// 		deleteClass(" hidden");
	// 	}
	// }, [mobile]);

    const getSlots = async(city) => {
    	try{
    		let d = new Date;
	    	let date = d.toJSON().slice(0,10).split('-').reverse().join('-');
    		console.log(date);

    		// if(!mobile.length===10){
	    	// 	alert("Please enter correct mobile");
	    	// }else if(otp === ""){
	    	// 	alert("Please enter correct otp that you received on whatsapp");
	    	// }
	    	// else if(!otp=== "otp"){
	    	// 	alert("Wrong otp! Please enter correct otp that you received on whatsapp");
	    	// }
	    	// else{
	    		// alert("Otp Verified");
	    		// addClass(" hidden");
	    	if(city){
		    	let url="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id="+city+"&date="+date;
				const res = await fetch(url);
					// console.log(res);
				const slotData = await res.json();
				console.log(slotData.centers);
					// console.log(actualData.statewise[0]);
				setSlotData(slotData.centers);
			}else{
				alert("Please select a valid city.")
			}
		}catch(err){
			console.log(err);
		}
    }
    const getCities = async(e_state) => {
    	try{
    		let url="https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+e_state;
			const res = await fetch(url);
			// console.log(res);
			const citiesData = await res.json();
			// console.log(citiesData.districts);
			// console.log(actualData.statewise[0]);
			setCitiesData(citiesData.districts);
		}catch(err){
			console.log(err);
		}
    }
    const getStateData = async() =>{
		try{
			const res = await fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states");
			const stateData = await res.json();
			// console.log(stateData.states);
			// console.log(actualData.statewise[0]);
			setStateData(stateData.states);
		}catch(err){
			console.log(err);
		}
	}
	useEffect(() => {
	    getStateData();
	}, []);

    const submit = (event) => {
    	event.preventDefault();
        const form = event.currentTarget;
	    if (form.checkValidity() === false) {
	      event.stopPropagation();
	    }
	    else{
	    	//findSlot(name, mobile, city, state);
	    	console.log(city);
	    	getSlots(city);
            // setTitle("");
            // setDesc("");
	    }
    }
    return (
        <>
        <div className="container">
         {/*<img className="live" src="https://uxwing.com/wp-content/themes/uxwing/download/22-events-culture/live.png"/>*/}
        <h2 className="text-center covid-text">COWIN VACCINATION</h2>
        <div className="row justify-content-md-center">
        <div className="card bg-light my-3">
		<div className="card-header bg-transparent border-dark">Find available slots</div>
		<div className="card-body">
        <form className="was-validated" onSubmit={submit}>
		  {/*<div className="form-row">*/}
		    {/*<div className="col-md-4 mb-3">
		      <label htmlFor="namevalidate">Name</label>
		      <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="namevalidate" placeholder="Enter name" required />
		      <div class="invalid-feedback">
		          Please enter the name.
		      </div>
		      <div class="valid-feedback">
		          Looks Good!
		      </div>
		    </div>*/}
		    {/*<div className="col-md-4 mb-3">
		      <label htmlFor="numbervalidate">Mobile</label>
		      <input type="text" pattern="\d*" maxlength="10" minlength="10" onChange={(e) => setMobile(e.target.value)} value={mobile} className="form-control" id="mobilevalidate" placeholder="Enter mobile" required />
		      <div class="invalid-feedback">
		          Please enter correct mobile.
		      </div>
		      <div class="valid-feedback">
		          Looks Good!
		      </div>
		    </div>*/}
		    {/*<div className="col-md-4 mb-3">
		      <label htmlFor="numbervalidate">Enter Otp</label>
		      <input type="text" onChange={(e) => setOtp(e.target.value)} value={otp} className={[...dynamicClasses]} id="otpvalidate" placeholder="(From WhatsApp)" required />
		    	<div class="invalid-feedback">
		          Please enter correct otp.
		      </div>
		      <div class="valid-feedback">
		          Looks Good!
		      </div>
		    </div>
		  </div>*/}
		  <div className="form-row">
		    <div className="col-md-6 mb-3">
		      <label htmlFor="statevalidate">State</label>
		      	<select onChange={(e) => {setState(e.target.value); getCities(e.target.value)}} value={state} className="form-control custom-select" id="statevalidate" required>
				  {statedata.map((states)=>{
                		return (
							<option value={states.state_id} key={states.state_id}>{states.state_name}</option>   
                		)}
                	)}
				</select>
				
		    </div>
		    <div className="col-md-6 mb-3">
		      <label htmlFor="cityvalidate">City</label>
		      	<select onChange={(e) => setCity(e.target.value)} className="form-control custom-select" id="cityvalidate" required>
					<option>Select cities</option>
				  {citiesdata.map((cities)=>{
                		return (
							<option value={cities.district_id} key={cities.district_id}>{cities.district_name}</option>   
                		)}
                	)}
				</select>
				
		    </div>
		    {/*<div className="col-md-4 mb-3">
		      <label htmlFor="pincodevalidate">Pincode</label>
		      <input type="number" onChange={(e) => setPincode(e.target.value)} value={pincode} className="form-control" id="pincodevalidate" placeholder="Pincode" required />
		      
		    </div>*/}
		  </div>
		  <button className="btn btn-light bg-info" type="submit">Find slot</button>
		</form>
		<div className="alert alert-info">Slots will appear below (if available any)</div>
            		
		{!slotdata===null?
			slotdata.length===0
            ? (
            	<>
            	<div className="alert alert-danger">Sorry no slots available</div>
            	</>
        ):(
        <>
        <div class="card btn-green my-3">
			<div class="card-header bg-transparent border-dark">Slots available!</div>
				<div class="card-body">
					<h5 class="card-title">Total slots: {slotdata.length}</h5>
					<p class="card-text">Available slot counts may vary depending upon sessions available on each date</p>
				</div>
			<div class="card-footer bg-transparent border-dark">Last checked:{new Date().toString()}</div>
        </div>
        <div className="row">
		{slotdata.map((slots)=>{
            return (
            	slots.sessions.map((sessions)=>
            		sessions.available_capacity === 0?
            		(
            			<>
            			</>
            		)
            		:
            		(
            			<>
            			<div class="card col-6 bg-light my-3">
	            			<div class="card-header bg-dark text-white border-primary">New slot available!</div>
						    <div class="card-body">
							     	<h5 class="card-title">{slots.name}</h5>
							        <p class="card-text">
							        Address: {slots.address}
							        <br />
							        Pincode: {slots.pincode}
							        <br />
							        Fees: {slots.fee_type}
							        <br />
							        <br/>
							        Vaccination: {sessions.vaccine}
							        <br/>
							        Available capacity: {sessions.available_capacity}
							        <br/>
							        
							        </p>
							        <p className="highlighted">Age limit: {sessions.min_age_limit}</p>
							        
							        <a href="https://selfregistration.cowin.gov.in/" target="_blank" className="btn-sm btn btn-light bg-primary">Book Now</a>
						    </div>
						    <div class="card-footer btn-green border-primary">Slot Date: {sessions.date}</div>
						  </div>
				        </>
            		)
            	)  
             )}
		)}
		</div>
		</>
		):""}
		</div>
		</div>
		</div>
		</div>
        </>
    )
}

Vaccine.displayName = 'Vaccine';


export default Vaccine;
