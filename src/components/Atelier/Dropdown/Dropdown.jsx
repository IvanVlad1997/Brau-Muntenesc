import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const DropdownExampleHeader = () => (
  <Dropdown
    text='Menu'
    icon='circle'
    floating
    labeled
    button
    className='icon'
  >
    <Dropdown.Menu>
    <Link className="ui button  fluid" to = "/"><Dropdown.Item>Brâu Muntenesc</Dropdown.Item></Link>
 
      
      <Link className="ui button  fluid" to = "/atelier"><Dropdown.Item>Home</Dropdown.Item></Link>
      {
           this.props.auth.email === "braumuntenesc@gmail.com"
           ? 
           <Link className="ui button   fluid" to = "/atelierAdminPanel"><Dropdown.Item>Admin panel</Dropdown.Item></Link>
        : null
        
        }

    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleHeader