import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import './Footer.css';

function Footer() {
    return(
        <Grid  stackable style={{textAlign:"center", margin:0}} className="footerColor" >
            <Grid.Row > 
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={14} >
                    <Grid  stackable >
                    <Grid.Row  >
                        <Grid.Column width={1}></Grid.Column>
                   
                            <Grid.Column width={6}>
                            <h3 >Link-uri rapide:</h3>
                                <Link to='/Cursuri'>Cursuri</Link>
                                <br />
                                <Link to='/Atelier'>Broderie</Link>
                                <br />
                                <Link to='/Evenimente'>Evenimente</Link>
                                <br />
                                <Link to='/politicaconfidentialitate'>Politica de confidențialitate</Link>
                                <br />
                                <Link to='/Vlog'>Dansuri</Link>
                            </Grid.Column>

                            <Grid.Column width={6}>
                            <h3 >Contactează-ne:</h3>
                                <a href="mailto:braumuntenesc@gmail.com">
                                    braumuntenesc@gmail.com
                                </a>
                                <br />
                                <a href="https://www.facebook.com/BrauMuntenesc">
                                    Facebook
                                </a>
                                <br />
                                <a href="https://www.youtube.com/channel/UCO5KJ1114BUb99cub0mqWqQ/videos">
                                    Youtube
                                </a>
                                <br />
                                <a href="https://www.instagram.com/brau.muntenesc/?hl=ro">
                                   Instagram
                                </a>
                                <br />
                               +4075/1105.873
                            </Grid.Column>
                            <Grid.Column width={1}></Grid.Column>
                        </Grid.Row>
                       
                    </Grid>

                    </Grid.Column>
                   
            </Grid.Row>
                 <Grid.Row centered style={{paddingTop:30}}>
                        <h2>
                            &copy; Brâu Muntenesc, 2020
                        </h2>
                </Grid.Row>
                <Grid.Row centered>
                        <h4>
                            Made by Ivan Vlad
                        </h4>
                </Grid.Row>
        </Grid>

       
    );
}

export default Footer;