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
        src = "https://scontent.fsbz1-2.fna.fbcdn.net/v/t1.0-9/118373902_3235592099882137_205267020802511911_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_eui2=AeGaGmhKqoRYFCgEp1av1CPB8TT48r2zOI3xNPjyvbM4jUpzWV-aJubGaFW8AUmhkNdwvSsWxnL2K-Ojh9jTctcv&_nc_ohc=NfecbCqDsW8AX8gOLTI&_nc_ht=scontent.fsbz1-2.fna&oh=fa2ee24eee021f46e8ba99ef2bf6e74c&oe=5F65BDE2"
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
        src = "https://scontent.fsbz1-2.fna.fbcdn.net/v/t1.0-9/118268792_3235592326548781_5766471555314547545_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_eui2=AeH0g9VeNtu20nz3Yxdaok6Bl_8mIMh_2xSX_yYgyH_bFCM2xhAI21TX0Lop2ycv8cRem6kgF1tNN5slxmzmwOcV&_nc_ohc=eOf3A28nNl8AX-b_oZm&_nc_ht=scontent.fsbz1-2.fna&oh=33c81288cc838021f1445b3b8c18b2b7&oe=5F674E32"
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
