import React from 'react'
import {Grid} from 'semantic-ui-react'
import YTVID from '../../Cursuri/ComponenteCursuri/IntroYTVideo/EmbededYt'
import Titlu from '../../Cursuri/ComponenteCursuri/AlteTitluri/Titlu'

const DespreNoi = ({latime}) => {

 
    return (
        <Grid centered>
             <Grid.Row>
                   <Titlu latime={latime} color="teal" titlu="Dansuri populare la evenimentul tău!" style={{fontSize:30}} />
             </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                         <YTVID link ='https://www.youtube.com/watch?v=ncA6-WTK1v8' play={true} />
                  </Grid.Column>
            </Grid.Row>

            
            
        </Grid>
    )
  

}

export default DespreNoi