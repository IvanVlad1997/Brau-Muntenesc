import React from 'react'
import {Card, Container,  Button, Image, Grid} from 'semantic-ui-react'
import history from '../../../../history'

function ParteneriMedia() {
    const src='https://i.imgur.com/2cH7mRn.png'
    return (
        <div>
            <Button onClick={() => history.push("/Cursuri")}>Du-mă înapoi</Button>
            <Container  textAlign="center">
            
                <h1 style={{ padding:50}} >Parteneri Media</h1>
                <Grid stackable divided="vertically" >
                    <Grid.Row columns="3" >
                        <Grid.Column >
                           <a href="https://www.telegrama.ro/social/economie/grupul-lukoil-i-a-premiat,-cu-cate-6-000-de-dolari,-pe-ca%C8%99tigatorii-primei-edi%C8%9Bii-a-concursului-de-proiecte-sociale-%C8%99i-culturale-pe-care-l-a-organizat-in-romania-galerie-foto.html" 
                                target="_blank"> <Card centered fluid raised image={'https://i.imgur.com/AGkljKQ.jpg'} /></a> 
                        </Grid.Column>

                        <Grid.Column>
                           <a href="https://www.youtube.com/watch?v=F1K1P823dao" 
                           target="_blank"> <Card centered fluid raised image={'https://i.imgur.com/2cH7mRn.png'} /></a> 
                        </Grid.Column>

                        <Grid.Column>
                           <a href="https://eduscoala.ro/revista/nr20/" 
                           target="_blank"> <Card centered fluid raised image={'https://i.imgur.com/kbHlXMn.png'} /></a> 
                        </Grid.Column>

                       


                        <Grid.Column>
                           <a href="https://prahovaeconomica.eu/2019/07/05/video-povestea-braului-muntenesc-de-la-ploiesti-cum-sa-iti-deschizi-o-scoala-de-dans-popular-printr-o-finantare-start-up-plus/" 
                           target="_blank"> <Card centered fluid raised image={"https://i.imgur.com/nE5dRTy.png"} /></a> 
                        </Grid.Column>
                        
                       

                        <Grid.Column>
                           <a href="https://www.observatorulph.ro/social/113314-povestea-de-succes-a-unui-tanar-din-ploiesti-care-a-atras-fonduri-ue-pentru-a-face-o-scoala-de-dans-popular?fbclid=IwAR1PlMJuB852BaAQ-3BhuRLpF6pI_KHJQqW1-4h8fTI12tAMNDygIKZnwpw" 
                           target="_blank"> <Card centered fluid raised image={'https://i.imgur.com/PmMy5CD.png'} /></a> 
                        </Grid.Column>
                       
                        <Grid.Column>
                           <a href="https://realitateadeprahova.net/brau-muntenesc-scoala-din-ploiesti-care-a-atras-bani-europeni-pentru-a-promova-traditia-romaneasca/" 
                           target="_blank"> <Card centered fluid raised image={'https://i.imgur.com/f0SRcBd.png'} /></a> 
                        </Grid.Column>

                        <Grid.Column>
                           <a href="https://gazetaph.ro/drumul-de-la-pasiune-la-afacere-in-pasi-de-hora-brau-muntenesc-scoala-din-ploiesti-care-a-atras-bani-europeni-pentru-a-promova-traditia-romaneasca/" 
                           target="_blank"> <Card centered fluid raised image={'https://i.imgur.com/WK3Fjxo.jpg'} /></a> 
                        </Grid.Column>
                      
                        <Grid.Column>
                           <a href="https://www.ziarulincomod.ro/drumul-de-la-pasiune-la-afacere-pasi-de-hora-brau-muntenesc-scoala-din-ploiesti-care-atras-bani-europeni-pentru-promova-traditia-romaneasca/" 
                           target="_blank"> <Card centered fluid raised image={'https://i.imgur.com/cnsOpr8.png'} /></a> 
                        </Grid.Column>

                        <Grid.Column>
                           <a href="http://www.actualitateaprahoveana.ro/editia-electronica/stiri-locale/drumul-de-la-pasiune-la-afacere-in-pasi-de-hora-brau-muntenesc-scoala-din-ploiesti-care-a-atras-bani-europeni-pentru-a-promova-traditia-romaneasca-25187" 
                           target="_blank"> <Card centered fluid raised image={'https://i.imgur.com/AOaxnta.png'} /></a> 
                        </Grid.Column>

                       
                        <Grid.Column>
                           <a href="https://www.prahovabusiness.ro/de-la-pasiune-la-afacere-brau-muntenesc-scoala-din-ploiesti-care-a-atras-bani-europeni-pentru-a-promova-traditia-romaneasca/" 
                           target="_blank"> <Card centered fluid raised image={'https://i.imgur.com/31RZeAh.png'} /></a> 
                        </Grid.Column>

                        <Grid.Column>
                           <a href="https://deprahova.ro/actualitate/drumul-de-la-pasiune-la-afacere,-%C3%AEn-pa%C8%99i-de-hor%C4%83-br%C3%A2u-muntenesc,-%C8%99coala-din-ploie%C8%99ti-care-a-atras-bani-europeni-pentru-a-promova-tradi%C8%9Bia-rom%C3%A2neasc%C4%83.html" 
                           target="_blank"> <Card centered fluid raised image={'https://i.imgur.com/ZRWhVgt.jpg'} /></a> 
                        </Grid.Column>


                       
                      
                        
                        

                    </Grid.Row>
                </Grid>
            </Container>
             
            
        </div>
    )
}

export default ParteneriMedia
