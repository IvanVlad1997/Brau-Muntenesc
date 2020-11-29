import React from 'react'
import {Button, Icon, Menu} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {logoutUser} from '../../../redux/actions/AuthActions'
import TextHeader from '../ComponenteCursuri/TextHeader/TextHeader'
import {toggleSideBar} from "../../../redux/side-nav/side-nav-actions";

class Header extends React.Component {

    render(){
        return(
            <Menu inverted color="black">
                <Menu.Item onClick={() =>this.props.toggleSideBar()}>
                    <Icon name='list ul' />
                </Menu.Item>

                <Menu.Item>
                    <TextHeader titlu = "Brâu Muntenesc" />
                </Menu.Item>
                {
                    this.props.auth.uid ?
                        this.props.auth.email === "braumuntenesc@gmail.com" ?
                            <React.Fragment>
                                <Menu.Item position='right'>
                                    <Link to={"/PanouCursanti"} >
                                        <Button color="red">Panou Cursanti</Button>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item >
                                    <Button onClick = {()=> this.props.logoutUser()}  color="red">Log Out</Button>
                                </Menu.Item>
                            </React.Fragment>
                            :
                            <Menu.Item position='right'>
                                <Button onClick = {()=> this.props.logoutUser()}  color="red">Log Out</Button>
                            </Menu.Item>
                        :
                        <React.Fragment>
                            <Menu.Item position='right'>
                                <Link to={"/signup"} >
                                     <Button color="red">Sign up</Button>
                                </Link>
                            </Menu.Item>
                            <Menu.Item >
                                <Link to={"/signin"} >
                                    <Button color="red">Sign in</Button>
                                </Link>
                            </Menu.Item>
                        </React.Fragment>
                }
            </Menu>
            )
        }
    }

const mapStateToProps = (state) =>{
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, {logoutUser, toggleSideBar})(Header)
