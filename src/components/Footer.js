import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isSubPage = location.pathname !== '/';

    return (
        <footer className={`footer py-3 bg-f7e6ff text-b0058b shadow-lg ${isSubPage ? 'fixed-bottom' : ''}`}>
            <div className="container">
                <div className="row justify-content-between align-items-center"> 
                    <div className="col text-left">
                        <p>&copy; {new Date().getFullYear()} Spark Creative | Made with <span role="img" aria-label="heart">❤️</span> by <b>iim7md11</b></p>
                    </div>
                    <div className="col-auto text-right"> 
                        <a href="/terms-of-service" className="text-b0058b" style={{ color: '#b0058b', textDecoration: 'none' }}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
