import React from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const GridExampleOnly = () => (
  <Grid className="center aligned " style = {{paddingTop: 100}} stackable columns={1}>
   
    <Grid.Row columns={2} >
    
      <Grid.Column >
        <Link to = "/contact" >
      <Segment inverted color = "red">
        <Button color="red" fluid>Contactează-ne</Button>
        </Segment>
        </Link>
      </Grid.Column>
      <Grid.Column>
      <Link to = "/locatie" >
      <Segment inverted color = "red">
        <Button color="red" fluid>Locație</Button>
        </Segment>
        </Link>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2} style = {{paddingTop: 20}}>
    
      <Grid.Column >
      <Link to = "/galerie" >
      <Segment inverted color = "red">
        <Button color="red" fluid>Galerie Foto</Button>
        </Segment>
        </Link>
      </Grid.Column>
      <Grid.Column>
      <Link to = "/galerievideo" >
      <Segment inverted color = "red">
        <Button color="red" fluid>Galerie Video</Button>
        </Segment>
      </Link>
      </Grid.Column>
      
    </Grid.Row>

  </Grid>
)

export default GridExampleOnly
