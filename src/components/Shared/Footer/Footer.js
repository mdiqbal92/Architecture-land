import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "There are many variations of as the passages Lorem Ipsum that and available majority."},
        
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const featured = [
        {name: "Architecture Portfolio" , link: "/design"},
        {name: "Interior Design" , link: "/design"},
        {name: "Interior Design" , link: "/design"},
        {name: "Architecture Planning" , link: "/personal-design"},
        {name: "Architecture Planning" , link: "/personal-design"},
        
    ]
    const services = [
        {name: "Design" , link: "/design"},
        {name: "Drawing" , link: "/dewing"},
        {name: "3D Modeling" , link: "/3dModeling"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Arch-Land"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Featured Service" menuItems={featured}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Talk now</h6>
                            <button className="btn btn-brand">01676781093</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;