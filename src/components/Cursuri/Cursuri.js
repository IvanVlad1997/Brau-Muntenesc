import React, {createRef} from 'react'
import Menu from '../Cursuri/ComponenteCursuri/Header'
import YTVID from '../Cursuri/ComponenteCursuri/EmbededYt'
import Titlu from '../Cursuri/ComponenteCursuri/Titlu'
import Abureli from '../Cursuri/ComponenteCursuri/Abureli'
import SegmentExamplePlaceholderGrid from '../Cursuri/ComponenteCursuri/IntalnesteInstructorii'
import Inf from '../Cursuri/ComponenteCursuri/InformatiiUtile'
import Urmareste from '../Cursuri/ComponenteCursuri/UrmaresteVlog'
import GridExampleOnly from '../Cursuri/ComponenteCursuri/ButoaneFinal'
import { Grid, Button} from 'semantic-ui-react'
import Example from '../Cursuri/ComponenteCursuri/Galerie'
import {Link} from 'react-router-dom'
import {Sticky, StickyContainer} from 'react-sticky'
import DropDown from './ComponenteCursuri/Dropdown'
import {connect} from 'react-redux'
import TextCursuri from './ComponenteCursuri/TextCursuri'

class Cursuri extends React.Component {
    
    contextRef = createRef()
    render() {
     
       
        return(
            <React.Fragment>
               
               
               <Grid centered textAlign="center">
               <Grid.Row >    
{/* MENU */}
                <Grid.Column width={16} style={{paddingRight:0}}>
                    <Menu />
                </Grid.Column>                                 
                </Grid.Row>                              
                </Grid>
               <StickyContainer> 


                            <Grid  >
                                <Grid.Row>
                                    
                                    <Grid.Column width={2}>
                                     
                                    <Sticky>
                                        {({ style  }) => <h1 style={style}>
                                        <Button.Group vertical  >
                                        <DropDown />
                                            <Link to  ={{pathname: "https://www.facebook.com/BrauMuntenesc" }} target="_blank" >
                                        <Button circular color='facebook' icon='facebook' />
                                            </Link>
                                            <Link to  ={{pathname: "mailto:braumuntenesc@gmai.com" }} target="_blank" >
                                        <Button circular color='purple' icon='mail' />
                                            </Link>
                                            <Link to  ={{pathname: "https://www.instagram.com/brau.muntenesc/?hl=ro" }} target="_blank" >
                                        <Button circular color='instagram' icon='instagram' />
                                            </Link>
                                            <Link to  ={{pathname: "https://www.youtube.com/channel/UCO5KJ1114BUb99cub0mqWqQ/videos" }} target="_blank" >
                                        <Button circular color='youtube' icon='youtube' />
                                            </Link>
                                        </Button.Group>
                                            </h1>}
                                    </Sticky>
                                    
                                    </Grid.Column >


                                    <Grid.Column width={12}>
                                    
                                        <Grid.Row  >
                                        <Grid.Column   >
                                        
                                            <TextCursuri latime = {this.props.dimensiuni.width}/>


                                        
                                    </Grid.Column>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <YTVID link ='https://www.youtube.com/watch?v=-T-ZdQcEgsQ' play={true}/>
                                        </Grid.Column>
                                    </Grid.Row>

                                    <Grid.Row>
                                        <Grid.Column>
                                            <Titlu color="black" titlu = "Dansul este..." latime ={this.props.dimensiuni.width} />
                                        </Grid.Column>
                                    </Grid.Row>
                                 </Grid.Row>

                                
                                       
                                           <Abureli latime = {this.props.dimensiuni.width } />
                                        
                        
                               
                                    <Grid.Row>
                                    <Link  to ="/galerie">
                                        <Grid.Column>
                                        
                                            <Titlu color="black"   titlu = "Galerie" latime = {this.props.dimensiuni.width } />
                                            
                                        </Grid.Column>
                                        </Link>
                                    </Grid.Row>

                                    <Grid.Row>
                                  
                                        <Grid.Column >
                                                <Example latime = {this.props.dimensiuni.width } />
                                        </Grid.Column>
                                        
                                     
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                        <Titlu color="black"  latime = {this.props.dimensiuni.width } titlu = "Întâlnește instructorii" />
      

                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <SegmentExamplePlaceholderGrid />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                        <Titlu color="black"  latime = {this.props.dimensiuni.width } titlu = "Informații utile" />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        
                                           <Inf />
                                        
                                    </Grid.Row>
                                  
                                        <Urmareste latime = {this.props.dimensiuni.width } />
                                    
                                    <Grid.Row>
                                        <Grid.Column>
                                             <GridExampleOnly latime = {this.props.dimensiuni.width } />
                                        </Grid.Column>
                                    </Grid.Row>
                                   
               
                                    </Grid.Column>

                                    <Grid.Column width={2}>
                                    
                                    </Grid.Column>
                                </Grid.Row>
                                
                            </Grid>
                            </StickyContainer>
                            <Titlu color="black"  titlu = "Copyrights Ivan Vlad" latime = {this.props.dimensiuni.width } />
                
          
            </React.Fragment>
           
        )
    }
}

const mapStateToProps = (state) => {
    return {
      dimensiuni: state.dimensiuni
    }
   }

export default connect(mapStateToProps)(Cursuri);