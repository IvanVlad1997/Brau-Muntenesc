import React from 'react'
import {Header} from 'semantic-ui-react'

const Titlu = ({latime, titlu, color}) => {
    if (latime < 600) 
    
    return (
        
              
            <Header  
                style = {{paddingTop: 100, paddingBottom: 70, fontSize: 15}}
                color = {color}
                textAlign= "center"
                size=  "huge">{titlu}</Header>
                          
        
       
    )

    else
    return (
        
              
        <Header  
            style = {{paddingTop: 150, paddingBottom: 150, fontSize: 40}}
            color = {color}
            textAlign= "center"
            size=  "huge">{titlu}</Header>
                      
    
   
)
}

export default Titlu;