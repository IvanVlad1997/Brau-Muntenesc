import React from 'react'
import {
  Divider,
  Grid,
  Header,
  Segment,
  Image
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SegmentExamplePlaceholderGrid = () => (
  <Segment placeholder inverted color ="black">
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical></Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
        <Image 
        circular
        verticalAlign='middle'
        src = "https://i.imgur.com/o5CucA9.jpg"
        size = "medium" />
          <Header  color="red">
            Ivan Vlad Gabriel
          </Header>
          <Link className= "ui button red" to  ={{pathname: "https://www.facebook.com/vlad.ivan.33/" }} target="_blank" >Cunoaște-l mai bine</Link>
        </Grid.Column>

        <Grid.Column>
        <Image 
        circular
        verticalAlign='middle'
        src = "https://i.imgur.com/NPTKj5Q.jpg"
        size = "medium" />
          <Header color="red">           
            Vulpe Andreea Georgiana
          </Header>
          <Link className= "ui button red" to  ={{pathname: "https://www.facebook.com/andreeavulpe.i" }} target="_blank" >Cunoaște-o mai bine</Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default SegmentExamplePlaceholderGrid
