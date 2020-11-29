import React from 'react'
import ReactPlayer from 'react-player'
import '../UrmaresteVlogul/Urmareste.css'
const EmbedExampleIframe = (props) => {
    return (
          <div className= 'player-wrapper'>
                  <ReactPlayer
                  className='react-player'
                  url={props.link}
                  width='100%'
                  height='100%'
                  playing={props.play}
                  controls ={true}
                  muted ={true}
                  loop = {true}
                />
            </div>
    )
}

export default EmbedExampleIframe