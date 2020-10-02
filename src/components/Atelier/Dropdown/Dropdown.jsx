import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';


const DropdownExampleHeader = (props) => (
  <Menu inverted>
  <Dropdown
    icon='circle'
    floating
    button
    className='icon'
    
  >
    <Dropdown.Menu>
    <Link className="ui  black button  fluid" to = "/"><Dropdown.Item>Brâu Muntenesc</Dropdown.Item></Link>
 
      
      <Link className="ui black button  fluid" to = "/atelier"><Dropdown.Item>Home</Dropdown.Item></Link>
      {
           props.auth.email === "braumuntenesc@gmail.com"
           ? 
           <Link className="ui black button   fluid" to = "/atelierAdminPanel"><Dropdown.Item>Admin panel</Dropdown.Item></Link>
        : null
        
        }

    </Dropdown.Menu>
  </Dropdown>
  </Menu>
)

const mapStateToProps = (state) => {
  return {
     auth: state.auth
  }
}



export default connect(mapStateToProps)(DropdownExampleHeader)