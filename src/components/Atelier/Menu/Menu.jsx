import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

 class MenuExampleInverted extends Component {
  
 

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
   

    return (
      <Menu inverted>
         <Link  to ="/"><Menu.Item  name='Brâu Muntenesc' /> </Link>
         <Link  to ="/atelier"><Menu.Item  name='home' /> </Link>
        
      
       
         {
           this.props.auth.email === "braumuntenesc@gmail.com"
           ? 
           <Link to ="/atelierAdminPanel">
           <Menu.Item
           name='AdminPanel'
             />           
          </Link>
        : null
        
        }
       
       
      </Menu>
    )
  }
}


const mapStateToProps = (state) => {
    return {
       auth: state.auth
    }
}


export default connect(mapStateToProps)(MenuExampleInverted)