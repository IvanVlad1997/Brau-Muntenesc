import React from 'react'
import { Grid, Header , Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import './Urmareste.css'

const Urmareste = ({latime}) => {
  const YT = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=8snx63yPpBs'
            width='100%'
            height='100%'
          />
        </div>
      )
    }
  if (latime <800) {
      return (
          <Grid style={{paddingTop: 100, paddingBottom: 100}}>
              <Grid.Row>
                  <Grid.Column className="center aligned middle aligned">
                      <Link to="/vlog">
                          <Icon size='big' name='video camera' color="red"/>
                          <Header as='h2' content='Urmărește-ne Vlogul'/>
                      </Link>
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column>
                      {YT()}
                  </Grid.Column>
              </Grid.Row>
          </Grid>
      )
  }  else {
      return (
          <Grid style={{paddingTop: 100, paddingBottom: 100}}>
              <Grid.Column width={9}>
                  {YT()}
              </Grid.Column>
              <Grid.Column width={7} className="center aligned middle aligned">
                  <Link to="/vlog">
                      <Icon size='big' name='video camera' color="red"/>
                      <Header as='h2' content='Urmărește-ne Vlogul'/>
                  </Link>
              </Grid.Column>
          </Grid>
      )
  }
}

export default Urmareste
