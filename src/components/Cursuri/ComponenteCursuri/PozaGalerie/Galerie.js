import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import './Galerie.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
 
const Example = ({latime}) => {
    if (latime<850){
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
    } else {
        return(
            <Grid  centered >
                <Link  to ="/galerie">
                    <LazyLoadImage
                        alt=''
                        height= {500}
                        src=  ' https://firebasestorage.googleapis.com/v0/b/brau-muntenesc.appspot.com/o/Imagini%20adaugate%20manual%2FGalerie%20mic.webp?alt=media&token=954b78e6-afec-459e-92b3-cfcd7fbfd60d'
                        width=  {650} />
                </Link>
            </Grid>
        )
    }
}

export default Example