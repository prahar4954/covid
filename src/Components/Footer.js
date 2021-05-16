import React from 'react';
import PropTypes from 'prop-types'

const Footer = ({ title }) => {
	let footerstyle = {
		// background: "rgba(0, 0, 0, 1)",
		position:"fixed",
		boxShadow:"0 -2px 2px 0 rgb(0 0 0 / 14%), 0 -3px 1px -2px rgb(0 0 0 / 20%), 0 -1px 5px 0 rgb(0 0 0 / 12%)",
		width:"100%",
		bottom:"0vh",
		// borderTop:"1px solid red",
	}
    return (
		<footer className="page-footer font-small bg-light" style={footerstyle}>
		  <div className="footer-copyright text-center py-3">© 2021 Copyright: 
		    <a href="https://in.linkedin.com/in/praharpandya"> Prahar Pandya </a>
		  </div>
		</footer>
    );
};

Footer.displayName = 'Footer';

Footer.propTypes = {
    title: PropTypes.string
};

export default Footer;
