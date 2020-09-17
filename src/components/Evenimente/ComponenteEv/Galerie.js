import React from 'react';
import { Container, Grid,} from 'semantic-ui-react'
import EmbededYT from '../../Cursuri/ComponenteCursuri/EmbededYt'
import Titlu from '../../Cursuri/ComponenteCursuri/Titlu'
import {Link} from 'react-router-dom'

class GalerieVideoEvenimente extends React.Component {

    render() {
    return (
      <Container style = {{paddingTop: 100, paddingBottom: 100}}>
        <Grid columns='equal' className="center aligned" style = {{paddingTop: 35}} >
        <Link to ="galerieevenimente">
        <Grid.Row>
                   <Titlu latime = {this.props.latime} color="teal" titlu="Galerie Video" />
             </Grid.Row>
             </Link>          
          <Grid.Row>
              
            <Grid.Column stretched>
          <EmbededYT link='https://www.facebook.com/431374907437967/videos/564046331014627/' play={false} /> 
          </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2} >
           
             
              
          </Grid.Row>
          
        </Grid>
    
           
         
        

           
          </Container>
    )
    }
}




export default (GalerieVideoEvenimente)