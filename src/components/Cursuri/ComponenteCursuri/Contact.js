import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Container, Grid, Icon, Header} from 'semantic-ui-react'
import history from '../../../history'
import Layout from "../Layout/Layout";


const Contact = () => {
    return (
        <Layout>
            <Container>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column>

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
                    <Header style={{fontSize:30}}>Adresa: Sudarc - fostul Consproiect, str. Maramureș, nr. 12, et. 2, cam. 97  vizavi de Liceul Mihai Viteazul</Header>
                    <div className="google-map-code">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.361319547443!2d26.021141615028913!3d44.93632227909822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2498dac260f15%3A0x6d7e987283bc5a58!2sConsproiect!5e0!3m2!1sro!2sro!4v1598020525295!5m2!1sro!2sro"
                                width="600"
                                height="450"
                                title="locatie"
                                style={{border:0, paddingTop: 50}}

                                aria-hidden="false"
                        ></iframe>
                    </div>
                </Grid>
            </Container>
        </Layout>
    )
}

export default Contact