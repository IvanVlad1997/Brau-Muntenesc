import React from 'react'
import { Button, Menu} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {logoutUser} from '../../../redux/actions/AuthActions'
import TextHeader from './TextHeader'

class Header extends React.Component {



    render(){
      
    if (this.props.auth.uid){
    if (this.props.auth.email ==="braumuntenesc@gmail.com") {
            return(
                <div>
                    <Menu inverted color="black">
                    <Menu.Item>
                 
                    <TextHeader titlu = "Brâu Muntenesc" />
                    
                    </Menu.Item>
                    <Menu.Item position='right'>
                    <Link to={"/PanouCursanti"} >
                        <Button color="red">Panou Cursanti</Button>
                    </Link>
                      
                    </Menu.Item>
                    <Menu.Item >
                    <Button onClick = {()=> this.props.logoutUser()}  color="red">Log Out</Button>
                  </Menu.Item>
                    </Menu>
                </div>
            )
    }
    else return(
        <Menu inverted color="black">
            <Menu.Item>
            
          <TextHeader titlu = "Brâu Muntenesc" />
          
        </Menu.Item>
          <Menu.Item position='right'>
            
            <Button onClick = {()=> this.props.logoutUser()}  color="red">Log Out</Button>
            </Menu.Item>
            <Menu.Item>
           <Link to ={`/user/${this.props.auth.uid}`} >
                        <Button color="red">Profil</Button>
           </Link>
          </Menu.Item>
        </Menu>
      
       
      )

    } 
   else {
      return (
        <Menu inverted color="black" >
        <Menu.Item>
    
          <TextHeader titlu = "Brâu Muntenesc" />
          
        </Menu.Item>
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
