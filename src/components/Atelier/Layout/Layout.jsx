import React from 'react';
import Header from '../Header/Header';
import Footer from '../../../common/Footer/Footer';
import './Layout.css';
import {  Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
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
                            <Link to={"/Atelier"} >
                                <Menu.Item  onClick={() => props.toggleSideBar()}>
                                    <Icon name='certificate' />
                                    Atelier
                                </Menu.Item>
                            </Link>
                            <Link to={"/category/kikCgcLMzpM5bEpHLhjJ"} >
                                <Menu.Item  onClick={() => props.toggleSideBar()}>
                                    <Icon name='star' />
                                    Ii damă
                                </Menu.Item>
                            </Link>
                            <Link to={"/CumCumpar"} >
                                <Menu.Item  onClick={() => props.toggleSideBar()}>
                                    <Icon name='question circle' />
                                    Cum Cumpăr
                                </Menu.Item>
                            </Link>
                            { props.auth.email === 'braumuntenesc@gmail.com' ?
                                <React.Fragment>
                                    <Link to={"/newCategory"}>
                                        <Menu.Item onClick={() => props.toggleSideBar()}>
                                            <Icon name='certificate'/>
                                            New Category
                                        </Menu.Item>
                                    </Link>
                                    <Link to={"/newProduct"} >
                                    <Menu.Item  onClick={() => props.toggleSideBar()}>
                                    <Icon name='certificate' />
                                        New Product
                                    </Menu.Item>
                                    </Link>
                                </React.Fragment>
                                :
                                null
                            }
                            {/*<Link to={"/Atelier"} >*/}
                            {/*    <Menu.Item  onClick={() => props.toggleSideBar()}>*/}
                            {/*        <Icon name='certificate' />*/}
                            {/*        Atelier*/}
                            {/*    </Menu.Item>*/}
                            {/*</Link>*/}
                        </Sidebar>
                    <Sidebar.Pusher style = {{paddingBottom:"25px"}}>
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

