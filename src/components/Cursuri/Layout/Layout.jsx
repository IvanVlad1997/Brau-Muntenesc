import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';
import {  Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import {connect} from "react-redux";
import {toggleSideBar} from "../../../redux/side-nav/side-nav-actions";
import {Link} from "react-router-dom";

function Layout(props) {
    return(
        <div className="body">
            <div className="layout" >
                <Sidebar.Pushable as={Segment} style={{border:0, transform:"none"}}>
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
                                <Menu.Item >
                                    <Icon name='home' />
                                     Acasă
                                </Menu.Item>
                            </Link>
                            <Link to={"/Cursuri"} >
                                <Menu.Item>
                                    <Icon name='home' />
                                    Cursuri
                                </Menu.Item>
                            </Link>
                            <Link to={"/galerie"} >
                                <Menu.Item>
                                    <Icon name='images' />
                                    Galerie Foto
                                </Menu.Item>
                            </Link>
                            <Link to={"/galerievideo"} >
                                <Menu.Item>
                                    <Icon name='film' />
                                    Galerie video
                                </Menu.Item>
                            </Link>
                            <Link to={"/vlog"} >
                                <Menu.Item>
                                    <Icon name='youtube square' />
                                    Vlog
                                </Menu.Item>
                            </Link>
                            <Link to={"/contact"} >
                                <Menu.Item>
                                    <Icon name='phone' />
                                    Contact
                                </Menu.Item>
                            </Link>
                            <Link to={"/preturi"} >
                                <Menu.Item>
                                    <Icon name='payment' />
                                    Prețuri
                                </Menu.Item>
                            </Link>
                            <Link to={"/program"} >
                                <Menu.Item>
                                    <Icon name='calendar alternate outline' />
                                    Program
                                </Menu.Item>
                            </Link>
                            <Link to={"/partenerimedia"} >
                                <Menu.Item>
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
                    <Sidebar.Pusher>
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
        sideNav: state.sideNav
    }
}

export default connect(mapStateToProps,{toggleSideBar})(Layout);

