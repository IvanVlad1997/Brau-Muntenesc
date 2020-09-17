import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Galerie.css'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom' 


const slideImages = [
  'https://scontent.fsbz1-1.fna.fbcdn.net/v/t1.0-9/75299787_542793166296140_5337260201227583488_o.jpg?_nc_cat=107&_nc_sid=9267fe&_nc_eui2=AeG28Wlo7qjZaDpM6M5ndxUZFgPvX4hxYW0WA-9fiHFhbdZcR3JUdky-o5m6EK_aP5U__pzlPJMOLCwcswuun9jg&_nc_ohc=Y7H0g2pRRmIAX_7jRc_&_nc_ht=scontent.fsbz1-1.fna&oh=fe86a0104bd756fbf38f1485c6b2742f&oe=5F67DDB2',
  'https://scontent.fsbz1-1.fna.fbcdn.net/v/t1.0-9/83931300_603493433559446_500448107566202880_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_eui2=AeGh2_Ek5l5FkAmwTfkT-137wkfohY9LwLfCR-iFj0vAt6vcyKLQBFTorrZ3SVI9rnnbRTVHi3BNVqqI9mJpvur9&_nc_ohc=BeKOgqEnkosAX9vBaqF&_nc_ht=scontent.fsbz1-1.fna&oh=8e9b435f006b860a6d197280f64e1eaf&oe=5F65A34A',
  'https://scontent.fsbz1-1.fna.fbcdn.net/v/t1.0-9/67416040_472091446699646_7286290882406383616_o.jpg?_nc_cat=107&_nc_sid=730e14&_nc_eui2=AeGmv5nYelGbrQhxt5w3W17l-I9Ob74Y1y34j05vvhjXLZ25DrWg5h9RO3dp8_bp7lV9q1Zeyu-1OIkLRubXyVKf&_nc_ohc=3GwF7lG24zgAX9Q3XTn&_nc_ht=scontent.fsbz1-1.fna&oh=c1beb01b9b7e1e1c9ec44e121a1b0af4&oe=5F66EBD1',

];
 
const Example = ({latime}) => {
  if (latime < 600)
    return (
      
        <Grid  centered >
     <Link  to ="/galerie">
        <LazyLoadImage   
          alt=''
          height= {200} 
          src=  ' https://firebasestorage.googleapis.com/v0/b/brau-muntenesc.appspot.com/o/Imagini%20adaugate%20manual%2FGalerie%20mic.webp?alt=media&token=954b78e6-afec-459e-92b3-cfcd7fbfd60d'
          width=  {250} />   
        </Link>
        </Grid>

      )
  else 
    return (
      <div  className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Example