import React from 'react'
import {Header} from 'semantic-ui-react'


const TextCursuri = ({latime}) => {
    if (latime < 600) 
    return(
        <React.Fragment>
                                            <Header   
                                                style = {{paddingTop: 20, fontSize:20}}
                                                color = "black"
                                                textAlign= "center"
                                                size='huge'> Cursuri de dansuri populare în Ploiești
                                            </Header>
                                            <Header  
                                                style = {{paddingTop: 20, paddingBottom: 50, fontSize:15}}
                                                color = "red"
                                                textAlign= "center"
                                                size='huge'>Hai la Brâu!
                                            </Header>
         </React.Fragment>
    )
    else
    return(
        <React.Fragment>
                                            <Header   
                                                style = {{paddingTop: 80, fontSize:50}}
                                                color = "black"
                                                textAlign= "center"
                                                size='huge'> Cursuri de dansuri populare în Ploiești
                                            </Header>
                                            <Header  
                                                style = {{paddingTop: 80, paddingBottom: 80, fontSize:45}}
                                                color = "red"
                                                textAlign= "center"
                                                size='huge'>Hai la Brâu!
                                            </Header>
         </React.Fragment>
    )
}

export default TextCursuri