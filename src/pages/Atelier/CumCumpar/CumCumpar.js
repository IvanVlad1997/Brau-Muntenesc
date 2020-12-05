import React from 'react'
import {Grid} from 'semantic-ui-react'
import Layout from "../../../components/Atelier/Layout/Layout";

const CumCumpar = ({latime}) => {
        return (
            <Layout>
            <Grid centered style={{padding:30}}>
                <Grid.Row><h1>CUM CUMPĂR:</h1></Grid.Row>
                <Grid.Row>Comanda se face pe telefonic - 0751/105.873 - sau prin email. Nu exista valoare minimă pentru o comandă.</Grid.Row>
                <Grid.Row><h1>MOD DE PLATĂ:</h1></Grid.Row>
                <Grid.Row><h2>1. PLATA LA LIVRARE</h2></Grid.Row>
                <Grid.Row>Selectați opţiunea “Plată la livrare” și, în momentul primirii coletului, achitați curierului suma aferentă produselor comandate. Factura include și taxa de curierat de 15 lei.</Grid.Row>
                <Grid.Row><h2>2. PLATA PRIN CARDUL BANCAR</h2></Grid.Row>
                <Grid.Row>Puteți efectua plata online, prin cardul bancar personal, în condiţii de siguranţă deplină.
                    Nu îţi vom cere niciodată codul PIN!
                    Pentru toate comenzile achitate online cu cardul, TRANSPORTUL ESTE GRATUIT oriunde în țară.
                    Nicio comandă nu va fi procesată înainte de a fi confirmată de dumneavoastră.
                </Grid.Row>
                <Grid.Row><h1>RETUR:</h1></Grid.Row>
                <Grid.Row><h2>Informații retur</h2></Grid.Row>
                <Grid.Row>Conform O.U.G 34/2014, consumatorul are dreptul să returneze orice produs fără invocarea vreunui motiv în termen de 14 zile calendaristice din momentul recepţionarii lui.</Grid.Row>
                <Grid.Row><h2>Procedura de retur:</h2></Grid.Row>
                <Grid.Row>
                    Comunicați în termenul legal intenţia de returnare printr-un email la adresa braumuntenesc”gmail.com specificând şi metoda de retur a contravalorii.
                </Grid.Row>
                <Grid.Row>
                    - Ambalaţi produsul corespunzător astfel încât să nu se deterioreze pe durata transportului.
                </Grid.Row>
                <Grid.Row>
                    - Contactaţi firma de curierat pentru ridicarea acestuia din locaţia dumneavoastră.
                </Grid.Row>
                <Grid.Row>
                    - Veţi fi înştiinţaţi prin e-mail în momentul primirii acestuia.
                </Grid.Row>
                <Grid.Row><h3>Atentie:</h3></Grid.Row>
                <Grid.Row>
                    - La returnarea produselor, acestea trebuie să fie în aceeaşi stare, în ambalajul original, cu eticheta intactă şi însoțite de factură.
                </Grid.Row>
                <Grid.Row>
                    - Ne rezervăm dreptul de a putea refuza primirea produselor în cazul în care acestea au fost returnate într-o stare care nu mai permite revânzarea lor (ex: deteriorate, purtate, rupte, cu obiecte lipsă etc).
                </Grid.Row>
                <Grid.Row>
                    - Nu se acceptă primirea coletelor trimise cu ramburs.
                </Grid.Row>
                <Grid.Row>
                    - Contravaloarea produsului returnat se va face într-un cont bancar la alegerea dumneavoastră. Transferul banilor se va face în maximum 14 zile de la primirea produsului şi procesarea returului.
                </Grid.Row>
                <Grid.Row><h2>Clientul poate solicita returnarea produselor în următoarele situații:</h2></Grid.Row>
                <Grid.Row>
                    1. Coletele prezintă deteriorări severe;
                </Grid.Row>
                <Grid.Row>
                    2. Produsele au fost livrate/facturate greșit. Livrarea altor produse decât cele solicitate trebuie semnalată imediat, iar consumatorul va refuza recepția. Consumatorul poate solicita returnarea acestuia pentru înlocuire, iar, dacă produsul nu mai este pe stoc, poate opta pentru înlocuire sau rambursarea integrală a contravalorii. Dacă se agreează înlocuirea cu un produs de o valoare mai mare, va plăti diferența, respectiv dacă valoarea este mai mică, va primi o rambursare parțială până la valoarea produsului înlocuitor.
                </Grid.Row>
                <Grid.Row>
                    3. Produsele prezintă defecte de fabricație;
                </Grid.Row>
                <Grid.Row>
                    4. Consumatorul are dreptul să notifice în scris comerciantului că renunța la cumpărare, fără penalități și fără invocarea unui motiv, în termen de 10 zile lucrătoare de la primirea produsului. De asemenea, în conformitate cu art. 7 alin. 1 din OG 130/2000, Clientul are dreptul de a denunța unilateral contractul la distanță, în termen de 10 zile lucrătoare de la data primirii produsului/produselor, fără penalități și fără invocarea vreunui motiv. În acest caz, cheltuielile directe de returnare a produselor vor cădea, conform legii, în sarcina Clientului.
                </Grid.Row>
                <Grid.Row><h2>Plata expediţiei de retur se va face de către Brau Muntenesc în următoarele situaţii:</h2></Grid.Row>
                <Grid.Row>
                    - Alt produs decât cel comandat.
                </Grid.Row>
                <Grid.Row>
                    - Altă culoare decât cea comandată.
                </Grid.Row>
                <Grid.Row>
                    - Altă măsură scrisă pe ambalaj decât cea comandată.
                </Grid.Row>
                <Grid.Row>
                    - Defect de fabricaţie.
                </Grid.Row>
                <Grid.Row>
                    - Produse deteriorate.
                </Grid.Row>
            </Grid>
            </Layout>
        )

}

export default CumCumpar;