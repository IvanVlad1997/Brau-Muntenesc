import React from 'react'
import {Grid, Header} from 'semantic-ui-react'

const Text2Evenimente = ({latime}) => {
    if (latime > 600){
        return (
            <Grid centered style={{paddingTop: 100}}>
                <Grid.Row>
                    <Header style={{color: "#00b5ad", fontSize: 25}}>
                        Ești în căutarea unui moment cu adevărat special pentru evenimentul tău? Bine ne-ai găsit! Fie că
                        plănuiești un eveniment privat sau unul pentru compania ta, echipa noastră de dansatori e pregătită
                        să-ți vină în ajutor.
                    </Header>
                </Grid.Row>
                <Grid.Row style={{color: "#00b5ad", fontSize: 25}}>
                    <i className="thumbs up outline icon"></i><span>100% dans popular</span>
                </Grid.Row>
                <Grid.Row style={{color: "#00b5ad", fontSize: 25}}>
                    <i className="thumbs up outline icon"></i><span>100% distracție și interacțiune cu invitații</span>
                </Grid.Row>
                <Grid.Row style={{color: "#00b5ad", fontSize: 25}}>
                    <i className="thumbs up outline icon"></i><span>100% clienți fericiți (o spune statistica, nu noi) </span>
                </Grid.Row>
                <Header style={{color: "#00b5ad", fontSize: 25}}>
                    Vrei o ofertă personalizată pentru evenimentul tău? Sună-ne la 0751/105.873 sau trimite-ne un e-mail
                    la <a href="mailto:braumuntenesc@gmail.com">braumuntenesc@gmail.com</a> în care specifici datele
                    de contact (nume, telefon, e-mail), data evenimentului,
                    locația (localitate + restaurant), numărul de perechi de dansatori și numărul de dansuri (sau durata
                    momentului artistic) – revenim în cel mai scurt timp cu oferta solicitată! </Header>
            </Grid>
        )
    } else {
        return (
            <Grid centered style={{paddingTop: 100}}>
                <Grid.Row>
                    <Header style={{color: "#00b5ad", fontSize: 15}}>
                        Ești în căutarea unui moment cu adevărat special pentru evenimentul tău? Bine ne-ai găsit! Fie că
                        plănuiești un eveniment privat sau unul pentru compania ta, echipa noastră de dansatori e pregătită
                        să-ți vină în ajutor.
                    </Header>
                </Grid.Row>
                <Grid.Row style={{color: "#00b5ad", fontSize: 15}}>
                    <i className="thumbs up outline icon"></i><span>100% dans popular</span>
                </Grid.Row>
                <Grid.Row style={{color: "#00b5ad", fontSize: 15}}>
                    <i className="thumbs up outline icon"></i><span>100% distracție și interacțiune cu invitații</span>
                </Grid.Row>
                <Grid.Row style={{color: "#00b5ad", fontSize: 15}}>
                    <i className="thumbs up outline icon"></i><span>100% clienți fericiți </span>
                </Grid.Row>
                <Header style={{color: "#00b5ad", fontSize: 15}}>
                    Vrei o ofertă personalizată pentru evenimentul tău? Sună-ne la 0751/105.873 sau trimite-ne un e-mail
                    la <a href="mailto:braumuntenesc@gmail.com">braumuntenesc@gmail.com</a> în care specifici datele
                    de contact (nume, telefon, e-mail), data evenimentului,
                    locația (localitate + restaurant), numărul de perechi de dansatori și numărul de dansuri (sau durata
                    momentului artistic) – revenim în cel mai scurt timp cu oferta solicitată! </Header>
            </Grid>
        )
    }

}

export default Text2Evenimente