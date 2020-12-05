import React from 'react'
import {Grid, Header,Button} from 'semantic-ui-react'

const TextEvenimente = ({latime}) => {
    if (latime<600){
        return (
            <Grid centered style={{paddingTop: 100}}>
                <Grid.Row>
                    <Header style={{color: "#00b5ad", fontSize: 15}}>
                        Povestea noastră, a școlii de dansuri populare ”BRÂU MUNTENESC”, prezentată în emisiunea ”Femei de 10, bărbați de 10”, sâmbătă, 23.11.2019, pe TVR2 și pe TVR+.
                        Îi mulțumim doamnei Marina Almășan pentru șansa pe care ne-a acordat-o să v-o spunem tuturor, dar și oamenilor minunați din echipa dumneaei – oameni care nu se văd în cadru, dar a căror contribuție la reușita emisiunii este impresionantă.
                    </Header>
                </Grid.Row>
                <Header style={{color: "#00b5ad", fontSize: 15}}>
                    Lait-motiv: accesați fondurile europene indiferent ce idee de afacere aveți! Există firme de consultanță care vă pot ajuta cu actele. Succes tuturor! </Header>
                <Grid.Row style={{color: "#00b5ad", fontSize: 15}}>
                    <Button primary href="https://www.tvrplus.ro/emisiuni/femei-de-10,-b%C4%83rba%C5%A3i-de-10-44-2314?fbclid=IwAR0MfxkjGgL0MOShFB3HNLjpPoznX24cKBKCJffCAzGAkO5XDuTGvDR6FNA" target="_blank">
                        Urmărește povestea aici!
                    </Button>
                </Grid.Row>
            </Grid>
        )
    } else {
        return (
            <Grid centered style={{paddingTop: 100}}>
                <Grid.Row>
                    <Header style={{color: "#00b5ad", fontSize: 25}}>
                        Povestea noastră, a școlii de dansuri populare ”BRÂU MUNTENESC”, prezentată în emisiunea ”Femei de 10, bărbați de 10”, sâmbătă, 23.11.2019, pe TVR2 și pe TVR+.
                        Îi mulțumim doamnei Marina Almășan pentru șansa pe care ne-a acordat-o să v-o spunem tuturor, dar și oamenilor minunați din echipa dumneaei – oameni care nu se văd în cadru, dar a căror contribuție la reușita emisiunii este impresionantă.
                    </Header>
                </Grid.Row>
                <Header style={{color: "#00b5ad", fontSize: 25}}>
                    Lait-motiv: accesați fondurile europene indiferent ce idee de afacere aveți! Există firme de consultanță care vă pot ajuta cu actele. Succes tuturor! </Header>
                <Grid.Row style={{color: "#00b5ad", fontSize: 25}}>
                    <Button primary href="https://www.tvrplus.ro/emisiuni/femei-de-10,-b%C4%83rba%C5%A3i-de-10-44-2314?fbclid=IwAR0MfxkjGgL0MOShFB3HNLjpPoznX24cKBKCJffCAzGAkO5XDuTGvDR6FNA" target="_blank">
                        Urmărește povestea aici!
                    </Button>
                </Grid.Row>
            </Grid>
        )
    }
}

export default TextEvenimente