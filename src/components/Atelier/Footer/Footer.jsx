import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import './Footer.css';

function Footer() {
    return(
        <Grid  stackable style={{textAlign:"center"}} >
            <Grid.Row > 
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={14} >
                    <Grid  stackable >
                    <Grid.Row  >
                        <Grid.Column width={1}></Grid.Column>
                        
                   
                            <Grid.Column width={4}>
                            <h3 >Link-uri rapide:</h3>
                                <Link to='/about'>Despre</Link>
                                <br />
                                <Link to='/terms'>Termeni și condiții</Link>
                            </Grid.Column>

                            <Grid.Column width={4}>
                            <h3 >Contactează-mă:</h3>
                               
                                    <a href="mailto:ivanvlad97@yahoo.ro">
                                    
                                        ivanvlad97@yahoo.ro
                                    </a>
                                <br />
                               +40761532885
                            </Grid.Column>

                            <Grid.Column width={4}>
                            <h3 >Contactează-mă:</h3>
                               
                                    <a href="https://github.com/IvanVlad1997">
                                    
                                        IvanVlad1997
                                    </a>
                               
                                    <a href="https://www.linkedin.com/in/vlad-gabriel-ivan-6b679b1b6/">
                                    
                                        IvanVlad
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