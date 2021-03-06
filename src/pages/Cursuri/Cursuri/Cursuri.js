import React from 'react'
import YTVID from '../../../components/Cursuri/ComponenteCursuri/IntroYTVideo/EmbededYt'
import Titlu from '../../../components/Cursuri/ComponenteCursuri/AlteTitluri/Titlu'
import Abureli from '../../../components/Cursuri/ComponenteCursuri/Abureli/Abureli'
import IntalnesteInstructorii from '../../../components/Cursuri/ComponenteCursuri/IntalnesteInstructorii/IntalnesteInstructorii'
import InformatiiUtile from '../../../components/Cursuri/ComponenteCursuri/InformatiiUtile/InformatiiUtile'
import Urmareste from '../../../components/Cursuri/ComponenteCursuri/UrmaresteVlogul/UrmaresteVlog'
import ButoaneFinal from '../../../components/Cursuri/ComponenteCursuri/ButoaneFinal/ButoaneFinal'
import { Grid, Button} from 'semantic-ui-react'
import Galerie from '../../../components/Cursuri/ComponenteCursuri/PozaGalerie/Galerie'
import {Link} from 'react-router-dom'
import {Sticky, StickyContainer} from 'react-sticky'
import DropDown from '../../../components/Cursuri/ComponenteCursuri/DropdownDreapta/Dropdown'
import {connect} from 'react-redux'
import TextCursuri from '../../../components/Cursuri/ComponenteCursuri/TextTitlu/TextCursuri'
import Layout from "../../../components/Cursuri/Layout/Layout";
import './Cursuri.css'

class Cursuri extends React.Component {
    render() {
        return(
            <Layout>
               <Grid centered textAlign="center">
                    <Grid.Row></Grid.Row>
               </Grid>
               <StickyContainer>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={2}></Grid.Column >
                                    <Grid.Column width={12}>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <TextCursuri latime = {this.props.dimensiuni.width}/>
                                            </Grid.Column>
                                        </Grid.Row>
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
                                        <Grid.Row>
                                                 <Abureli latime = {this.props.dimensiuni.width } />
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Link  to ="/galerie">
                                                <Grid.Column>
                                                    <Titlu color="black"   titlu = "Galerie" latime = {this.props.dimensiuni.width } />
                                                </Grid.Column>
                                            </Link>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column >
                                                    <Galerie latime = {this.props.dimensiuni.width } />
                                            </Grid.Column>
                                         </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                  <Titlu color="black"  latime = {this.props.dimensiuni.width } titlu = "Întâlnește instructorii" />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <IntalnesteInstructorii />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Titlu color="black"  latime = {this.props.dimensiuni.width } titlu = "Informații utile" />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                               <InformatiiUtile />
                                        </Grid.Row>
                                        <Urmareste latime = {this.props.dimensiuni.width } />
                                        <Grid.Row>
                                        <Grid.Column>
                                             <ButoaneFinal latime = {this.props.dimensiuni.width } />
                                        </Grid.Column>
                                    </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column width={2} className="display-none-400px" textAlign={"right"}>
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
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
               </StickyContainer>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      dimensiuni: state.dimensiuni
    }
   }

export default connect(mapStateToProps)(Cursuri);