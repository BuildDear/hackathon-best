import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './navbar/navbar.jsx';
import Footer from './footer/footer.jsx';

function Layout({ children }) {
    const location = useLocation();
    const hideOnPaths = ['/Login', '/Register'];
    const shouldHide = hideOnPaths.includes(location.pathname);

    return (
        <div>
            {!shouldHide && <NavBar />}
            {children}
            {!shouldHide && <Footer />}
        </div>
    );
}

export default Layout;
