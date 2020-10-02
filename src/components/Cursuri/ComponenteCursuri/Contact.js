import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Container, Grid, Icon, Header} from 'semantic-ui-react'
import history from '../../../history'


const Contact = () => {
    return (
        <Container>
            <Grid centered>
                <Grid.Row>
                    <Grid.Column>
                    <Button onClick={() => history.push("/Cursuri")}>Du-mă înapoi</Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Header style={{fontSize:40}}>Numărul de telefon: 0751/105.873</Header>
                </Grid.Row>
                
                    <Grid.Row>
                   
                        <Link to  ={{pathname: "https://www.facebook.com/BrauMuntenesc" }} target="_blank" >
                    <Button size='big' circular color='facebook' ><Icon name="facebook"></Icon>Contactează-ne pe FaceBook</Button>
                        </Link>
                    </Grid.Row>
                    <Grid.Row>
                        <Link to  ={{pathname: "mailto:braumuntenesc@gmai.com" }} target="_blank" >
                    <Button size='big' circular color='purple'  ><Icon name="mail"></Icon>Trimite-ne un mail</Button>
                        </Link>
                  </Grid.Row>
                    <Grid.Row>
                        <Link to  ={{pathname: "https://www.instagram.com/brau.muntenesc/?hl=ro" }} target="_blank" >
                    <Button size='big' circular color='instagram' ><Icon name="instagram"></Icon>Ne găsești și pe Instagram</Button>
                        </Link>
                    </Grid.Row>
                    <Grid.Row>
                        <Link to  ={{pathname: "https://www.youtube.com/channel/UCO5KJ1114BUb99cub0mqWqQ/videos" }} target="_blank" >
                    <Button size='big' circular color='youtube' ><Icon name="youtube"></Icon>Dă-ne un subscribe pe YouTube</Button>
                        </Link>
                    
     
                    </Grid.Row>

                
            </Grid>
               
       
        </Container>
    )
}

export default Contact