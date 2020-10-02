import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import Menu from '../Menu/Menu'
import Dropdown from '../Dropdown/Dropdown'

const Header = (props) => {
    if (props.dimensiuni.width >600) return (
        <React.Fragment>
        <Menu />
       
        </React.Fragment>
    )
    return (
        
        <Dropdown />
        )
}

const mapStateToProps = (state) => {
    return {
       dimensiuni: state.dimensiuni
    }
}


export default connect(mapStateToProps)(Header);