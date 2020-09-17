import React from 'react'
import { Table } from 'semantic-ui-react'
import TabelInfo from './TabelInfoPers'
import {connect} from 'react-redux'
import {aducUserii, aducPlatile} from '../../../redux/actions/index'
import {Form, Control} from 'react-redux-form'

class Tabel extends React.Component {
  componentDidMount() {
 
    this.props.aducPlatile()
    this.props.aducUserii()
   
}

  render() {
    return (
      <React.Fragment>
      <Form className= "ui form"
      model="alegeGrupa"
    >
          
          
          <Control.select defaultValue="Toti" model="alegeGrupa.grupa" id="alegeGrupa.grupa">
                 <option value="Toti">Toți</option>
                  <option value="Luni19">Luni 19</option>
                  <option value="Marți18">Marți 18</option>
                  <option value="Marți19">Marți 19</option>
                  <option value="Fără grupă">Fără grupă</option>
                  <option value ="Arhivă">Arhivă</option>
                  
              </Control.select>
          
         
          {/* <button type ="submit">
                Trimite                          
            </button>  */}

       </Form>
      <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nume</Table.HeaderCell>
          <Table.HeaderCell>Număr de telefon</Table.HeaderCell>
          <Table.HeaderCell>E-mail</Table.HeaderCell>
          <Table.HeaderCell>Grupă/e</Table.HeaderCell>
          <Table.HeaderCell>Plătit până la</Table.HeaderCell>
          <Table.HeaderCell>Sumă</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
            <TabelInfo profiles ={this.props.profiles} plati={this.props.plati}/>
       </Table.Body>
    </Table>
    </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      profiles: Object.values(state.profiles),
      plati: Object.values(state.plati),
  }
}



export default connect(mapStateToProps, {aducUserii, aducPlatile})(Tabel)