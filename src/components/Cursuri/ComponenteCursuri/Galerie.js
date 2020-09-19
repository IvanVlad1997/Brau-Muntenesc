import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Galerie.css'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom' 


const slideImages = [
  'https://scontent.fotp1-2.fna.fbcdn.net/v/t1.0-9/68747776_484649888777135_6339858992935731200_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_ohc=VKG1jvn3anIAX9p0hL4&_nc_ht=scontent.fotp1-2.fna&oh=e559a63306fd957a0b43554dedbc3a72&oe=5F8A1270',
  'https://i.imgur.com/mhxCTMS.jpg',
  'https://scontent.fotp1-1.fna.fbcdn.net/v/t1.0-0/p180x540/118504693_741697366405718_1601272859958828165_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=JDpgmLLmmK8AX_AyC4Q&_nc_ht=scontent.fotp1-1.fna&tp=6&oh=e100151488e5093b0280b59911de372e&oe=5F8B6845',
  

];
 
const Example = ({latime}) => {
  if (latime < 1200)
    return (
      
        <Grid  centered >
     <Link  to ="/galerie">
        <LazyLoadImage   
          alt=''
          height= {300} 
          src=  ' https://firebasestorage.googleapis.com/v0/b/brau-muntenesc.appspot.com/o/Imagini%20adaugate%20manual%2FGalerie%20mic.webp?alt=media&token=954b78e6-afec-459e-92b3-cfcd7fbfd60d'
          width=  {350} />   
        </Link>
        </Grid>

      )
  else 
    return (
      <div  className="slide-container">
        <Slide>
          <div className="each-slide"  >
            <div style={{height:600,'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
          </div>
          <div className="each-slide" >
            <div style={{height:600,'backgroundImage': `url(${slideImages[1]})`}}>
              
            </div>
          </div>
          <div className="each-slide" >
            <div style={{height:600,'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Example