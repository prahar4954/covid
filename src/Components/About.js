import React from 'react';
import './CovidTracker.css';

export const About = () => {
    return (
    	<>
        <div className="container">
        	<h2 className="text-center covid-text" >About</h2>
        	<div className="row justify-content-md-center">
        		<div className="card aboutcard col-md-3 col-sm-12">
        			{/*<div class="card-header bg-transparent border-dark">Prahar Pandya</div>*/}
				  <img className="w-100 card-img-top" src="https://media-exp1.licdn.com/dms/image/C5603AQEvrU1H-xtNWw/profile-displayphoto-shrink_200_200/0/1568386229797?e=1626307200&v=beta&t=KpoKXkK9vLcfn1-jRud7vRG4g28os-X95yHdSdUfy6w" alt="Card image cap" />
				  <div className="card-body">
				  <h5 class="card-title">Prahar Pandya</h5>
				    <p class="card-text">Teaching Assistant at Dhirubhai Ambani Institute of Information and Communication Technology</p>
				  </div>
				</div>
				<div className="card col-md-9 col-sm-12">
        			{/*<div class="card-header bg-transparent border-dark">Prahar Pandya</div>*/}
				  <div className="card-body">
				    <div class="inline-show-more-text mt4 t-14">
    					•A Full Stack Programmer having 2 years hands on experience with a background Computer Science and Engineering (CSE), worked in all phases of Software Development life cycle.<br />•Hands on Experience in Progressive Application Development using Service Workers &amp; Indexed DB.<br />•Good working Experience in client-side development with HTML, XHTML, CSS, SVG, TypeScipt, React, Node, JavaScript, jQuery, Firebase and AJAX <br />•Involved in Design, development and testing of web application and integration projects using JSP, PHP, Laravel, CodeIgniter, C#.NET, Servlets, Django &amp; Web Services like REST/SOAP, XML.<br />•Expertise in Core Java concepts - Collection Framework, Exception Handling, IO, Serialization, Multi-threading, Concurrency etc.<br />•Excellent knowledge of NOSQL on Mongo DB. Extensively worked on coding using core java concepts like Multithreading, Collections, generics, Network APIs and Database connections.<br />•Experience in using various Web and Application Servers like Apache Tomcat, IBM -Web Sphere process server.<br />•Hands on Experience in managing Website Hosting with SSL, SEO optimization, SMS services, DNS error solving &amp; Backup activities<br />•Live Publishing Experience in Godaddy, Hostinger, HioxIndia, Google Play Console 
  						</div>
  						<div className="row">
				        <a href="#" class="btn btn-danger">Visit Profile</a>
				        </div>
				  </div>
				</div>

        		
            </div>
             
        </div>
        </>
    )
}
