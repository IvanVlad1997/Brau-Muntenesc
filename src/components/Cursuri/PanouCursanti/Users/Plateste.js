import React from 'react'
import {connect} from 'react-redux'
import {aducUserii, plateste, aducPlatile} from '../../../../redux/actions/index'
import {Form, Control} from 'react-redux-form'
import Loading from '../../../Loading'
import { Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
class Plateste extends React.Component {
    componentDidMount() {
        this.props.aducUserii()
        this.props.aducPlatile()
       
    }

    onSubmit(v) {
          console.log(v)
           this.props.plateste(this.props.match.params.id, v)
    }

    render() {
        if(!this.props.user)
         return <Loading />
        return (
            <React.Fragment>
            <Form className= "ui form"
            model="plata"
            onSubmit={(creds) => this.onSubmit(creds) }
            style= {{padding: 30}}>
                
                <label htmlFor="plata.sumaUltimaPlata">Suma</label>
                <Control.text model="plata.sumaUltimaPlata" id="sumaUltimaPlata"  />
                <label htmlFor="plata.optiuneAbonament">Tip Abonament</label>
                <Control.select model="plata.optiuneAbonament" id="optiuneAbonament">
                    <option value="Abonament">Abonament</option>
                    <option value="O ședință">O ședință</option>
                </Control.select>
                <label htmlFor="plata.astazi">Folosește data de astăzi</label>
                <Control.checkbox model="plata.astazi" id="astazi"></Control.checkbox>
                <br />
                <label htmlFor="plata.zi">Zi</label>
                <Control.text model="plata.zi" id="zi"  />
                <label htmlFor="plata.luna">Luna</label>
                <Control.text model="plata.luna" id="luna"  />
                <label htmlFor="plata.an">An</label>
                <Control.text model="plata.an" id="an"  />
                
                <button className="ui button red " type ="submit">
                      Trimite                          
                  </button> 

             </Form>

            <Link to ={`/user/${this.props.user.uid}`}>
                 <Button primary >Înapoi</Button>
            </Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return{
        user: state.profiles[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps,{aducUserii, plateste, aducPlatile})(Plateste)