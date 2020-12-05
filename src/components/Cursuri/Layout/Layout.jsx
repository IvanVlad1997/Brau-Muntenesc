import React from 'react';
import Header from '../Header/Header';
import Footer from '../../../common/Footer/Footer'
import './Layout.css';
import {Icon, Menu, Segment, Sidebar} from 'semantic-ui-react'
import {connect} from "react-redux";
import {toggleSideBar} from "../../../redux/side-nav/side-nav-actions";
import {Link} from "react-router-dom";

function Layout(props) {
    return(
        <div className="body">
            <div className="layout" >
                <Sidebar.Pushable as={Segment} style={{border:0, transform:"none", margin:0}}>
                        <Sidebar
                            as={Menu}
                            animation='overlay'
                            icon='labeled'
                            inverted
                            vertical
                            visible={props.sideNav.visible}
                            width='wide'
                        >
                            <Link>
                                <Menu.Item onClick={() => props.toggleSideBar() }>
                                    <Icon name='angle left' />
                                </Menu.Item>
                            </Link>
                            <Link to={"/"} >
                                <Menu.Item onClick={() => props.toggleSideBar()}>
                                    <Icon name='home' />
                                     Acasă
                                </Menu.Item>
                            </Link>
                            <Link to={"/Cursuri"} >
                                <Menu.Item  onClick={() => props.toggleSideBar()}>
                                    <Icon name='certificate' />
                                    Cursuri
                                </Menu.Item>
                            </Link>
                            {  props.auth.email === 'braumuntenesc@gmail.com' ?
                                <Link to={"/PanouCursanti"}>
                                    <Menu.Item onClick={() => props.toggleSideBar()}>
                                        <Icon name='certificate'/>
                                        Panou Cursanti
                                    </Menu.Item>
                                </Link>
                                :
                                null
                            }
                            <Link to={"/galerie"} >
                                <Menu.Item onClick={() => props.toggleSideBar()}>
                                    <Icon name='images' />
                                    Galerie Foto
                                </Menu.Item>
                            </Link>
                            <Link to={"/galerievideo"} >
                                <Menu.Item onClick={() => props.toggleSideBar()}>
                                    <Icon name='film' />
                                    Galerie video
                                </Menu.Item>
                            </Link>
                            <Link to={"/vlog"} >
                                <Menu.Item onClick={() => props.toggleSideBar()}>
                                    <Icon name='youtube square' />
                                    Vlog
                                </Menu.Item>
                            </Link>
                            <Link to={"/contact"} >
                                <Menu.Item onClick={() => props.toggleSideBar()}>
                                    <Icon name='phone' />
                                    Contact
                                </Menu.Item>
                            </Link>
                            <Link to={"/preturi"} >
                                <Menu.Item onClick={() => props.toggleSideBar()}>
                                    <Icon name='payment' />
                                    Prețuri
                                </Menu.Item>
                            </Link>
                            <Link to={"/program"} >
                                <Menu.Item onClick={() => props.toggleSideBar()}>
                                    <Icon name='calendar alternate outline' />
                                    Program
                                </Menu.Item>
                            </Link>
                            <Link to={"/partenerimedia"} >
                                <Menu.Item onClick={() => props.toggleSideBar()}>
                                    <Icon name='newspaper outline' />
                                    Parteneri media
                                </Menu.Item>
                            </Link>
                            <Link>
                                <Menu.Item onClick={() => props.toggleSideBar() }>
                                    <Icon name='angle left' />
                                </Menu.Item>
                            </Link>
                        </Sidebar>
                    <Sidebar.Pusher style = {{paddingBottom:"25px", minHeight:"60vh"}}>
                                    <Header/>
                                    { props.children }
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                <Footer />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        sideNav: state.sideNav,
        auth: state.auth
    }
}

export default connect(mapStateToProps,{toggleSideBar})(Layout);

