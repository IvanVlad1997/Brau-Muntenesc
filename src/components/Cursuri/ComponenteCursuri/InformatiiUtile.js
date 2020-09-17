import React from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const square = { width: 200, height: 200 }

const Inf = () => (
  <Grid  textAlign="center" stackable columns={2}>
    
    
     
      <Grid.Column >
            <Link to = "/preturi">
            <Segment circular style={square} inverted color="red">
            <Header as='h2'>
                Prețuri
                <Header.Subheader></Header.Subheader>
            </Header>
            </Segment>
            </Link>
      </Grid.Column>
     
      <Grid.Column  >
        <Link to = "/program">
                <Segment circular inverted style={square} >
                <Header as='h2' >
                    Program
                <Header.Subheader></Header.Subheader>
                </Header>
                </Segment>
        </Link>
      </Grid.Column>
     
   
 
  </Grid>
)


export default Inf