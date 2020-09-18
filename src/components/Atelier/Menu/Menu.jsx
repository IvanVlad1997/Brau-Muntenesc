import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

 class MenuExampleInverted extends Component {
    constructor(props) {
        super(props)
    }
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Link to ="/">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        </Link>
       
       
        {
           this.props.auth.email === "braumuntenesc@gmail.com"
           ? 
           <Link to ="/atelierAdminPanel">
           <Menu.Item
           name='AdminPanel'
           active={activeItem === 'AdminPanel'}
           onClick={this.handleItemClick}
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