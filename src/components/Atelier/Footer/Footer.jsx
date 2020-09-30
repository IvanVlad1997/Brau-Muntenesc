import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import './Footer.css';

function Footer() {
    return(
        <Grid  stackable style={{textAlign:"center"}} className="footerColor" >
            <Grid.Row > 
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={14} >
                    <Grid  stackable >
                    <Grid.Row  >
                        <Grid.Column width={1}></Grid.Column>
                        
                   
                            <Grid.Column width={4}>
                            <h3 >Link-uri rapide:</h3>
                                {/* <Link to='/about'>TERMENI SI CONDITII https://www.sinsay.com/ro/ro/terms</Link> */}
                                <br />
                                <Link to='/politicaconfidentialitate'>Politica de confidențialitate</Link>
                            </Grid.Column>

                            <Grid.Column width={4}>
                            <h3 >Contactează-ne:</h3>
                               
                                    <a href="mailto:braumuntenesc@gmail.com">
                                    
                                        braumuntenesc@gmail.com
                                    </a>
                                <br />
                               +4075/1105.873
                            </Grid.Column>

                            <Grid.Column width={4}>
                            <h3 >Link-uri:</h3>
                               
                                    <a href="https://www.facebook.com/BrauMuntenesc">
                                    
                                        Facebook
                                    </a>
                               
                                   
                              
                            </Grid.Column>
                            <Grid.Column width={1}></Grid.Column>

                        </Grid.Row>
                       
                    </Grid>

                    </Grid.Column>
                   
            </Grid.Row>
           
                  <Grid.Row centered style={{padding:30}}>
                        <h2>
                            &copy; Ivan Vlad, 2020
                        </h2>
                 </Grid.Row>
                        
        </Grid>

       
    );
}

export default Footer;