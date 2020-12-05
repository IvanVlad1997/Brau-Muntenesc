import React from 'react'
import {Header, Icon, Responsive} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const TextHeader = (props) => {
  
    return (
        
        <React.Fragment>
            <Responsive  minWidth={600}>
           <Link to = {"/"}>
            <Header inverted 
                textAlign= "center"
                size="huge">{props.titlu}</Header>
            </Link>   
            </Responsive>      
            <Responsive  maxWidth={580}>
           <Link to = {"/"}>
            <Header inverted 
                textAlign= "center"
                size='tiny'><Icon name="home"></Icon></Header>
            </Link>   
            </Responsive>       
         </React.Fragment>
       
    )
}

export default TextHeader;