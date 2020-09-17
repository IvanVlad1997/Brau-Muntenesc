import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const Cardu = (props) => (
   
    <Card
    color ="red" >
      <Card.Content >
      <Card.Header textAlign="right" >
      <Icon  corner ="top right"
          color="red"
          size='large'
          name = {props.name}
          
        />
      </Card.Header>
        <Card.Header textAlign="center"   >
        {props.titlu}
      
      
         
        
          </Card.Header>
          
        
        <Card.Description>
        {props.descriere}     
        </Card.Description>
      </Card.Content>
      
    </Card>
   
    
)

export default Cardu;
