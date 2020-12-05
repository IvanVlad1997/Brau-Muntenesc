import React from 'react'
import {Grid, Header, Button} from 'semantic-ui-react'
import {Form, Control} from 'react-redux-form'
import {connect} from 'react-redux'
import Titlu from '../../../Cursuri/ComponenteCursuri/AlteTitluri/Titlu'
import {trimiteCerereEveniment} from '../../../../redux/actions/actiuni'

const DespreNoi = (props) => {

const onSubmit =(c) =>{
    props.trimiteCerereEveniment(c)
    console.log(c)
}
    return (
        <Grid centered>
            <Grid.Row>
                   <Titlu latime ={props.latime} color="teal" titlu="Trimite-ne cererea" />
             </Grid.Row>
              <Form className= "ui form"
                model="contactEvenimente"
                onSubmit={(creds) => onSubmit(creds) }>
                    <label htmlFor="contactEvenimente.nume">Nume</label>
                    <Control.text model="contactEvenimente.nume" id="nume" />
                    <label htmlFor="contactEvenimente.email">Email</label>
                    <Control.text type="email" model="contactEvenimente.email" id="email" />
                    <label htmlFor="contactEvenimente.telefon">Număr de telefon</label>
                    <Control.text  model="contactEvenimente.telefon" id="telefon" />
                    <label htmlFor="contactEvenimente.dataEveniment">Data eveniment</label>
                    <Control.text  model="contactEvenimente.dataEveniment" id="dataEveniment" />
                    <label htmlFor="contactEvenimente.oras">Localitate</label>
                    <Control.text  model="contactEvenimente.oras" id="oras" />
                    <label htmlFor="contactEvenimente.restaurant">Restaurant</label>
                    <Control.text  model="contactEvenimente.restaurant" id="restaurant" />
                    <label htmlFor="contactEvenimente.nrPerechi">Număr de perechi</label>
                    <Control.select model="contactEvenimente.nrPerechi" id="contactEvenimente.nrPerechi">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </Control.select>
                    <label htmlFor="contactEvenimente.nrSuite">Număr de suite(o suită ~ 5 minute)</label>
                    <Control.select model="contactEvenimente.nrSuite" id="contactEvenimente.nrSuite">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </Control.select>
                    <Header>Preț: {props.contactEvenimente.nrPerechi*200 + props.contactEvenimente.nrSuite*200 } lei</Header>
                   
       
       
       
                   
                    <Button type ="submit">
                          Trimite                          
                      </Button> 

                </Form>
        </Grid>
    )

}

const mapStateToProps =(state) => {
    return {
        contactEvenimente: state.contactEvenimente
    }
}

export default connect(mapStateToProps, { trimiteCerereEveniment})(DespreNoi)