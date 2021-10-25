import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div>
		<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Genius<span>Mechanics</span></h3>

				<p class="footer-links">
					<Link to="/home">Home</Link>
					·
					<Link to="/home">Services</Link>
					·
					<Link to="/home">Experts</Link>
					·
					<Link to="/home">About</Link>
					·					
					<Link to="/home">Contact</Link>
				</p>

				<p class="footer-company-name">Genius &copy; 2021</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Dinajpur rajarampur</span> Dinajpur, Bangladesh</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+8801555125696</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><Link to="/home">contact@genius.com</Link></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repellat dicta sit et odio rerum.
				</p>

				<div class="footer-icons">

					<Link to="/home"><i class="fa fa-facebook"></i></Link>
					<Link to="/home"><i class="fa fa-twitter"></i></Link>
					<Link to="/home"><i class="fa fa-linkedin"></i></Link>
					<Link to="/home"><i class="fa fa-github"></i></Link>
                    

				</div>

			</div>

		</footer>
        </div>
    );
};

export default Footer;