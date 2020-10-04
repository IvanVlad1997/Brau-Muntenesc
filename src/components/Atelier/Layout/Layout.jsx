import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

function Layout(props) {
    return(
        <div className="body">
        <div className="layout" >
            <Header />
   
                { props.children }
             
            <Footer />
        </div>
        </div>
    );
}

export default Layout;