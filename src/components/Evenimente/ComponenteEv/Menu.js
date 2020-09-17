import React from 'react'
import { Button, Menu} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {logoutUser} from '../../../redux/actions/AuthActions'
import TextHeader from '../../Cursuri/ComponenteCursuri/TextHeader'

class Header extends React.Component {



    render(){
      
    if (this.props.auth.uid){
        return(
        <Menu inverted color="blue">
            <Menu.Item>
            
          <TextHeader titlu = "Brâu Muntenesc" />
          
        </Menu.Item>
          <Menu.Item position='right'>
            
            <Button onClick = {()=> this.props.logoutUser()}  color='teal'>Log Out</Button>
            </Menu.Item>
            <Menu.Item>
           {/* <Link to ={`/user/${this.props.auth.uid}`} >
                        <Button color="red">Profil</Button>
           </Link> */}
          </Menu.Item>
        </Menu>
      
       
      )

    } 
   else {
      return (
        <Menu inverted color="blue" >
        <Menu.Item>
    
          <TextHeader titlu = "Brâu Muntenesc" />
          
        </Menu.Item>
        <Menu.Item position='right'>
        <Link to={"/signup"} >
               <Button color="teal">Sign up</Button>
            </Link>
        </Menu.Item>
    
        <Menu.Item >
            <Link to={"/signin"} >
               <Button color="teal">Sign in</Button>
            </Link>
                
                    
        </Menu.Item>
      </Menu>
      )
  }
 
}
}

const mapStateToProps = (state) =>{
    return {
        auth: state.auth

    }
}
export default connect(mapStateToProps, {logoutUser})(Header)
